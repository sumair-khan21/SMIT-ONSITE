import React, { useState } from 'react'

const MyProps = () => {
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        tomato: false,
        onion: false,
        fruit:"apple"
    })

    const handleChanged = (e) => {
        let value = e.target.type == "checkbox" ? e.target.name : e.target.value;
        let name = e.target.name;
        setInputs(values => ({ ...values, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs.firstname);
        console.log(inputs.lastname);
        console.log(inputs.tomato);
        console.log(inputs.onion);
        console.log(inputs.fruit);
        // console.log(inputs.banana);


    }
    return (
        <>
            <label htmlFor="">My first Name is: <input type="text" name="firstname" value={inputs.firstname} onChange={handleChanged} /></label>
            <label htmlFor="">My last is: <input type="text" name="lastname" value={inputs.lastname} onChange={handleChanged} /></label>
            <label htmlFor="">Tomato: <input type="checkbox" name="tomato" checked={inputs.tomato} onChange={handleChanged} /></label>
            <label htmlFor="">Onion: <input type="checkbox" name="onion" checked={inputs.onion} onChange={handleChanged} /></label>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="apple" // value store in state
                    checked={inputs.fruit == "apple"} // match with state the value 
                    onChange={handleChanged}
                /> Apple
            </label>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="banana"  // value store in state
                    checked={inputs.fruit == "banana"} // match with state the value 
                    onChange={handleChanged}
                /> Banana
            </label>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="orange"  // value store in state
                    checked={inputs.fruit == "orange"} // match with state the value 
                    onChange={handleChanged}
                /> Banana
            </label>
            <button onClick={handleSubmit}>Save</button>
        </>
    )
}

export default MyProps