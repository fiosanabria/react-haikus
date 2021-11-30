import React from 'react'
import { useState } from 'react';
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


const Tarjeta = ({ haiku, autor }) => {
    const [invisible, setInvisible] = useState(true);

    const cambiarVisibilidad = () => {
        if (invisible === true) {
            setInvisible(false);
        } else if (invisible === false) {
            setInvisible(true);
        }
    }


    return (
        <div className="tarjeta">
            <div className="textosuperior" onClick={cambiarVisibilidad}>
                <motion.p className="Haiku" animate={{ scale: invisible ? 1 : 1.3 }} 
                    transition={{ duration: 0.5 }} style={{
                        display: invisible ? "none" : "block",
                    }}> va salir ag7 </motion.p>
                <img src="https://picsum.photos/500/300" alt="" />
            </div>
            <div className="ImagenTarjeta" >
                <div className="alLado" >
                    <img src="https://picsum.photos/32/32" alt="" />
                    <h4>nombre</h4>
                </div>
                <FontAwesomeIcon icon={faShare} className="" />
            </div>
        </div>
    )
}

export default Tarjeta;
