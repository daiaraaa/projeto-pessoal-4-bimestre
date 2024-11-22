import './header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Daiara Barroso</h1>
        <nav>
          <ul>
            <li><a href="#description">Sobre</a></li>
            <li><a href="#repository">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
