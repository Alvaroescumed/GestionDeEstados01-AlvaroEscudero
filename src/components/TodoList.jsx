import { createContext, useContext, useState } from "react";


export const TodoContext = createContext(); // creamos el contexto 

export default function ToDoList(){

    const{ list , setList } = useContext(TodoContext);
    const[description, setDescription] = useState("");
    const[taskEdit, setTaskEdit] = useState(null);
    const[editDescription, setEditDescription] = useState("");

    function handleInputChange(e){
        setDescription(e.target.value);
    }

    function addTask(e){

        e.preventDefault();

        const newTask = {
            id: Date.now(), //utilizamos fecha como id para que sea unica y evitar que se repita
            description: description
        }

        setList([...list, newTask]);

        setDescription("");
    }

    function editTask(id){
        //Editamos la tarea
        const updatedList = list.map((task) => {
            if(task.id === id){
                task.description = editDescription;
            } 
            return task;
        })
        setList(updatedList);
        setTaskEdit(null);
        setEditDescription("");
    }

    function deleteTask(id){
        //borramos la tarea

        setList(list.filter(task => task.id !== id));

    }

    return(
        <>  
        <div className="container">
            <h2>TodoList with useContext</h2>

            <div className="task-big-container">
                <input type="text" placeholder="Añade una tarea" value={description} onChange={handleInputChange}/> 
                <button onClick={addTask}>Añadir</button>
            </div>
            
            {list && list.map(task => (
                <div key={task.id} className="task-container"> 
                    {taskEdit === task.id ? (
                        <>
                        <input type="text" onChange={(e) => setEditDescription(e.target.value)} value={editDescription}/>
                        <button onClick={() => editTask(task.id)}>✅</button>
                        </>
                    ):(
                    <>
                    <div>{task.description}</div>
                    <div>
                    <button onClick={() => {setEditDescription(task.description); setTaskEdit(task.id)}}>✏️</button>{/*  De esta forma mantenemos la descricion actual para la posterior edicion */}
                    <button onClick={ () => deleteTask(task.id)}>❌</button>
                    </div>
                    </>
                    )}
                </div>       
            ))}
        </div>  
        </>
    );
} 