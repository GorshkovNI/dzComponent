import './App.css';
import { Header } from './modules/Header/Header';
import { InfoBlock } from './modules/Header/InfoBlock/InfoBlock';
import { Button } from './shared/Button/Button';
import { Dropdown } from './shared/Dropdown/Dropdown';
import { Input } from './shared/Inputs/Input/Input';
import { InputDropdown } from './shared/Inputs/InputDropdown/InputDropdown';
import { Search } from './shared/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Button size = 'buttonBig' action = 'secondaryBlack' text = 'Применить' icon = 'loupe'/>
      <Search />
      <Input />
      <Button size = 'buttonBig' action = 'secondary' text = 'Светлая тема' icon = 'sun'/> */}
      <InputDropdown size='medium'/>
    </div>
  );
}

export default App;
