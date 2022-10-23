import './App.css';
import { Header } from './modules/Header/Header';
import { InfoBlock } from './modules/Header/InfoBlock/InfoBlock';
import { Button } from './shared/Button/Button';
import { CheckBox } from './shared/Checkbox/Checkbox';
import { Dropdown } from './shared/Dropdown/Dropdown';
import { Input } from './shared/Inputs/Input/Input';
import { InputDropdown } from './shared/Inputs/InputDropdown/InputDropdown';
import { Search } from './shared/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
