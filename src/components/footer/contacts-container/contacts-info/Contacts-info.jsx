import './Contacts-info.css'
import Logo from "../../../header/logo/Logo";

const ContactsInfo = ()=> {
    return (
        <div className='contacts__info'>
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Email: notitanic33gmail.com</li>
                <li>Inst: notitanic33</li>
                <li>Calls: +38 (666) - 666 - 66 - 66 </li>
            </ul>
            <ul>
                <li><Logo /></li>
                <li>Copyright © 2021, Notitanic</li>
            </ul>
        </div>

    )
}
export default ContactsInfo