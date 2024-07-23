import PropTypes from "prop-types";
function Avatar(props){
    return(
        <>
            <img className='circle-img' src={props.img}/>
        </>
    );
}
Avatar.propTypes = {
    img: PropTypes.string,
}
export default Avatar;