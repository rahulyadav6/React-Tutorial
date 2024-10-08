import ProtoTypes  from 'prop-types'
function Note(props){
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </>
    );
}
Note.propTypes = {
    title: ProtoTypes.string,
    content: ProtoTypes.string,
}
export default Note;