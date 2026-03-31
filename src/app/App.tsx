import React from "react";
import "../css/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarHome from "./components/header";
import NotFound from "./screens/NotFound";
import { navbar } from "./lib/navbar";

import "./apiServices/verify";
import { verifyMemberData } from "./apiServices/verify";
import Chatting from "./components/features/chattingModal";
import ArticleViewer from "./components/tuiEditor/articleViewer";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App(props: any) {
  // ** INITIALIZATIONS ** //

  const query = useQuery();
  const chosen_mb_id: string | null = query.get("mb_id") ?? null;
  const chosen_art_id: string | null = query.get("art_id") ?? null;

  // * HANDLERS* //
  return (
    <>
      <div>
        <Chatting />
        <Routes>
          <Route
            element={
              <NavbarHome
                chosen_mb_id={chosen_mb_id}
                chosen_art_id={chosen_art_id}
              />
            }
          >
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
