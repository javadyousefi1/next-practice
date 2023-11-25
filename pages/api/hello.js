// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ redirectUrl: "/" });

  // if (req.method === "POST") {
  //   // res.status(200).json({ name: "John Doe", id: "tes" });
  //   res.status(200).json({ redirectUrl: "/" });
  //   // Process a POST request
  // } else {
  //   // Handle any other HTTP method
  // }
}
