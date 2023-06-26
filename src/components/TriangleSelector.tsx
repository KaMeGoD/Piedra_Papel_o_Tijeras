import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';

import '../styles/triangleSelector.css';
import { BtnGame } from './BtnGame';

interface PropsTriangleSelector{
  onclickPaper : (e: React.MouseEvent<HTMLDivElement>) => void;
  onclickScissors : (e: React.MouseEvent<HTMLDivElement>) => void;
  onclickRock : (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TriangleSelector: React.FC<PropsTriangleSelector> = ({onclickPaper, onclickScissors, onclickRock}) =>{
  return(
    <>
      <div className='triangle-selector '>
        <div onClick={onclickPaper} className='order1'><BtnGame imagen={Paper} tipo='paper' /></div>
        <div onClick={onclickScissors} className='order2'><BtnGame imagen={Scissors} tipo='scissors' /></div>
        <div onClick={onclickRock} className='order3'><BtnGame imagen={Rock} tipo='rock' /></div>
      </div>
    </>
  )
}