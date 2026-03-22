import { useState } from "react";
import { sendReq } from "../api/api";
import axios from "axios";

export default function Request({ setResp, refresh }) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [headers, setHeaders] = useState([
  { key: "", value: "" }
]);

  const sendNow = async () => {
  let headerObj = {};

  headers.forEach(h => {
    if (h.key) headerObj[h.key] = h.value;
  });

  let res = await fetch(url, {
    method: method,
    headers: headerObj,
    body: method === "POST" ? JSON.stringify(JSON.parse(body)) : null
  });

  let data = await res.json();

  setResp({
    status: res.status,
    time: 0,
    data: data
  });
};
  const saveIt = async () => {
    console.log("Saving method:", method);
    await axios.post("http://localhost:5000/save", {
      name,
      url,
      method,
      headers: headers.filter(h => h.key),
      body,
    });

    refresh((p) => !p);
  };

  return (
    <div>
      <input style={{ width: "100%", padding: "8px", marginBottom: "10px" }} placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <br />

      <input style={{ width: "100%", padding: "8px", marginBottom: "10px" }} placeholder="Enter URL" onChange={(e) => setUrl(e.target.value)} />

      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>GET</option>
        <option>POST</option>
      </select>

      {method === "POST" && (
  <textarea
    placeholder="JSON body"
    onChange={(e) => setBody(e.target.value)}
  />
)}

<h4 style={{ marginBottom: "10px", color:"blue"  }}> Headers</h4>

{headers.map((h, i) => (
  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
    
    <input style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      placeholder="Key"
      value={h.key}
      onChange={(e) => {
        let newH = [...headers];
        newH[i].key = e.target.value;
        setHeaders(newH);
      }}
    />

    <input style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      placeholder="Value"
      value={h.value}
      onChange={(e) => {
        let newH = [...headers];
        newH[i].value = e.target.value;
        setHeaders(newH);
      }}
    />
  </div>
))}

<button style={{padding: "8px 15px",marginRight: "10px",background: "blue",
  color: "white",border: "none",borderRadius: "5px"}} onClick={() => setHeaders([...headers, { key: "", value: "" }])}>
  + Add Header
</button>
<br />
<br />

<button style={{padding: "8px 15px",marginRight: "10px",background: "blue",border: "none",
               borderRadius: "5px",color: "white",}} onClick={sendNow}>Send</button>
<button style={{padding: "8px 15px",background: "green",color: "white",border: "none",
               borderRadius: "5px"}} onClick={saveIt}>Save</button>
    </div>
  );
}