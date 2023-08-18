import { useRef } from 'react';
import {
    Heading
} from '../assets/Styles/styled'
import 'controls/CustomInput2'
export default function MainPage(props: any) {
    const inputRef = useRef(null);
    const handleValueChanged = (event) => {
        const newValue = event.detail;
        debugger
        // Handle the new value of the custom input control
    }
    return <div>
        <Heading style={{ textAlign: 'center' }}>Main Page</Heading>
        this is main page
        <custom-input ref={inputRef} test={handleValueChanged}></custom-input>
    </div>
}