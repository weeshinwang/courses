import { useState } from 'react';

export default function uesForm(defaults) {

    const [value, setValue] = useState(defaults)


    function updateValue(e) {

        let val  = e.target.value;
        if(e.target.type === 'number') {
            val = parseInt(e.target.value)
        }


        setValue({
            // check if its a number or string
            ...value,

            // copy the existing values into it
            // update the new value that changed
            [e.target.name]: val,

        })
    }
    return [value, updateValue]
}