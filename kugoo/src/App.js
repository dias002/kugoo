import './styles/common.css' 
import Header from './components/Header.jsx'
import Catalog from './components/Catalog.jsx'
import RoutesPage from './components/Routes.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog/>
      <RoutesPage/>
    </div>
  );
}

export default App;
