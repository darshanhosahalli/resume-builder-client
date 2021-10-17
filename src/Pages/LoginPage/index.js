import React from 'react';
import { Helmet } from 'react-helmet';
import DivWithBackground from '../../components/image/background-image';
import FormCard from '../../components/FormCard';
import Message from '../../components/Warning';
import Divider from '../../components/divider';
import Form from '../../containers/LoginForm';
import Link from 'next/link'

const LoginPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Login</title>
                <meta
                    name="Login page for rèsume page"
                    content="login page for app"
                />
            </Helmet>
            <DivWithBackground src='/background-1.png' centerAlign={true}>
                <FormCard
                    formTitle='login'
                >
                    <Form title='login form'></Form>
                    <Divider />
                    <div class="extra content-space">
                        <Message>
                            <i class="icon help"></i>
                            Forgot Password? <Link href="/forgot-password">Reset here</Link>.
                        </Message>
                    </div>
                </FormCard>
            </DivWithBackground>
        </React.Fragment>
    );
}

export default LoginPage;