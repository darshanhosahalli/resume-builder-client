import App from '../src';
import HomePage from '../src/Pages/HomePage';
import Layout from '../src/layout/layout';

const Index = () => {
    return <App>
        <Layout title="home page">
            <HomePage/>
        </Layout>
    </App>
}

export default Index;