import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainArea from "./components/MainArea/MainArea";
// import logo from './assets/logo.png'
function App() {
  return (
    <>
      <Header />
      <div className="appBody">
        <MainArea />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
