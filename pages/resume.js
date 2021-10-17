import App from '../src';
import ResumePage from '../src/Pages/ResumePage';
import Layout from '../src/layout/layout';

const resume = () => {
    return <App>
        <Layout title="home page">
            <ResumePage/>
        </Layout>
    </App>
}

export default resume;