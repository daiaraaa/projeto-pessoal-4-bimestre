import './contact.css'

export default function Contact () {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <p>Email: daiarabarroso09@gmail.com</p>
          <hr></hr>
          <p>Telefone: +55 85 99433-4741</p> 
          
      <div className="redes">
            <a 
              href="https://github.com/daiaraaa"  target="_blank"  rel="noopener noreferrer"
              className="redes-button github"> GitHub </a>
            <hr></hr>
            <br></br>
            <a 
              href="https://www.instagram.com/daiarabarroso" target="_blank" rel="noopener noreferrer"
              className="redes-button instagram"> Instagram </a>
          </div>
        </div>
      </section>
    )
  }
  
