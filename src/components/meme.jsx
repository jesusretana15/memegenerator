import "../style/Meme.css"
import memesData from "../memesData"
import { useState } from 'react';

export default

function Meme() {

    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: ""
    })


    const [meme,updateMeme] = useState({ 
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" }) 

    const [allMemeImages,updateAllMeme] = useState(memesData) 

    function handleChange(event){
        const {name, value} = event.target

        setMemeText(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    function buttonClickHadler() {
        const memesArray = allMemeImages.data.memes
        const randomPosition = Math.floor(Math.random()*memesArray.length)
        const imgURL = memesArray[randomPosition].url
        updateMeme((prev) => {
            return {
                ...prev,
                randomImage: imgURL
            }
        })
        return 
    }

    

    return(
        <section className="inputSection">
            <main className="mainMeme">
                <section className="TextSection">
                <label htmlFor="topText">Top Text</label>
                <input placeholder="Text Here"  className="inputText" type="text" name="topText" id="topText" onChange={handleChange}/>
                </section>
                <section className="TextSection">
                <label htmlFor="bottomText">Bottom Text</label>
                <input placeholder="Text Here" className="inputText" type="text" name="bottomText" id="bottomText" onChange={handleChange} />
                </section>
                </main>
                 <form action="" className="formSection"  onSubmit={e => e.preventDefault()}>
                <button  onClick={buttonClickHadler} className="fromBtn">
                Get a new meme image  🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeText.topText}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText}</h2>
            </div>
            
        </section>
    )
}


