import axios from "axios";

const StaticPath = (props) => {
  return (
    <>
      <h1 className="m-4 text-xl text-center text-blue-500">
        SSG get static path
      </h1>
      <div className="flex justify-center">
        {props.data ? <li>{props.data.name}</li> : <p>Loading...</p>}
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
    params: { id: post.id.toString() },
  }));

  return {
    paths: paths.slice(0, 3),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!data) {
    return {
      props: {},
      // Set the status to 404
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
