import {useState, useEffect, useRef} from "react";
import { GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}){
    const [isOpen, setOpen] = useState(false);
    const divElement = useRef();

    useEffect(() => {

        const handler = (event) => {
            if(!divElement.current)
                return

            if(!divElement.current.contains(event.target)){
                setOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener("click", handler);
        }
    }, [])

    const changeSelected = (option) => {
        onChange(option);
        setOpen(!isOpen);
    }

    const renderedOptions = options.map(option => {

        if(value?.label === option.label)
            return
        else
            return (
                <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {changeSelected(option)}}
                     key={option.value}>
                    {option.label}
                </div>
            );
    })

    return (
        <div ref={divElement} className="w-48 relative">
            Select an option...
            <Panel className="flex justify-between items-center cursor-pointer"
                 onClick={() => setOpen(!isOpen)}>
                {value?.label || 'Options...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>}
        </div>
    );
}

export default Dropdown;