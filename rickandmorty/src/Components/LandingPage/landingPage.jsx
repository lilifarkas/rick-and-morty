import './startingPage.css'


const StartingPage = () => {

    return (
        <body>
            <div class="background-image"></div>
            <div class="main">
                <div class="content">
                <div class="item-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick And Morty Logo" class="logo">
                </img>
                </div>
                <div class="buttons">
                    <div class="item-character">
                    <button className='navigate-button'>
                        <a class="link-text" href="/characters">Characters</a>
                    </button>
                    </div>
                    <div class="item-location">
                    <button className='navigate-button'>
                        <a class="link-text" href="/locations">Locations</a>
                    </button>
                    </div>
                </div>
                <div class="item-description">
                    Click the character button to access the description of Rick and Morty characters or the location button to access the locations.
                </div>
                </div>
            </div>
        </body>
        
    )
}

export default StartingPage