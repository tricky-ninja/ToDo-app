import React from 'react'

function Todo({
    setToDos,
    toDos,
    obj,
    delTodo,
    toDo
}) {
    return (
        <div className="todo">
            <div style={{ display: "flex", alignItems: "center" }}>
            
              <input onChange={(e)=>{
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id == obj.id){
                    obj2.status = e.target.checked
                    obj2.isDone = !obj2.isDone
                    
                  }
                  return obj2
                }));
              }} value={obj.status}type="checkbox" name="" checked={obj.isDone} className="checkbox" />
              <p className={obj.isDone ? "completed-task" : ""}>{obj.text}</p>
            
            </div>
            <button onClick={() => delTodo(obj.id)}><i className="far fa-trash-alt"></i></button>
            </div>
            
    )
}

export default Todo
 