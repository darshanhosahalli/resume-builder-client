import React from 'react';
import Head from 'next/head'
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';

const Layout = ({ title, children }) => {
    return  <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="Rèsume online"
                content="a web application that allows users to publish their resume online"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            />
        </Head>
        <HeaderContainer/>
        {children}
        <Footer/>
    </div>
}

export default Layout;