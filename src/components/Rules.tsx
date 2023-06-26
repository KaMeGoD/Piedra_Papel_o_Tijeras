import Close from '../assets/images/icon-close.svg';
import Ruless from '../assets/images/image-rules.svg';
import '../styles/rules.css'

interface PropsRules{
  onclickCloseRules: (e: React.MouseEvent<HTMLDivElement>) => void;
  activado: string;
}

export const Rules : React.FC<PropsRules> = ({onclickCloseRules, activado}) => {
  return (
    <>
      <div className={`flotante_rules ${activado}`}>
        <div className="rules">
          <div className="top_rules">
            <h3 className='class_rules'>Rules</h3>
            <div onClick={onclickCloseRules} className="rules_close"><img src={Close} alt="close" /></div>
          </div>
          <img src={Ruless} alt="rules" />
        </div>
      </div>
    </>
  )
}