import { useRouter } from "next/router";

const PostDynamicRoute = () => {
  const { query } = useRouter();
  console.log(query);
  return <>post dynamic route - {query.postId}</>;
};

export default PostDynamicRoute;
