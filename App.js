import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=>Object=>HTML(DOM)
// const heading = ce(
//   "h1",
//   {
//     id:"title",
//     key:"h2",
//   },
//   "Namaste React"
// );

//JSX=>React.createElement=>Object=>HTML(DOM)
//babel converts jsx to html
// const Heading2 = () => (
//   <h1 id="title" key="h2">
//     Namaste React
//   </h1>
// );

// const HeaderComponent = () => {
//   return (
//     <div>
//       <Heading2 />
//       <h1>functional component react</h1>
//       <h2>h2 component</h2>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);//render functional component
//root.render(heading2);//render react component

const title = (
  <h1 id = "title" key="h1">
    Food villa
  </h1>
);
const Title = ()=>(
  <h1 id = "title" key="h1">
    Food villa
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {console.log("we can write any piece of js here")}
      {/* {title} */}
      <Title/>
      <h1>functional component react</h1>
      <h2>h2 tag</h2>
    </div>
  );
}

const AppLayout = ()=>{
  return ({
    /*
    Header
      -Logo
      -nav items(Right Slide)
      -cart
    Body
      -search bar
      -restaurant list
        -restaurant card
          -image  
          -Name
          -Rating
          -Cusines
    Footer
      -Links
      -copyrights
    */
  }
  )
}
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);