import axios from "axios";

const StaticProps = (props) => {
  return (
    <>
      <h1 className="m-4 text-xl text-center text-blue-500">
        SSG get static props
      </h1>
      {props.data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </>
  );
};

export default StaticProps;

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      data,
    },
  };
}
