import React from 'react';

import logoFooter from '../assets/images/meiuca-logo.png';

function Footer() {
  return (
    <footer>
      <a href="https://meiuca.design/" target="_blank" rel="noreferrer">
        <img src={logoFooter} alt="Logo da Meiuca Design no footer" />
      </a>
      <p className="copyright">Copyright © 2021 Meriellen Silveira. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer;