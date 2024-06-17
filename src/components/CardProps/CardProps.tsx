import './CardProps.css';
import itemDefault from './img/default.png';

interface CustomProps {
  name: string;
  price: number;
  imgName: string;
}

const CardProps = ({name, price, imgName}: CustomProps) => (

  // let photo: any = require('./img/2658891.jpg').default;

  <div className='card-props'>
    <div className='card-props__title'>
      <p className='card-props__title-name'>{name}</p>
      <p>
        <span>{price}</span>&nbsp;<span>UAH</span>
      </p>
    </div>
    <img src={require(`./img/${imgName}`)} alt='picture'></img>
  </div>
);

export default CardProps;
