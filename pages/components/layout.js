const Layout = ({ children }) => {
  return (
    <>
      <h1 className="bg-blue-400 rounded-lg text-white px-4 py-2 mb-10 m-3 text-center text-md font-bold">
        header
      </h1>
      <div className="m-3">{children}</div>
      <h1 className="bg-blue-400 rounded-lg text-white px-4 py-2 fixed bottom-0 left-0 right-0 m-3 text-center text-md font-bold">
        footer
      </h1>
    </>
  );
};

export default Layout;
