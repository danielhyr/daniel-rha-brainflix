import './Header.scss'
import Logo from "../../assets/Logo/Logo-brainflix.svg"
import Search from "../../assets/Icons/Icon-search.svg"
import Upload from "../../assets/Icons/Icon-upload.svg"
import { Link } from 'react-router-dom'


function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={Logo} alt="brainflix logo"></img></Link>
            <form className="header__form" onSubmit={props.defaultPrevent}>
                <div className="header__searchWrapper">
                    <input className="header__search" type="search" placeholder="Search"></input>
                    <img className="header__searchImg" src={Search} alt="brainflix seaerch icon"></img>
                </div>
                <div className="header__form-bottom">
                    <button className="header__button" type="sutmit" >
                        <img className="header__uploadImg" src={Upload} alt="brainflix seaerch icon">
                        </img><Link to="/upload">UPLOAD</Link></button>
                    <div className="header__mohan"></div>
                </div>
            </form>
        </header>
    )
}
export default Header