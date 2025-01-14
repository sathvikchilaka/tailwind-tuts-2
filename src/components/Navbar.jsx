import logo from '../assets/raviKumarLogo.webp';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar