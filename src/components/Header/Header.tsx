
import './Header.scss'
import { ReactComponent as Navigation } from '../../svg/navigation.svg';


interface HeaderProps {
    
    handleZoomIn: ()=> void;
    handleZoomOut: ()=> void;
    zoom: number;
}


const Header: React.FC<HeaderProps> = ({handleZoomIn,handleZoomOut,zoom}): JSX.Element =>{
    return(
        <div className='header__container'>
            <header className='header'>
                <div className='header__logo'>
                    <h2 className='header__logo-text'>Services</h2>
                    <div className='header__logo-icon'>o</div>
                </div>
                <div className='header__btns'>
                    <div className='header__btns-title'>list view</div>
                    <button className='header__btns-item'><Navigation/></button>
                    <button className='header__btns-item' onClick={()=>{handleZoomOut()}}>-</button>
                    <button className='header__btns-item'>{zoom}%</button>
                    <button className='header__btns-item' onClick={()=>{handleZoomIn()}}>+</button>
                </div>
            </header>
        </div>
    )
}
export default Header;