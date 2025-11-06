import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";


const App = () => {
  return(<div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 p-6">
      <MainArea />
    </div>
  </div>)
}

export default App;