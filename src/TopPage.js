import logo from './Photo.png';
import './TopPage.css';

function TopPage() {
  return (
    <div className="TopPage">
      <div className="LeftText">
        <h1>→Software developer←</h1>
        <p>Lorem ipsum de puerto de americano
          de puta madre tristano platano papimo
          fongo jambonus tolazones </p></div>
      <div className="RightIMG">
        <img src={logo} className="IMG" alt="img" />
        <h1>Marques Rivolini</h1>
      </div>

    </div>
  );
}

export default TopPage;
