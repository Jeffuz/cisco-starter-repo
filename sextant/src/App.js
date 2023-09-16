import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  const title = "title";
  const header = "header";
  const children = "children";

  return (
    <div>
      <Banner title={title} />
      <Exhibit header={header} children={children} />
    </div>
  );
}

export default App;
