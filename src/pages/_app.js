import '../css/main.css';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '/lib/ga'



function MyApp({ Component, pageProps }) {

    
    return <Component {...pageProps} />;
}

export default MyApp