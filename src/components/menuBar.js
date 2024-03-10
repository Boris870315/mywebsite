import logo_golden from '../assets/logo/logo_golden.png'
import "./menu.css"
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <header className="header">
    <Link to="/">
        <img src={logo_golden} className="logo" alt='Boris Chen'></img>
    </Link>
    <nav>
        <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/hello">Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</header>

  );
}

export default MenuBar;
