export default function ShowReq({ data }) {
  if (!data) return null;

  if (data.error) return <p>Error</p>;

  return (
    <div style={{
      color: "lightgreen",
      background: "black",
      borderRadius: "5px",
      padding: "10px",
      marginTop: "10px"
  }}> 
      <h4>Status: {data.status}</h4>
      <h5>Time: {data.time} ms</h5>

      <pre>{JSON.stringify(data.data, null, 2)}</pre>
    </div>
  );
}