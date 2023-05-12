import { Alert, AlertColor, Snackbar, Typography } from "@mui/material"
import React from "react"

type NotificationProperties = {
    open: boolean, //we need to open and close
    message: string,
    severity: AlertColor | undefined, //pasa por el área del alert
    handleClose: () => void
}

export const Notification: React.FC<NotificationProperties> = ({ open, message, severity, handleClose }: NotificationProperties) => {

    //Snackbar: muestra mensajes temporales en la parte inferior de la pantalla. Chebre pa mostrar mensajes de éxito, advertencia, y error entre otros.

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={4000}
            open={open}
            onClose = {handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{message}</Typography>
            </Alert>
        </Snackbar>
    )
}