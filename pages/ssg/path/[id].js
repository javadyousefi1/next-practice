import axios from "axios";

const StaticPath = (props) => {
  return (
    <>
      <h1 className="m-4 text-xl text-center text-blue-500">
        SSG get static path
      </h1>
      <div className="flex justify-center">
        {props.data && <li>{props.data.name}</li>}
      </div>
    </>
  );
};
export default StaticPath;

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const paths = data.map((post) => ({
    params: { id: post.id + "" },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  return { props: { data } };
}
