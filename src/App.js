import data from './data.json';
import Header from './components/Header';
import Links from './components/Links';

function App() {

  return (
    <div className="App pt-3" data-bs-theme="dark">
      <Header {...data.headerData} />
      <Links links={data.links} />
    </div>
  );
}

export default App;
