import React from 'react';
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Compartir from '../Compartir/Compartir';

const Footer = () => {
    return (
        <footer>
            <Link to="/contactanos">
            <LinkFooter icono={faEnvelope} texto="Contactanos" /> </Link>
            <Compartir>
            <LinkFooter icono={faShare} texto="Compartir" />
            </Compartir>
        </footer>
    )
}

export default Footer

