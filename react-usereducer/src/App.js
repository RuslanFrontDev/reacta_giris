//sade todo================================================
// import { useState } from "react";
// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const submitHandle = (e) => {
//     e.preventDefault();
//     setTodos([...todos], todo);
//     setTodo("");
//   };
//   return (
//     <>
//       <form onSubmit={submitHandle}>
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="yaz.."
//         />
//         <button disabled={!todo} type="submit">
//           {" "}
//           Click
//         </button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

//reducer=======================================================
// import { useReducer } from "react"

// function App(){
//   function reducer(state,action){
//     switch (action.type){
//       case 'SET_TODO':
//         return{
//           ...state,
//           todo:action.value
//         }
//         case "ADD_TODO":
//         return{
//           ...state,
//           todo:'',

//           todos:[
//             ...state.todos,
//             action.todo
//           ]
//         }

//     }

//   }
//   const [state, dispatch]=useReducer(reducer,{
//     todo:'',
//     todos:[]
//   })
//   const submitHandle=(e)=>{
//     e.preventDefault()
//     dispatch({
//       type:"ADD_TODO",
//       todo:state.todo
//     })
//   }
//   const changeInput=(e)=>{
//     dispatch({
//       type:'SET_TODO',
//       value:e.target.value
//     })

//   }
//   return(
//     <>
//     <form onSubmit={submitHandle}>
//       <input type='text' value={state.todo} onChange={changeInput} placeholder='yaz..'/>
//       <button disabled={!state.todo} type="submit">Click</button>
//     </form>
//     <ul>
//       {state.todos.map((todo,index)=>(
//         <li key={index}>
//           {todo}
//         </li>
//       ))}
//     </ul>
//     </>
//   )
// }
// export default App

//reducer=================================222222222222222222222222222222222222
import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name: 'Taylor', age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     });
//   }

//   return (
//     <>
//       <input
//         value={state.name}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}. You are {state.age}.</p>
//     </>
//   );
// }

function reducer(state, action) {
  switch (action.type) {
    case "COUNT_UP":
      return {
        name: state.name,
        age: +state.age + 1,
      };
    case "ADD_NAME":
      return {
        name: action.nextName,
        age: state.age,
      };
  }
}
const man = { name: "eli", age: "25" };

function App() {
  const [state, dispatch] = useReducer(reducer, man);
  const changeInput = (e) => {
    dispatch({
      type: "ADD_NAME",
      nextName: e.target.value,
    });
  };
  const submitHandle = () => {
    dispatch({
      type: "COUNT_UP",
    });
  };

  return (
    <>
      <input onChange={changeInput} />
      <button onClick={submitHandle}>artir</button>
      <p>
        Salam {state.name}, yasin {state.age}
      </p>
    </>
  );
}

export default App;
