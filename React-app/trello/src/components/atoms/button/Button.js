/* eslint-disable */
import styled from 'styled-components';

const StyledButton = styled.button(
    ({ disabled }) => `
    color: black;
    cursor: ${disabled ? 'default' : 'pointer'};
    opacity: ${disabled ? '0.5': '1'};
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    margin: 4px 10px;

    background-color: transparent;
    opacity: 0.8;
    color: white;
    border: 1px solid white;

    &:hover {
        opacity: 1;
    //     border: none;
    //     background-color: white;
    }
`);

const Button = (props) => {
    const { children, ...otherProps } = props;
    return <StyledButton {...otherProps}>{children}</StyledButton>
}

export default Button;

