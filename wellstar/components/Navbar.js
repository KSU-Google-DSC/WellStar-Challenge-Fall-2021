import { useEffect, useState } from 'react'
import PatientsNavbar from './views/PatientsNavbar'
import ProvidersNavbar from './views/ProvidersNavbar'
import CareerNavbar from './views/CareerNavbar'


const Navbar = (props) => {
    const [experience, setExperience] = useState(props.experience)
    const handleExperience = (newExperience) => { setExperience(newExperience) }

    useEffect(() => {
        handleExperience(props.experience)
    }, [props.experience])

    if (experience === "Patient") {
        return (
            <PatientsNavbar handleExperience = { handleExperience } />
        )
    } else if (experience === "Providers") {
        return (
            <ProvidersNavbar handleExperience = { handleExperience } />
        )
    } else if (experience === "Careers") {
        return (
            <CareerNavbar handleExperience = { handleExperience } />
        )
    }
}

export default Navbar