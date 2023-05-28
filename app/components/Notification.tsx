import { Alert, AlertColor, Snackbar, Typography } from "@mui/material"
import React from "react"

type NotificationProperties = {
    open: boolean, //This vble describes when the notification is open and when is closed.
    message: string,
    severity: AlertColor | undefined, //Passes through the "alert" área.
    handleClose: () => void
}

export const Notification: React.FC<NotificationProperties> = ({ open, message, severity, handleClose }: NotificationProperties) => {

    //Snackbar: shows temporary messages in the screen. Usefull for showing "success", "warning", & "error" messages.
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