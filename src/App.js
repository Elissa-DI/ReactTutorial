import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer className='footer'/>
    </div>
  );
}

export default App;
