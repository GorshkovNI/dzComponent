import './App.css';
import { Header } from './modules/Header/Header';
import { InfoBlock } from './modules/Header/InfoBlock/InfoBlock';
import { Button } from './shared/Button/Button';
import { Input } from './shared/Input/Input';
import { Search } from './shared/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Button size = 'buttonBig' action = 'secondaryBlack' text = 'Применить' icon = 'loupe'/>
      <Search />
      <Input />
      <Button size = 'buttonBig' action = 'secondary' text = 'Светлая тема' icon = 'sun'/> */}
    </div>
  );
}

export default App;
