import "../style/Meme.css"

export default

function Meme() {
    return(
        <section className="inputSection">
            <form action="" className="formSection">
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
                <button className="fromBtn">
                Get a new meme image  🖼
                </button>
            </form>
        </section>
    )
}