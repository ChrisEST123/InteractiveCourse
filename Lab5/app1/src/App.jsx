import './App.css'
import { Education } from './components/Education';
import { Information } from './components/Information';
import { Job } from './components/Job';
import { MyButton } from './components/MyButton';

function App() {
    let content;
    let flag = true;

    if (flag) {
        content = <Job />;
    } else {
        content = <Education />;
    }
  
    return (
        <div>
            <h1>Hello! Blueberry time</h1>
            <MyButton />
            <Information home="Estonia" study="HCI" like="Sleeping"/>
            { content }
            <h3>------- new approach --------</h3>
            { flag? (<Job />): (<Education />) }
            <h3>------- additional approach --------</h3>
            { flag && <Education /> }
        </div>
    );
}

export default App
