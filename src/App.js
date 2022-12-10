import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import {useState} from "react";


function App() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    }

    const options = [
        { label: 'Red', value: 'red '},
        { label: 'Green', value: 'green '},
        { label: 'Blue', value: 'blue '},
    ];


    return (
        <Dropdown options={options} onChange={handleSelection} value={selection}/>
        // <div></div>
    );
}

export default App;