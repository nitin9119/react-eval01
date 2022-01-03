import {useState} from "react";
import {useEffect} from "react"
import {Inputdiv} from "./input"
import {Carddiv} from "./card"

export const Form = () =>{
    
    const [form , setForm] = useState({
    });
    const [todo,setInput] = useState([]);

    useEffect(() =>{
        getInput();
    },[]);

    const getInput = () =>{
        fetch("http://localhost:3001/todos")
        .then((data) =>data.json())
        .then((res) =>{setInput(res)})
    }



    const handleChange = (e)=>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
        const payload = {
            title: {...form},
            status: false,
        };
        fetch("http://localhost:3001/todos",{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
            },
        })
        .then(()=>{
            getInput();
        });
        
    }
    // const addTodo = () =>{
        
    // }
    return (
        <div className="container">
            <Inputdiv>
        <h3>Recipe Inputs:-</h3> 
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Enter the title"/>

                <input
                onChange={handleChange}
                name="timetocook"
                type="text"
                placeholder="Enter the time to cook"/>

<input
                onChange={handleChange}
                name="ingredients"
                type="text"
                placeholder="Enter the ingredients"/>

                <input
                onChange={handleChange}
                name="instructions"
                type="text"
                placeholder="Enter cooking instructions"/>

<input
                onChange={handleChange}
                name="image"
                type="text"
                placeholder="Enter image link"/>
                <input type="submit" value="Submit"/>
            </form>
        </Inputdiv>
        
        {
            todo.map((e, i)=>(
                <Carddiv><ul key = {i}>
                    <img style={{
                        marginLeft:"90%",
                    width:"100px",
                    height:"100px",
                    backgroundSize:"contain"
                }}src = {e.title.image}/> 
                <li><p>Title:-{e.title.title}</p></li>
                <li> <p>timetocook:-{e.title.timetocook}</p></li>
                <li><p>ingredients:-{e.title.ingredients}</p></li>
                </ul>
                </Carddiv>               
                               
            ))
        }
        </div>
    )
}