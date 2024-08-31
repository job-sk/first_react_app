import './App.css';
import {ClassComp, ClassComp1} from './components/ClassComp';
import Click from './components/Click';
import FunctionalComp from './components/FunctionalComp';

function App() {
  return (
    <div>
      <h2>Welcome to react</h2>
      <h3>Job Shibu </h3>
      <FunctionalComp/>
      <ClassComp/>
      <ClassComp1/>
      <Click/>
    </div>
  );
}

export default App;
