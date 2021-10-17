import App from '../src';
import LoginPage from '../src/Pages/LoginPage';
import Layout from '../src/layout/layout';

const loginpage = () => {
    return <App>
        <Layout title="home page">
            <LoginPage/>
        </Layout>
    </App>
}

export default loginpage;