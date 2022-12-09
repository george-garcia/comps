import Accordion from "./components/Accordion";


function App() {

    const items = [
        {
            label: 'this is the first label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        },
        {
            label: 'this is the second label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        },
        {
            label: 'this is the third label',
            content: 'You can do whatever you want. You can do whatever you want. You can do whatever you want. You can do whatever you want.'
        }
    ]

    return (
        <Accordion items={items}/>
    );
}

export default App;