import Counter from "../components/Counter";

// We can directly mark the component function as async in the server component
export default async function Page() {
  // And can fetch the data directly inside the root of the component
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // This is a server component so data will not be logged in the browser but in the terminal
  console.log(data);

  return (
    <div>
      <h1>Cabins Page</h1>
      <ul>{data.map(user=><li key={user.id}>{user.name}</li>)}</ul>
      {/* This is how we can call a client compoent inside a server component as usual but server comp cannot be called inside client comp */}
      <Counter users={data}/>
    </div>
  );
}