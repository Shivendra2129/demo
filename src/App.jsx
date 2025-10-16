import axios from 'axios'
import { useState } from 'react';


function App() {
  const [name,setname] = useState(" khmghj");
  // axios.get('http://localhost:3000/')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));

  // axios.post('http://localhost:3000/create',{text:"khmghj"})
  //     .then((res) =>{ 
  //       console.log(res.data);
  //     })
  //      .catch((err) =>{ console.log(err);
  //      });

  return (
    <>
      <div>
        {name}
        <div>
          <button className='border-2 bg-red-100' onClick={() => setname("hello world")}>Click Me</button>
        </div>
      </div>
    </>
  )
}

export default App
