import './App.css';
import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import DataProvider from './components/DataProvider'



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navbar></Navbar>
        <div className="Appin">
          <FormInput></FormInput>
          <TodoList></TodoList>
          <Footer></Footer>

          
        </div>
      </div>
    </DataProvider>


  );
}

export default App;
