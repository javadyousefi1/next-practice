import { useRouter } from "next/router";

const catchRoute = () => {
  const { query } = useRouter();

  console.log(query.id);

  return <>catch route : {query.id}</>;
};

export default catchRoute;
