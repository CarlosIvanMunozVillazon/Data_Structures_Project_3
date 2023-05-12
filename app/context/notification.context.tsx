"use client";
import React from 'react'
import { Notification } from "../components/Notification"
import { AlertColor } from '@mui/material';

type ContextProperties = {
    getError: (msg: string) => void,
}

const defaultContext: ContextProperties = {
    getError: (msg: string) => {
      console.log(`error xd ${msg}`);
    },
 };
  

export const NotificationContext = React.createContext<ContextProperties>(defaultContext);


export const NotificationProvider: React.FC<{children: JSX.Element}> = ({children}) => {

    
    //Con estos tres modificamos los estados del tipo de componente Notification.
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);
    const handleClose = () => { setOpen(false); }

    //Se maneja por fuera del return, si fuera ahi dentro seria dentro de la aplicación y no queremos eso.
    //maneja cuando quiero cerrar la notificación.
    const getError = (msg: string) => {

        setSeverity("error");
        setOpen(true);
        setMessage(msg);

    }

    const value = {
        getError
    }

    //.provider es una propiedad del creador de context de react. Lo que estamos creando es un proveedor.
    //para ello necesitamos crear un contexto, que nos permite llamar el atributo/clase provider, que permite inyectarlo en toda la aplicacion.

    //El componente notification no engloba nada está al mismo nivel que el children.
    return (
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleClose} open={open} severity={severity} message={message} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContext);
    return context
}
