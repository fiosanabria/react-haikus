import React from 'react'
import "./Contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Contactanos = () => {
    return (
        <>

            <div id="redes">
                <FontAwesomeIcon icon={faFacebook} className="icono" />
                <FontAwesomeIcon icon={faEnvelope} className="icono" />
                <FontAwesomeIcon icon={faTwitter} className="icono" />


            </div>

            <p className="letra">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur magni illo voluptatibus exercitationem ipsa aut? Nostrum repellendus eligendi vitae quis veritatis minus, impedit recusandae eaque necessitatibus sequi, quam similique.</p>

        </>

    )
}

export default Contactanos
