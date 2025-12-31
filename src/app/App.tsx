import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import NavbarHome from "./components/header";
import NotFound from "./screens/NotFound";
import { navbar } from "./lib/navbar";
function App() {
  // ** INITIALIZATIONS ** //

  return (
    <>
      <div>
        <Routes>
          <Route element={<NavbarHome />}>
            {navbar.map(({ path, element }, id) => {
              return <Route key={id} path={path} element={element} />;
            })}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
