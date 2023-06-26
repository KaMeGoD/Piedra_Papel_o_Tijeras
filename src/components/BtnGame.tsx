import '../styles/btnGame.css';

interface PropsBtnGame{
  tipo : string;
  imagen: string;
}

export const BtnGame : React.FC<PropsBtnGame> = ({ tipo, imagen}) => {
  return (
    <>
      <div className={`circle ${tipo}`}>
        <div className='circle-white'>
          <img src={imagen} alt={tipo} />
        </div>
      </div>
    </>
  )
}