import useSWR from "swr";
import axios from "axios";
const ClientFetching = () => {
  const fetcher = async () => {
    const { data } = await axios.get("http://localhost:4000/posts");

    return data;
  };

  const { data, error, isLoading } = useSWR("getData", fetcher);

  console.log(data);

  return (
    <>
      <h1 className="text-center bg-red-40 text-white rounded-md mt-4">
        Client side data fetching :
      </h1>
      <div className="flex justify-cetner items-center flex-col">
        {isLoading && "loading"}
        {data &&
          data.map((item) => (
            <div className="block" key={item.id}>
              {item.title}
            </div>
          ))}
      </div>
    </>
  );
};

export default ClientFetching;
