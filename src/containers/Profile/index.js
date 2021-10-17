import React, { useContext, useDebugValue, useEffect } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import Grid from '../../components/Flex';
import Column from '../../components/Column';
import ProfileImage from '../../components/image/Profile';
import EditContext from '../../utils/EditContext';
import { EditProfile, FetchProfileImage } from './actions';

const ContactWithProfile = Styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Contact = Styled.div`
    margin: 1rem;   
    & > * {
        display: block;
    }
`;

const Bio = Styled.div`
    background-color: rgba(125,140,196,0.7);
    padding-top: 1rem%;
    padding-left: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    border-radius: 10px;
    @media (min-width: 769px) {
        clip-path: polygon(0% 50%, 25% 0%, 100% 0%, 100% 100%, 25% 100%);
        margin-top: 0;
        margin-left: -25%;
        padding-left: 35%;
        padding-top: 1rem;
    }
    & > * {
        display: block;
    }
}
`;

const Profile = (props) => {
    const editContext = useContext(EditContext);
    let profile = props.profile.profile; 

    const updateProfile = (object, key, value) => {
        props.EditProfile(object, key, value);
    };

    useEffect(() => {
        props.FetchProfileImage();
    }, [])

    const renderContact = () => {
        if(editContext) {
            return <Contact>
                    <h2 className="ui header">Contact</h2>
                    <div className="ui divider" style={{ borderTop: '3px solid rgb(0,0,0)' }}></div>
                    <div className="ui input">
                        <input type="text" placeholder={profile['address'].contact} value={profile['address'].contact} onChange={(value) => { updateProfile('address' , 'contact', value.target.value) }}/>
                    </div>
                    <div className="ui input">
                        <input type="text" placeholder={profile['address'].street} value={profile['address'].street} onChange={(value) => { updateProfile('address' , 'street', value.target.value) }}/>
                    </div>
                    <div className="ui input">
                        <input type="text" placeholder={profile['address'].locality} value={profile['address'].locality} onChange={(value) => { updateProfile('address' , 'locality', value.target.value) }}/>
                    </div>
                    <div className="ui input">
                        <input type="text" placeholder={profile['address'].city_state} value={profile['address'].city_state} onChange={(value) => { updateProfile('address' , 'city_state', value.target.value) }}/>
                    </div>
                    <div className="ui input">
                        <input type="text" placeholder={profile['address'].country} value={profile['address'].country} onChange={(value) => { updateProfile('address' , 'country', value.target.value) }}/>
                    </div>
                </Contact>
        }
        return <Contact>
            <h2 className="ui header">Contact</h2>
            <div className="ui divider" style={{ borderTop: '3px solid rgb(0,0,0)' }}></div>
            <p>{profile['address'].contact}</p>
            <p>{profile['address'].street}</p>
            <p>{profile['address'].locality}</p>
            <p>{profile['address'].city_state}</p>
            <p>{profile['address'].country}</p>
        </Contact>
    }

    const renderBio = () => {
        if(editContext) {
            return <Bio>
                        <div className="ui input">
                            <input type="text" placeholder={profile['bio'].name} value={profile['bio'].name} onChange={(value) => { updateProfile('bio' , 'name', value.target.value) }}/>
                        </div>
                        <div className="ui input">
                            <input type="text" placeholder={profile['bio'].position} value={profile['bio'].position} onChange={(value) => { updateProfile('bio' , 'position', value.target.value) }}/>
                        </div>
                        <div className="ui divider" style={{ borderTop: '3px solid rgb(0,0,0)' }}></div>
                        <h2>About</h2>
                        <div className="ui form">
                            <div className="field">
                                <textarea type="text" placeholder={profile['bio'].about} value={profile['bio'].about} onChange={(value) => { updateProfile('bio' , 'about', value.target.value) }}/>
                            </div>
                        </div>
                    </Bio>
        }
        return <Bio>
                    <h1 style={{ margin: '0px' }}>{profile['bio'].name}</h1>
                    <h2 style={{ margin: '0px', fontStyle: 'normal', fontSize: '1.2rem' }}>{profile['bio'].position}</h2>
                    <div className="ui divider" style={{ borderTop: '3px solid rgb(0,0,0)' }}></div>
                    <h2>About</h2>
                    <p>
                        {profile['bio'].about}
                    </p>
                </Bio>
    }


    return <Grid>
            <Column flexDirection={'row'}>
                <ContactWithProfile>
                    {renderContact()}
                    <ProfileImage
                    alt="profile"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    ></ProfileImage>
                </ContactWithProfile>
            </Column>  
            <Column>
                {renderBio()}
            </Column>
        </Grid>;
}

const mapStateToProps = state => {
    return { profile: state.profile } ;
}

export default connect(mapStateToProps,{ EditProfile, FetchProfileImage })(Profile);