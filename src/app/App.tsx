import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import NavbarHome from "./components/header";
import NotFound from "./screens/NotFound";
import { navbar } from "./lib/navbar";
import { useEffect, useState } from "react";
import { Member } from "./types/user";
import { serverApi } from "./lib/config";
import "./apiServices/verify";


function App() {
  // ** INITIALIZATIONS ** //
  const [virifiedMemberData, setVirifiedMemberData] = useState<Member | null>(
    null
  );

  useEffect(() => {
    console.log("=== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/default_user.svg";
      setVirifiedMemberData(member_data);
    }
  }, []);

  // * HANDLERS* //
  return (
    <>
      <div>
        <Routes>
          <Route
            element={<NavbarHome virifiedMemberData={virifiedMemberData} />}
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
