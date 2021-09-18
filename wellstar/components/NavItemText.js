import Link from 'next/link'
import { useState } from 'react'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const NavItemText = (props) => {
    const [active, setActive] = useState(false)
    const handlePressed = () => { setActive(!active) }

    const options = []
    for (const element of props.options) {
        options.push(<a href='#' className='block px-4 py-2 text-purple-base hover:font-medium' onClick={function() { props.handleExperience(element) }}>You are a {element}</a>)
    }

    return (
        <div className='relative sm:mb-2 md:mb-4 lg:mb-0 sm:mt-0 md:mt-0 lg:mt-0 mb-5 mt-2' onClick={ handlePressed }>
            <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-purple-base bg-white-base font-medium item-center justify-center hover:text-opacity-80'>
                    {(props.text)}
                    <KeyboardArrowDown className={`${active ? 'transform rotate-180' : 'hidden'} ml-1`}/>
                </a>
            </Link>
            <div className={`${active ? '' : 'hidden'} absolute right-0 mt-2 py-2 w-48 bg-white-base rounded-lg shadow-lg border-2 border-black-base border-opacity-10`}>
                { options }
            </div>
        </div>
    )
}

export default NavItemText