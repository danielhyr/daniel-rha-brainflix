import './Header.scss'
import Logo from "../../assets/Logo/Logo-brainflix.svg"
import Mohan from "../../assets/Images/Mohan-muruge.jpg"
import Search from "../../assets/Icons/Icon-search.svg"

function Header () {
    return (
        <header className="header">
            <img className="header__logo" src = {Logo} alt ="brainflix logo"></img>
            <form className="header__form">
                <input className="header__search" type ="search"  placeholder = "Search"></input>
                <img className="header__searchImg" src = {Search} alt ="brainflix seaerch icon"></img>
                <button className="header__button"type = "sutmit">+ UPLOAD</button>
                <div className="header__mohan"></div> 
            </form>
          </header>
    )
}
export default Header