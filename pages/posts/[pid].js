import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PostDynamicRoute = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.pid) {
      axios.get(`/api/post/${query.pid}`);
    }
  }, [query]);
  return <>post dynamic route - {query.pid}</>;
};

export default PostDynamicRoute;
