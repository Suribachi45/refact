// Adri, aqui podemos hacer la cabecera (hay varios comentarios que ha dejado el tio por ahi sobre poner el logo y demás. Creo que eso va por aqui). El logo lo he sacado de la carpeta assets y lo he guardado en la carpeta public

// Esta es la idea que me ha dado deepseek de como crearlo:


// import React from 'react';
// import './Header.css'; // Importa los estilos CSS para el header

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="/">MiLogo</a>
//       </div>
//       <nav className="nav">
//         <ul className="nav-list">
//           <li className="nav-item"><a href="/">Inicio</a></li>
//           <li className="nav-item"><a href="/about">Acerca de</a></li>
//           <li className="nav-item"><a href="/services">Servicios</a></li>
//           <li className="nav-item"><a href="/contact">Contacto</a></li>
//         </ul>
//       </nav>
//       <div className="actions">
//         <button className="action-button">Acción</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import cocretainc from './assets/cocretainc.jpg';

const Top =()=>{
    return (
        <>
            <div className="top">
                <img src={cocretainc} alt="Logo Empresa"/>
                <h1>Cocreta feliz</h1>
            </div>      
        </>
    )
}

export default Top; 

// Esto es como creo que podria estar bien. El arichivo se llama top, por eso e dejado Top en la funcion. He pasado de eso que pone de enlaces porque en el proyecto no nos ha daod eso. 