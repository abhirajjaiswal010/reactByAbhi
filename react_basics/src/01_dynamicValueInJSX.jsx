const DynamicValue = () => {
    const name = "abhiraj";
    const name1 = "abhi"
    const users = ["Abhi", "Riya", "Aman"];
    return <h1>Hello {name + " " + name1}
        <ul>
            {users.map((u) => (
                <li key={u}>{u}</li>
            ))}
        </ul>
    </h1>;
}



export default DynamicValue;