import { Card } from "react-bootstrap"

export const MainCard = ({ title, image, description }) => {
    return (
        <Card className="main-card p-4 text-center position-relative">
            <Card.Body className="">
                <Card.Img src={image} alt="main-card-image" className="main-card-image"/>
                <Card.Title className="mb-3 text-start mt-5">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export const NewsCard = ({ title, image, description, date, day }) => {
    return (
        <Card className="news-card px-3">
            <Card.Body>
                <Card.Title className="fw-bold">{day}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle><hr />
                <Card.Title>{title}</Card.Title>
                <Card.Text className="mb-3">{description}</Card.Text>
                <Card.Img src={image} width="300" height="150"/>
            </Card.Body>
        </Card>
    )
}