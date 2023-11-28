import axios from "axios";

const Ssr = (props) => {
  console.log(props);

  return (
    <>
      <h1 className="m-4 text-xl text-center text-blue-500">SSR</h1>
      {props.data.map((item, index) => (
        <>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>{item.userName}</li>
        </>
      ))}
    </>
  );
};

export default Ssr;

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      data,
    },
  };
}
