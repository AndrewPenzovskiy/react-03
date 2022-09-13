import './Image.css'
import image from '../../../assets/img/image.png'

const Image = () => {

    return (
        <div className='content__image'>
            <img src={image} alt='logo'/>
        </div>
    )
}
export default Image