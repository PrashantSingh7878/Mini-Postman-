import { useEffect, useState } from "react";
import axios from "axios";

export default function Save({ reload }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/all")
      .then(res => setList(res.data));
  }, [reload]);

  const delOne = async (id) => {
    await axios.delete("http://localhost:5000/del/" + id);
    setList(list.filter(i => i.id !== id));
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px", color:"Grey"  }} >Saved Requests</h3>

      {list.map((i) => (
        <div key={i.id}>
         <b> {i.name} </b> ({i.method})
          <button style={{ marginLeft: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }} onClick={() => delOne(i.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}