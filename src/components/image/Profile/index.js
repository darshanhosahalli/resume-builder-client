/**
 * Profile component
 */

import Styled from 'styled-components';
import Img from '../index';

const Profile = Styled(Img)`
    width: 11rem;
    height: 11rem;
    border: 10px solid rgba(125, 140, 196, 0.7);
    z-index: 1;
    @media (min-width: 510px) {
        width: 15rem;
        height: 15rem;
    }
    @media (min-width: 769px) {
        width: 15rem;
        height: 15rem;
        border: 15px solid rgba(125, 140, 196, 0.7);
    }
`;

export default Profile;