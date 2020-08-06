import React, {useState, useEffect} from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

// library.add(fas);

const App: React.FC = () => {
  const [title, setTitle] = useState('')
  const postData = {
    title: 'test title',
    body: 'hello there'
  }
  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(response => {
      setTitle(response.data.title)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
           <p>{title}</p>
      </header>
    </div>
  );
}

export default App;
