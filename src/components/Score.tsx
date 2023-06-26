import '../styles/score.css';
import Logo from '../assets/images/logo.svg'

interface PropsScore{
  score : number;
}

export const Score: React.FC<PropsScore> = ({ score }) =>{
  return(
    <>
      <div className="bloque">
          <img src={Logo} alt="logo" />
          <div className='score'>
            <h3 className='score_title'>Score</h3>
            <p className='score_point'>{score}</p>
          </div>
      </div>
    </>
  )
}