import React from 'react';
import { Helmet } from 'react-helmet';

import DivWithBackground from '../../components/Background';
import background from '../../images/background-2.jpeg';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>404</title>
                <meta
                    name="Not Found page"
                    content="Not Found Page For Rèsume app"
                />
            </Helmet>
            <DivWithBackground src={background} centerAlign={true}>
            </DivWithBackground>
        </React.Fragment>
    );
}

export default NotFoundPage;