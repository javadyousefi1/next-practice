import axios from "axios";

const Ssr = (props) => {
  console.log(props);

  return (
    <>
      <h1 className="m-4 text-xl text-center text-blue-500">SSR</h1>
    </>
  );
};

export default Ssr;

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
