import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Main from "./components/layout/main_content";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <Header />
        <main className="flex-1 px-4 sm:px-6 lg:px-[32px] xl:px-0">
          <div className="w-full xl:w-[1098px] mx-auto pt-[24px]">
      <Main />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;