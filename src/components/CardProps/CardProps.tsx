import './CardProps.css';
import itemDefault from './img/default.png';

interface CustomProps {
  name?: string;
  price?: number;
  imgName?: string;
}

const CardProps = (props : CustomProps) => {

  // let photo: any = require('./img/2658891.jpg').default;
  // name='TV Samsung QE50Q80D' price={31649} imgName='2658891.jpg';

  return(
  <div className='card-props'>
    <div className='card-props__title'>
      <p className='card-props__title-name'>{props.name}</p>
      <p>
        <span>{props.price}</span>&nbsp;<span>UAH</span>
      </p>
    </div>
    <img src={require(`./img/${props.imgName}`)} alt='picture'></img>
  </div>
  );

}

CardProps.defaultProps = {
  name: 'unknown',
  price: 0,
  imgName: 'default.png'
};

export default CardProps;