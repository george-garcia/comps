import Accordion from "../components/Accordion";


function AccordionPage() {

    const items = [
        {
            id: 'asdjhf',
            label: 'this is the first label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        },
        {
            id: 'asdhfk',
            label: 'this is the second label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        },
        {
            id: 'fasjfdjfsk',
            label: 'this is the third label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        }
    ]

    return (
        <Accordion items={items}/>
    );
}

export default AccordionPage;