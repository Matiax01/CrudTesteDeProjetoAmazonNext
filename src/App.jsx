import { useEffect, useState } from 'react';
import './App.css';
import supabase from './supabase-client';

function App() {

  const [todoList, setTodoList] = useState([]) // Read 
  const [newTodo, setNewTodo] = useState('') // Create 

  useEffect(() => {
    fetchTodos(); // Read
  }, []);

  // Read 
  const fetchTodos = async () => {
    const { data, error } = await supabase.from("ToDoLista").select("*");
    if (error) {
      console.log("Erro ao buscar todos: ", error);
    } else {
      setTodoList(data);
    }
  }

  // Create 
  const addTodo = async () => {
    const newTodoData = { 
      name: newTodo,
      isCompleted: false
    }
    const { error } = await supabase
      .from("ToDoLista")
      .insert([newTodoData]);

    if (error) {
      console.log("Erro ao adicionar todo: ", error);
    } else {
      setNewTodo('');
      fetchTodos(); 
    }
  }

  // Update
  const completeTask = async (id, isCompleted) => {
    const { error } = await supabase
      .from("ToDoLista")
      .update({ isCompleted: !isCompleted })
      .eq("id", id);

    if (error) {
      console.log("Erro ao atualizar todo: ", error);
    } else {
      fetchTodos(); // Atualiza lista após editar
    }
  }

  // Delete
  const deleteTask = async (id) => {
    const { error } = await supabase
      .from("ToDoLista")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("Erro ao deletar todo: ", error);
    } else {
      fetchTodos(); 
    }
  }

  return (
    <div>
      {""}
      <h1>Lista para fazer</h1>
      <div>
        {/* Create */}
        <input 
          type="text" 
          placeholder='Novo Todo' 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>
      <ul>
        {todoList
          .filter(todo => todo && todo.id) 
          .map((todo) => (
            <li key={todo.id}>
              <p>{todo.name}</p>
              {/* Update */}
              <button onClick={() => completeTask(todo.id, todo.isCompleted)}>
                {todo.isCompleted ? "Desmarcar" : "Marcar como concluído"}
              </button>
              {/* Delete */}
              <button onClick={() => deleteTask(todo.id)}>Deletar Task</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
