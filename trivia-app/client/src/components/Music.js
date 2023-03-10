import MainMenuMusic from '../sounds/MainMenuMusic.mp3';

const Music = () => {
    return (
    <div>
        <audio controls><source src={MainMenuMusic}/> Audio not found</audio>
      </div>
    )
}

export default Music;