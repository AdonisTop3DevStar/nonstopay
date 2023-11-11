import { Accordion } from "react-bootstrap"

export const FAQAccordion = ({ data }) => {
    return (
        <Accordion defaultActiveKey="0">
            {
                data.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}