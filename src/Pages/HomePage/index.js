import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import DivWithBackground from '../../components/Background';

const HomePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Rèsume</title>
                <meta
                    name="online application to create resume"
                    content="app to create resume"
                />
            </Helmet>
            <section>
                <DivWithBackground src="/background-1.png" centerAlign={true}>
                    <Heading>
                        Create a Perfect Resume
                    </Heading>
                    <h2 className="ui large header">For a Perfect Job</h2>
                    <Button href='/register' huge={true}>
                        Get Started <i className="right arrow icon"></i>
                    </Button>
                </DivWithBackground>
            </section>
        </React.Fragment>
    );
}

export default HomePage;