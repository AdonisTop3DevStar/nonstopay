import { Button } from "react-bootstrap"

export const MainButton = ({title}) => {
    return (
        <Button className="main-btn border-0 rounded-5 px-3">{title}</Button>
    )
}

export const SectionTitle = ({title}) => {
    return (
        <div className="section-title text-center mb-5">{title}</div>
    )
}