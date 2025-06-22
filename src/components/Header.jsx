import { HeaderContainer } from '../styles/HeaderStyles'

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <h1>Landing</h1>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </HeaderContainer>
  )
}

export default Header
