import PropTypes from 'prop-types'
function Title(props){
    
    return (
        <>
        <h1> {props.name} {props.firstNamr}</h1>
        <h2>{props.number}</h2>
        </>
    )


}
export default Title;
Title.propTypes ={
    name: PropTypes.string.isRequired,
    numer: PropTypes.number

}
Title.defaultProps ={
    name:'no hay nombre'
}