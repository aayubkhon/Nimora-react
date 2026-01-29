import "../css/App.css";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import NavbarHome from "./components/header";
import NotFound from "./screens/NotFound";
import { navbar } from "./lib/navbar";
import React, { useEffect, useState } from "react";
import { Member } from "./types/user";
import { serverApi } from "./lib/config";
import "./apiServices/verify";

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
        <Routes>
          <Route
            element={
              <NavbarHome
                chosen_art_id={chosen_art_id}
                chosen_mb_id={chosen_mb_id}
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
