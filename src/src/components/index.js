import { Button, Nav } from "react-bootstrap"

export const MainButton = ({title}) => {
    return (
        <Nav.Link href="https://usdc.nonstopay.net/signup" target="_black" className="main-btn border-0 rounded-5 px-5 w-25 py-2 mx-auto">{title}</Nav.Link>
    )
}

export const SectionTitle = ({title}) => {
    return (
        <div className="section-title text-center mb-5">{title}</div>
    )
}