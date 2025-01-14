import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <div className="overflow-x-hidden antialiased text-stone-300 ">
    //   <div className="inset-0 fixed -z-10">
    //     <div class="relative h-full w-full bg-black">
    //       <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
    //       {/* <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div> */}
    //     </div>
    //   </div>
    //   <div className="container mx-auto px-8">
    //     <Navbar/>
    //   </div>
    // </div>
    <div className="content-wrap overflow-x-hidden antialiased text-stone-300">
      <div className="container mx-auto px-8"> 
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
