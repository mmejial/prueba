import PropTypes from 'prop-types'
function Title(props){
    
    return (
        <>
        <h1> {props.name} {props.firstNamr}</h1>
        <p>{props.number}</p>
        </>
    )


}
export default Title;
Title.propTypes ={
    name: PropTypes.string.isRequired,
    number: PropTypes.number

}
Title.defaultProps ={
    name:'no hay nombre'
}