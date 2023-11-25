import axios from "axios";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    axios.get("/api/post/1");
  }, []);

  return <>post/post</>;
};

export default Main;
