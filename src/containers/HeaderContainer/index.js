import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Logo from '../../components/image/logo';

const HeaderContainer = () => {
    return (
        <Header>
            <Logo
                alt="logo"
                src="/resume-logo.png"
            ></Logo>
            <div className="right item">
                <div className="ui input">
                    <Button href='/login'>Login</Button>
                    <Button
                        href='/register'
                        inverted={true}    
                    >Register</Button>
                </div>
            </div>
        </Header>
    );
}

export default HeaderContainer;