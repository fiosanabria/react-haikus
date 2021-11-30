import React from 'react'
import "./Compartir.css";

const Compartir = ({children}) => {
    const compartiendo = () => {
        try {
            navigator.clipboard.writeText ("se copio el enlace")
        } catch (error) {
           console.log (error)
        }
    } 

    return (
        <div className="Boton" onClick={compartiendo}>
          {children}
        </div>
    )
}

export default Compartir
