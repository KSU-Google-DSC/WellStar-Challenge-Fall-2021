import Link from 'next/link'
import { useState } from 'react'

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const NavItem = (props) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const handlePressed = () => { setActive(!active) }
    
    const items = []
    for (const element of props.items) {
        items.push(<a href='#' className='block px-4 py-2 text-purple-base hover:font-medium'>{(element)}</a>)
    }

    return (
        <div className='relative sm:mb-2 md:mb-4 lg:mb-0 sm:mt-0 md:mt-0 lg:mt-0 mb-5 mt-2' onClick={ handlePressed }>
            <Link href='/' tabIndex='-1' className=''>
                <a className='lg:ml-2 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded bg-white-base text-purple-base font-bold item-center justify-center hover:bg-purple-base hover:text-white-base'
                    onMouseEnter = {event => { setHover(true) }}
                    onMouseLeave = {event => { setHover(false) }}
                >
                    {(props.text)}

                    {(() => {
                        if (hovered) {
                            return (
                                <KeyboardArrowDown className={`${active ? 'transform rotate-180' : 'hidden'} ml-1`} />
                            )
                        }
                    })()}
                </a>
            </Link>
            {/* <button tabIndex='-1' className={`${active ? '' : 'hidden'} fixed z-10 inset-0 h-full w-full bg-black-base opacity-0 cursor-default`}></button> */}
            <div className={`${active ? '' : 'hidden'} absolute z-20 right-0 mt-2 py-2 w-25 lg:w-48 md:w-48 bg-white-base rounded-lg shadow-lg border-2 border-purple-base border-opacity-20`}>
                { items }
            </div>
        </div> 
    )
}

// w-48
export default NavItem