import AdminLink from "./AdminLink";

function Navbar() {
  return (
    <>
      <div className="bg-[#acc8a7] w-[25rem] h-screen">
               <div className="layout-background-color text-center my-8 w-full">
            <h1 className="text-2xl text-center py-4 font-bold">Your Dashboard</h1>
          </div>
        <div className="px-6 text-center">
   
          <>
            <AdminLink />
          </>
        </div>
      </div>
    </>
  );
}

export default Navbar;
