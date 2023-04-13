import ChangeTextColor from './components/changecolor';
import ChangeButtonColor from './components/changebuttoncolor';
import './App.css';
import InputsInformation from './components/information';
import Counter from './components/counter';
import Toggle from './components/toggle';
import UpperCase from './components/uppercase';
import BorderRadius from './components/borderradius';

function App() {
  return (
    <>
   <ChangeTextColor/>
   <ChangeButtonColor/>
   <InputsInformation/>
   <Counter/>
   <Toggle/>
   <UpperCase/>
   <BorderRadius/>
    </>
  )
}

export default App;
