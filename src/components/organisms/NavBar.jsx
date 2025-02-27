import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'column'}}>
    <NavLink to="/" end> Home</NavLink>
    <NavLink to="/trafic-light"> Semaforo</NavLink>
    <NavLink to="/users"> Users</NavLink>
  </nav>
  )
}

export default NavBar