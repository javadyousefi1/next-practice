import axios from "axios";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/api/hello");
  }, []);

  return <>test</>;
};

export default Index;
