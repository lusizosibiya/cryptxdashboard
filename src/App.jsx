import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Main from "./components/layout/main_content";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      <Main/>
    </div>
  );
}

export default App;
