import {useState, useEffect} from 'react'
import './App.css'
import Todo from './Todo'

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [filter, setFilter] = useState('todo');

  function delTodo(id){
    setToDos(toDos.filter(obj2 => {
      let temp;
      if (obj2.id != id){
        temp = obj2
      }
      return temp;
    }));
  }

  function copy(text){
    let copy = false;
    toDos.map((obj) =>{
      if (obj.text == text && !obj.isDone) copy = true;
    })
    return copy;
  }

  useEffect(() => {
    if (!localStorage) return;

    if (toDos === []) {
        let savedToDos = localStorage.getItem("toDos");
        if (savedToDos && savedToDos.length !== 0) {
            setToDos(JSON.parse(savedToDos))
        }
    } else {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }

}, [toDos]);
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Plan your day</h1>
      </div>
      
      <div className="input">
        
        {
        //---------------------Add todo---------------------
       }
        <input style={{fontSize: 20}} value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="What do you want to do ?" />
        <button onClick={()=>{
            if (!copy(toDo)) setToDos([...toDos, {id: Date.now(), text: toDo, status: false, isDone: false}])
            else alert('There is already a pending task with this name')
          }}><i className="fas fa-plus"></i></button>
        {
        //--------------------------------------------------
        }

   </div>
      <div className="btn">
        <br />
        <button onClick={() => setFilter("all")} className={filter === "all" ? "selected-btn" : "un-select"} >All</button>
        <button onClick={() => setFilter("done")} className={filter === "done" ? "selected-btn" : "un-select"} >Completed</button>
        <button   onClick={() => setFilter("todo")} className={filter === "todo" ? "selected-btn" : "un-select"}>Pending</button>
        
      </div>
      <div style={{ marginTop: "30px" }}>
        {
          toDos.map((obj) => {
            if (filter === 'done' && !obj.isDone) return null;
            if (filter === 'todo' && obj.isDone) return null;
            return(
              <Todo setToDos={setToDos} toDos={toDos} obj={obj} delTodo={delTodo} toDo={toDo}/>
            );  
        })
        }

        

      </div>
    </div>
  );
}

export default App;