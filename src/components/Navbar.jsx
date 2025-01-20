import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/CS34Logo.webp';
import { FaSquareXTwitter} from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={72} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sathvikchilaka/" rel='noopener noreferrer' target='_blank' aria-label='LinkedIn'> <FaLinkedin/> </a>
        <a href="https://github.com/sathvikchilaka/" rel='noopener noreferrer' target='_blank' aria-label='Github'> <FaGithub/> </a>
        <a href="https://www.instagram.com/sathvik.chilaka/" rel='noopener noreferrer' target='_blank' aria-label='Instagram'> <FaInstagram/> </a>
        <a href="https://x.com/sathvikchilaka" rel='noopener noreferrer' target='_blank' aria-label='Twitter'> <FaSquareXTwitter/> </a>
      </div>
    </nav>
  )
}

export default Navbar