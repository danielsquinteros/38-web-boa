/* eslint-disable react/prop-types */
const Button = (props) => {
    const { isColorRed, children } = props;

    const addColor = () => {
        if(isColorRed === true){
            return '#f94449'
        }
        return '#cccccc'
    }

    return <button style={{backgroundColor: addColor()}} >{children}</button>
}
export default Button;