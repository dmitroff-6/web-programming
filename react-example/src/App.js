import logo from './logo.svg';
import './App.css';
import ListElement from "./ListElement"
import { useEffect, useState } from 'react';


function App() {
  const array = [
    { id: 1, content: 'NikitaDmitrov'},
    { id: 2, content: 'NikitaEfimov'},
    { id: 3, content: 'NikolayMalchenkov'},
    { id: 4, content: 'EgorSadovnikov'},
    { id: 5, content: 'VladislavKaev'},
    { id: 6, content: 'SergeySenchenko'},
    { id: 7, content: 'DanilaMerkulov'},
    { id: 8, content: 'AnatolySergunin'},
    { id: 9, content: 'AlexandrShybaev'},
  ];

  const [title, setTitle] = useState("Title");
  const[filterArray, setFilterArray] = useState("array");
  useEffect( ()=> {
      document.title = `${title}`;
    }
  );

    function handleChange(event) {

      if(event.target.value!=""){
      
        const result = array.filter(content => {
          return !content.content.toLowerCase().search(event.target.value.toLowerCase())
        });

        setFilterArray(result);
        setTitle("Elements found:" + result.length);
      } else {
        setFilterArray(array);
        setTitle("Title");
      }
      
      }
  return (
    <div className="App">
        <header className="App-header">
        <ListElement value={filterArray}></ListElement>
        <input type="text" id="inp" placeholder="Type here" onChange={handleChange}/>
        </header>
    </div>
  );
}

export default App;
