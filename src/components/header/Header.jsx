import './Header.css'
import {navDataMain} from "../../data/navData";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";

const Header = () => {
    return (
        <div className='header__navigation'>
            <Logo />
            <Nav navData={navDataMain} />
        </div>
    )
}
export default Header