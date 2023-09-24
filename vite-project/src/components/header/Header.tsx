import './Header.css'

function Header() {
    return(
        <div id = 'header'>
            <img id="logo" src="https://dog.ceo/img/dog-api-logo.svg" alt="logo" />
            <h1 id='title'>Random Dog of the Day</h1>
            <div id="navbar">
                <a href="#home">home</a>
                <a href="#about">about us</a>
                <a href="#facts">dog facts</a>
                <a href="#breeds">breeds</a>
                <a href="#favourites">favourites</a>
                <a href="#contact">contact</a>
            </div>
        </div>
    )
}

export default Header