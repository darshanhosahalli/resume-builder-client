import Styled from 'styled-components';
import PropTypes from 'prop-types';

const DivWithBackground = Styled.div`
    background: linear-gradient(160deg, rgba(0,182,188, 0.8), rgba(255,255,255, 0.6)),url(${props => props.src});
    background-size: cover;
    background-position: center;
    height: ${props => props.height? 'auto': 'calc(100vh - 110px)'};
    width: auto;
    display: flex;
    justify-content: ${props => !props.centerAlign? '': 'center'};
    flex-direction: column;
    padding: 2rem;
    align-items: ${props => !props.centerAlign? '': 'center'};
`;

DivWithBackground.propTypes = {
    src: PropTypes.string.isRequired,
}


export default DivWithBackground;