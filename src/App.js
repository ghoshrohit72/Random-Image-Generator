import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage]= useState('');

  const handleChange= () => {

    axios
    .get(
      'https://api.generated.photos/api/v1/faces?XXXXXXXXXXXXXXXXXXXXXXXXX'
      )
      .then(res => {
       const uri = res.data.faces[0].urls[4][512] 
       uri && setImage(uri)
       
      })
      .catch(err=>{
        console.log(err.message);
      })
  }

  return (
    <div className="App">
        <h1>THE FACES OF THE PEOPLE WHO DON'T EXIST</h1>
        { image && <img src={image} alt="AI Face"/> } <br></br>
        <button type="button" onClick={handleChange}>
          Generate Random Image
        </button>
    </div>
  );
}

export default App;
