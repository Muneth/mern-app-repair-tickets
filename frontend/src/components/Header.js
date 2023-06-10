import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <a href="/">Support Desk</a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/login">
            <FaSignInAlt /> Login
          </a>
        </li>
        <li>
          <a href="/register">
            <FaUser /> Register
          </a>
        </li>
        <li>
          <a href="/logout">
            <FaSignOutAlt /> Logout
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
