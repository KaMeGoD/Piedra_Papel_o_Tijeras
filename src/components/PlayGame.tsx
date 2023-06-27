import { BtnGame } from "./BtnGame"
import '../styles/playGame.css'

interface PropsPlayGame{
  victory :string;
  onClickPlayAgain: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tipoPicked: string;
  imagenPicked: string;
  tipoRandom: string;
  imagenRandom: string;
}

export const PlayGame: React.FC<PropsPlayGame> = ({ tipoRandom, imagenRandom, victory, onClickPlayAgain, tipoPicked, imagenPicked }) => {
  return (
    <>
      <div className="playGame">
        <div className="picked youPicked">
          <h3 className="playGame_title">You picked</h3>
          <BtnGame tipo={tipoPicked} imagen={imagenPicked} />
        </div>
        <div className="you_victory">
          <h2 className="victory">{victory}</h2>
          <button onClick={onClickPlayAgain} className="btn_playGame">Play Again</button>
        </div>
        <div className="picked randomPiked">
          <h3 className="playGame_title">The house Picked</h3>
          <BtnGame tipo={tipoRandom} imagen={imagenRandom} /></div>
      </div>
    </>
  )
}