import "../style/Meme.css"
import memesData from "../memesData"
import { useState } from 'react';

export default

function Meme() {

    const [memeImg, setImg] = useState('');

    function buttonClickHadler() {
        const memesArray = memesData.data.memes
        const randomPosition = Math.floor(Math.random()*memesArray.length)
        const imgURL = memesArray[randomPosition].url
        setImg(imgURL)
        return 
    }

    

    return(
        <section className="inputSection">
            <main className="mainMeme">
                <section className="TextSection">
                <label htmlFor="topText">Top Text</label>
                <input placeholder="Text Here"  className="inputText" type="text" name="topText" id="topText" />
                </section>
                <section className="TextSection">
                <label htmlFor="bottomText">Bottom Text</label>
                <input placeholder="Text Here" className="inputText" type="text" name="bottomText" id="bottomText" />
                </section>
                </main>
                 <form action="" className="formSection"  onSubmit={e => e.preventDefault()}>
                <button  onClick={buttonClickHadler} className="fromBtn">
                Get a new meme image  🖼
                </button>
            </form>
            <img className="memeImg" src={memeImg} alt="" />
        </section>
    )
}


