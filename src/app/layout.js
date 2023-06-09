import Navbar from '@/components/Navbar'
import './globals.css'
import {Inter} from 'next/font/google'
import Head from 'next/head'
import Footer from '@/components/footer'
import Script from 'next/script';

export const metadata = {
    title: 'Profile',
    description: 'This is the profile of me, made by myself with next js,  the framework of react.js.', 
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300;400&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
            </Head>
            <body>
                <Navbar/>
                    {children} 
                <Footer/>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
            </body>

        </html>
    )
}
