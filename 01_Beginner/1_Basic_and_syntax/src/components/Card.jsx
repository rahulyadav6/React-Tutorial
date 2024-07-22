import PropTypes from 'prop-types';
function Card(props){
    return(
        <>
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.name}</h2>
                <img className='circle-img' src={props.img}/>
                </div>
                <div className='bottom'>
                <p className='info'>{props.tel}</p>
                <p className='info'>{props.email}</p>
                </div>
        </div>
        </>   
    );
}
Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
};
export default Card;



