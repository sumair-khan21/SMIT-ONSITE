// import React, { useState } from 'react'

// const Todo = () => {
//     const [items, setItems] = useState([])
//     const [text, setText] = useState("")
//     const handleAdd = () =>{
//         setItems([...items, text])
//     }
//   return (
//     <>
//     <input type="text" value={text}   />
//     <button onClick={handleAdd}>Add todo</button>
//     </>
//   )
// }

// export default Todo







import React, { useState } from 'react'

function Todo() {

    const [items, setitems] = useState(['ali', 'rizwan', 'umer', 'wajid'])
    const [editIndex, seteditIndex] = useState()
    const [editValue, seteditValue] = useState("")

    const handleDel = (i) => {
        console.log(i);
        const update = items.filter((item, index) => index !== i)
        console.log(update);
        setitems(update)
    }
/// let abc = ['ali', 'rizwan', 'umer', 'wajid']
//abc[1]="react"
//setitems(abc)



    const handleEdit = (i) => {
        console.log(i)
        seteditIndex(i)
        seteditValue(items[i])

    }

    const handleUpdate = () => {
        let newTodo = [...items]
        newTodo[editIndex] = editValue
        setitems(newTodo)
        seteditIndex()
        seteditValue("")

    }


    return (
        <div>
            {
                items.map((item, index) => (
                    <li key={index}>

                        {
                            editIndex == index ?
                                <>
                                    <input type="text"
                                    value={editValue}
                                    onChange={(e) => seteditValue(e.target.value)}
                                    />
                                    <button onClick={handleUpdate}>Update</button>
                                </> :
                                <>
                                    {item}

                                    <button onClick={() => handleDel(index)}>Del</button>
                                    <button onClick={() => handleEdit(index)}>Edit</button>

                                </>



                        }



                    </li>

                ))
            }


        </div>
    )
}

export default Todo

