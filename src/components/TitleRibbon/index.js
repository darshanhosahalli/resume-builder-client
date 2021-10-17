import react from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Bar = Styled.h4`
  margin: 1rem !important;
  font-size: 2rem;
  border-bottom: 2px solid black;
`;

const TitleRibbon = ({ title }) => {
    return <Bar>{title}</Bar>
}

TitleRibbon.propTypes = {
    title: PropTypes.string.isRequired,
}


export default TitleRibbon;
