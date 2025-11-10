import data from "./assets/dataLoopMap.json" ;

const JsonMap = () => {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>📄 JSON Data Rendering with .map()</h2>

      {/* Check if data exists */}
      {data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.role} (Age: {user.age})
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found ❌</p>
      )}
    </div>
  );
};

export default JsonMap;