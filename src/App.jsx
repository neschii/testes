import "./App.css";
import ModalForm from "./components/ModalForm/ModalForm";
import Header from "./components/HomePage/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ModalForm />
    </div>
  );
}

export default App;
