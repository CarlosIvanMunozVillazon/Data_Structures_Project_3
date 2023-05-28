"use client";
import React from 'react'
import { Notification } from "../components/Notification"
import { AlertColor } from '@mui/material';

type ContextProperties = {
    getError: (msg: string) => void,
    getSuccess: (msg: string) => void
}


export const NotificationContext = React.createContext<ContextProperties | null>(null);


export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {


    //The next three const handle the Notification properties state.
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    const handleClose = () => { setOpen(false); }

    //Here we handle the oppening and close of the notification, outside of the return. If we tried to handle that there it would be hanlded within the application, and we don't want that.

    //The next functions hanlde when we want to close the Notification.
    const getError = (msg: string) => {

        setSeverity("error");
        setOpen(true);
        setMessage(msg);

    }

    const getSuccess = (msg: string) => {

        setSeverity("success");
        setOpen(true);
        setMessage(msg);

    }


    const value = {
        getError,
        getSuccess,
    }



    return (
        //".provider" is a property of the React's context creator. What we are creating is a provider.
        //Fot that we need a context, which allows us calling the attribute/class "provider", that allows wrapping the whole application with it.
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleClose} open={open} severity={severity} message={message} />
            {/*The notification component is at the same level as the children. */}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContext);
    if (!context) throw Error('no context found')
    return context
}
