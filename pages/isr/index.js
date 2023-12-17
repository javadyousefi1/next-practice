import axios from "axios";

const Isr = ({ data }) => {

  return (
    <>
      <h1 className="p-2 m-4 text-center text-white bg-blue-500">ISR</h1>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="p-2 my-5 text-white bg-blue-500 rounded-md"
          >
            <p>id : {item.id}</p>
            <p>title : {item.title}</p>
            <p>cost : {item.cost}</p>
          </div>
        );
      })}
    </>
  );
};

export default Isr;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/posts");

  return {
    props: { data },
    revalidate: 10,
  };
}
