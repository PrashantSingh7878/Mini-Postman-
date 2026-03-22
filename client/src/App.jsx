import { useState } from "react";
import ReqBox from "./components/Request";
import ShowRes from "./components/ShowReq";
import Saved from "./components/Save";

function App() {
  const [resp, setResp] = useState(null);
  const [reload, setReload] = useState(false);

  return (
    <div style={{
      maxWidth: "900px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      background:"white",
      // background: "#f4f6f8",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "green" }}>
        Mini Postman
      </h2>

      <ReqBox setResp={setResp} refresh={setReload} />

      <hr />

      <ShowRes data={resp} />

      <hr />

      <Saved reload={reload} />
    </div>
  );
}

export default App;