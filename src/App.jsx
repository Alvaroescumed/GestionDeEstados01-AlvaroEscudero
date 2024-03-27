import { createContext, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content';
import './App.css'
import ToDoList, {TodoContext} from './components/TodoList';

export const LanguageContext = createContext(); // creamos el contexto


function App() {

  const [language, setLanguage] = useState('es'); //creamnos el estado del idioma predefinido

  const[list, setList] = useState([]);

  return (
    <>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Header/>
      <Content />
    </LanguageContext.Provider>

    <hr/>

      <TodoContext.Provider value={{list, setList}}>
        <ToDoList />
      </TodoContext.Provider>


    </>
  )
}

export default App
