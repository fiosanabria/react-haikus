import React from 'react';
import "./Header.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header>
            <div id="contenedorBuscadorHeader">
                <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
                <FontAwesomeIcon icon={faSearch} id="IconoBuscador" />
            </div>
        </header>
    )
}

export default Header
