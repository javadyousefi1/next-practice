import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    axios
      .post("/api/hello") // Use relative path to the API route
      .then((response) => {
        // Check if the response contains a redirect URL
        const redirectUrl = response.data.redirectUrl;

        if (redirectUrl) {
          // Use the Next.js router to navigate to the specified URL

          setTimeout(() => {
            // router.replace(redirectUrl);
          }, 5000);
        } else {
          // Handle other response scenarios
          console.log(response);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }, [router]);

  return <>test</>;
};

export default Index;
