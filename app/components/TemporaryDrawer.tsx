import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LaptopIcon from '@mui/icons-material/Laptop';
import CampaignIcon from '@mui/icons-material/Campaign';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { Grid, IconButton, Stack, Typography } from '@mui/material';

//Still need to review the functions within this component.
type Anchor = 'left';

type TemporaryDrawerProperties = {
  state: any,
  setState: any,
  toggleDrawer: (anchor: Anchor, open: boolean) => void | any,

}

//Links for navigating using the icons still need to be implemented.
export const TemporaryDrawer: React.FC<TemporaryDrawerProperties> = ({ state, setState, toggleDrawer }: TemporaryDrawerProperties) => {


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "25vh", height: "75vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <Grid container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ height: "100vh" }}
      >

        <Grid item alignItems="center">
          <Stack direction="column" spacing={5}>

            <IconButton>
              <RocketLaunchOutlinedIcon></RocketLaunchOutlinedIcon>
              <Typography variant="body1" textAlign="center">Discover</Typography>
            </IconButton>


            <IconButton>
              <CampaignIcon></CampaignIcon>
              <Typography variant="body1" textAlign="center">Promotions</Typography>
            </IconButton>

            <IconButton>
              <ViewInArIcon></ViewInArIcon>
              <Typography variant="body1" textAlign="center">New Products</Typography>
            </IconButton>

            <IconButton>
              <RecyclingIcon></RecyclingIcon>
              <Typography variant="body1" textAlign="center">Used Products</Typography>
            </IconButton>

            <IconButton>
              <LaptopIcon></LaptopIcon>
              <Typography variant="body1" textAlign="center">Results</Typography>
            </IconButton>

            <IconButton>
              <FavoriteIcon></FavoriteIcon>
              <Typography variant="body1" textAlign="center">Wished</Typography>
            </IconButton>

          </Stack>

        </Grid>



      </Grid>



    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ width: "100vh" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}