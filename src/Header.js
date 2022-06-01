import CheckboxContainer from "./components/CheckboxContainer"
import SocialMedia from "./components/SocialMedia"

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header">
        <CheckboxContainer />
      </div>
      <h1>Leonardo José Nunes</h1>
      <h2>Full Stack Developer</h2>
      <SocialMedia />
    </header>
  )
}

export default Header
