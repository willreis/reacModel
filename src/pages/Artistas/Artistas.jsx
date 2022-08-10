import { Link } from 'react-router-dom'

function Artistas() {
  return (
    <section>
      <h1>Artistas</h1>
      <p>
        Ver todos os usuários: <Link to="/allusers">Clique aqui</Link>
      </p>
    </section>
  )
}

export default Artistas