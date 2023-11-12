import { Button, Nav } from "react-bootstrap"

export const MainButton = ({title}) => {
    return (
        <Nav.Link href="https://usdc.nonstopay.net/signup" target="_black" className=""><Button className="main-btn border-0 rounded-5 px-5 py-2">{title}</Button></Nav.Link>
    )
}

export const SectionTitle = ({title}) => {
    return (
        <div className="section-title text-center mb-5">{title}</div>
    )
}