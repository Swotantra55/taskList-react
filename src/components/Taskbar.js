import PropTypes from 'prop-types'
const Taskbar = (props) => {
    return (
        <>
        <h1 style={NameStyling}>
            {props.name}
        </h1>
        <h2 style={MottoStyling}>
        {props.motto} 
    </h2>
        </>
    )
}

const NameStyling ={
    color: 'silver',
    textAlign: 'center'
}
const MottoStyling ={
    color: 'silver',
    textAlign: 'end'
}
Taskbar.defaultProps ={
    name :"gionee"
}
Taskbar.propTypes = {
    motto: PropTypes.string,
}
export default Taskbar
