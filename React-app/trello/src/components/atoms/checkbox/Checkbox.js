/* eslint-disable */
import styled from 'styled-components';


const Checkbox = (props) => {
    const {checked} = props; 
    return (
        <input type='checkbox' checked={checked}/>
    )
}

export default Checkbox;