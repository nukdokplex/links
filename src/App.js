import data from './data.json';
import Header from './components/Header';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App pt-3" data-bs-theme="dark">
      <Header {...data.headerData} />
      <Links links={data.links} />
      <Footer {...data.footerData}/>
    </div>
  );
}

export default App;
