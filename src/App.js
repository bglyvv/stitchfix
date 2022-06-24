import './App.css';
import MyRouter from './routes/MyRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <MyRouter></MyRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
