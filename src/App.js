import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Header,  Input} from './Components';
function App() {
  return (
    <div className="App" >
     <div className='header'>
       <Header/>
    </div>
     <div className='input'>
       <Input/>
     </div>
    </div>
  );
}

export default App;
