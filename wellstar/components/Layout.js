import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Wellstar Health System | More than healthcare. PEOPLECARE</title>
            </Head>
            <div className='content'>
                <Navbar experience='Patient'/>
                { children }
            </div>
        </div>
    )
}

export default Layout