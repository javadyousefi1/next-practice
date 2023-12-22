import Image from "next/image";
import img from "../../public/assets/images/img.jpg";
const imageOptimizations = () => {
  return (
    <>
      <Image
        alt="abstract"
        src={img}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit:"cover"
        }}
      />
    </>
  );
};

export default imageOptimizations;
