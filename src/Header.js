import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <p>Emil</p>
        <nav>
          <ul>
            <li><a href="#home">About</a></li>
            <li><a href="#about">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
