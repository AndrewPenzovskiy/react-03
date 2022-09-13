import './Logo.css'
import logo from '../../../assets/img/logo.svg'
const Logo = () => {

    return (
        <div className='navigation__logo'>
            <img src={logo} alt='logo' />
            <span>Notitanic</span>
        </div>
    )
}
export default Logo
