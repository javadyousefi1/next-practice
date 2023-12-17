import { useRouter } from "next/router";

const CatchRoute = () => {
  const { query } = useRouter();

  console.log(query.id);

  return <>catch route : {query.id}</>;
};

export default CatchRoute;
