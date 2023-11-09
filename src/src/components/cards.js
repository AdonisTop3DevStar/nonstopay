import { Card } from "react-bootstrap"

export const MainCard = () => {
    return (
        <Card className="main-card p-4">
            <Card.Body className="pt-5">
                <Card.Title className="mt-5 pt-5 mb-3">Usecase Title</Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
            </Card.Body>
        </Card>
    )
}