import React from "react";
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artistas">Artistas</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
