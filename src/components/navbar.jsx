import logo from "../imgs/TrollFace.png"
export default 

function Navbar() {
    return (
        <header className="header">
            <div className="Logo">
            <img src={logo} alt="LogoMemeGenerator" />
            <h1>Meme Generator</h1>
            </div>
           <div>
            <p>React Course - Project 3</p>
           </div>
        </header>
    )

}