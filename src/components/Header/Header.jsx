import './Header.css';

const Header = ({ titulo, subtitulo }) => {
  return (
    <header className="app-header">
      <h1>{titulo}</h1>
      <h2> { subtitulo }</h2>
    </header>

  );
}

export default Header;