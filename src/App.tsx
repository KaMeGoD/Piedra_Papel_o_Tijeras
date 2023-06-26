import 'normalize.css';
import './App.css';
import { useState, useEffect } from 'react';
import { Score } from './components/Score';
import { TriangleSelector } from './components/TriangleSelector';
import { Rules } from './components/Rules';
import { PlayGame } from './components/PlayGame';

import Rock from './assets/images/icon-rock.svg';
import Paper from './assets/images/icon-paper.svg';
import Scissors from './assets/images/icon-scissors.svg';

function App() {
  const [activadoRules, setActivadoRules] = useState(false);
  const [capas, setCapas] = useState(true);
  const [tipoPicked, setTipoPicked] = useState<string>('');
  const [imgPicked, setImgPicked] = useState<string>('');
  const [tipoRandom, setTipoRandom] = useState<string>('');
  const [imgRandom, setImgRandom] = useState<string>('');
  const [win, setWin] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const MetodologiaDeJuego = () => {
      if (tipoPicked === tipoRandom) {
        setWin('Empate');
      } else if (
        (tipoPicked === 'paper' && tipoRandom === 'scissors') ||
        (tipoPicked === 'scissors' && tipoRandom === 'rock') ||
        (tipoPicked === 'rock' && tipoRandom === 'paper')
      ) {
        setWin('Perdiste');
      } else if (
        (tipoPicked === 'paper' && tipoRandom === 'rock') ||
        (tipoPicked === 'scissors' && tipoRandom === 'paper') ||
        (tipoPicked === 'rock' && tipoRandom === 'scissors')
      ) {
        setWin('Ganaste');
        setScore((prevScore) => prevScore + 1);
      }
    };
  
    MetodologiaDeJuego();
  }, [tipoPicked, tipoRandom]);

  const Random = () => {
    const tipos: string[] = ['rock', 'paper', 'scissors'];
    const imgs: string[] = [Rock, Paper, Scissors];
    const numberRandom = Math.floor(Math.random() * tipos.length);
    setTipoRandom(tipos[numberRandom]);
    setImgRandom(imgs[numberRandom]);
  };

  const handleClickPaper = () => {
    setCapas(false);
    setTipoPicked('paper');
    setImgPicked(Paper);
    Random();
  };

  const handleClickRock = () => {
    setCapas(false);
    setTipoPicked('rock');
    setImgPicked(Rock);
    Random();
  };

  const handleClickScissor = () => {
    setCapas(false);
    setTipoPicked('scissors');
    setImgPicked(Scissors);
    Random();
  };

  //Abrir y Cerrar Ventanas
  const handleClickPlayAgain = () => {
    setCapas(true);
    setTipoRandom('');
    setImgRandom('');
  };

  const handleClickRulesOn = () => {
    setActivadoRules(true);
  };

  const handleClickRulesOff = () => {
    setActivadoRules(false);
  };

  return (
    <>
      <div className={`juego ${activadoRules ? 'activoRules' : 'capaNoOculta'}`}>
        <Score score={score} />
        <div className={capas ? 'capaNoOculta' : 'capaOculta'}>
          <TriangleSelector
            onclickPaper={handleClickPaper}
            onclickRock={handleClickRock}
            onclickScissors={handleClickScissor}
          />
        </div>
        <div className={capas ? 'capaOculta' : ''}>
          <PlayGame
            victory={win}
            onClickPlayAgain={handleClickPlayAgain}
            tipoPicked={tipoPicked}
            imagenPicked={imgPicked}
            tipoRandom={tipoRandom}
            imagenRandom={imgRandom}
          />
        </div>
        <div className='btn_rules'>
          <button onClick={handleClickRulesOn} className='rules_btn'>
            Rules
          </button>
        </div>
      </div>
      <Rules activado={activadoRules ? 'activado' : ''} onclickCloseRules={handleClickRulesOff} />
    </>
  );
}

export default App;
