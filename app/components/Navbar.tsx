
const Navbar = () => {
  return (
    <nav>
    <div className="nav__logo">
      <a href="#">
        <h1>LOGO</h1>
      </a>
    </div>
    <ul className="nav__links">
      <li className="link">
        <a href="#Início">Início</a>
      </li>
      <li className="link">
        <a href="#Programa">Programa</a>
      </li>
      <li className="link">
        <a href="#Serviços">Serviços</a>
      </li>
      <li className="link">
        <a href="#Sobre">Sobre</a>
      </li>
      <li className="link">
        <a href="#Preços">Preços</a>
      </li>
    </ul>
    <button className="btn">Junte-se Agora</button>
  </nav>
  )
}

export default Navbar