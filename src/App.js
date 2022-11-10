// // import React from "react";
// //  import {Browser as Router,Route,} from "react-router-dom";

// // // import { Route , Routes} from "react-router-dom";
// // import Welcome from './components/pages/Welcome';
// // import Products from './components/pages/Products';

// // const App = () =>  {
// //   return (
// //     <>


// //     {/* <BrowserRouter> */}
// //     <Router>
// //       <Route>
// //       <Welcome/>
// //       </Route>
// //     <Route>
// //       <Products/>
// //       </Route>
// //       </Router>


// //       {/* </BrowserRouter> */}

// //     </>
// //   );
// // }

// // export default App;

// //--------------------routing Task

// // import React from "react";
// // import { Redirect, Route, Switch } from 'react-router-dom';

// // import Welcome from './components/pages/Welcome';
// // import Products from './components/pages/Products';
// // // import MainHeader from './components/MainHeader';
// // import Home from './components/pages/Home';
// // import ProductDetails from "./components/pages/ProductDetails";
// // import Layout from "./components/Layout/Layout";
// // import NotFound from "./components/pages/NotFound";


// // const App = () => {
// //   return (

// //       <Layout>
// //       <Switch>
// //         <Route exact path='/Home'>
// //           <Home />
// //           {/* <Redirect to ='/Products' /> */}
// //         </Route>
// //         <Route exact path='/welcome'><Welcome /></Route>
// //         <Route exact path='/Products'><Products /></Route>
// //         <Route exact path='/product-details/:ProductId/'><ProductDetails /></Route>
// //         <Route path="/"><NotFound /></Route>
// //       </Switch>
// //     </Layout>
// //   );
// // }
// // export default App;

// //---------end of Routing Task----------

// //------new task-------------

// import React from "react";
// import { Redirect, Route, Switch } from 'react-router-dom';

// import NavBar1 from "./components/BasicForm/NavBar/NavBar1";
// import Home from './components/BasicForm/Home/Home';
// import Product from "./components/BasicForm/Products/Product";
// import More from './components/BasicForm/More/More';
// import Regist from "./components/BasicForm/Registration/Registration";
// import Contact from "./components/BasicForm/Contact/Contact";
// //import Layout1 from './components/BasicForm/Layout1/Layout1';
// import NewRegistrationForm from './components/NewRegister/NewRegistrationForm';
// import LoginForm from "./components/LoginForm/LoginForm";
// import Api from "./components/Api/Api";
// const App = () => {
//   return (
//     <>
// <NavBar1/>
//       <Switch>
//         <Route exact path='/'><Home /></Route>
//         <Route exact path='/Home'><Home /></Route>
//         <Route exact path='/Product'><Product /></Route>
//         <Route exact path='/More'><More /></Route>
//         <Route exact path='/Registration'><Regist /></Route>
//         <Route exact path='/Contact'><Contact /></Route>
//         <Route exact path='/NewRegistrationForm'><NewRegistrationForm /></Route>
//         <Route exact path='/LoginForm'><LoginForm /></Route>
//         <Route exact path='/Api'><Api /></Route>
//         {/* <Api/> */}

        
//          {/* <Route path="/LoginForm" element={<LoginForm/>}/>  */}
        
//       </Switch>
     
//     </>
//   );
// }
// export default App;
//------------------------------------------------------------------
//-----------------New project---------------------


//first
// import React from "react";
// import { Redirect, Route, Switch } from 'react-router-dom';

// // import LoginForm from "./components1/LoginForm/LoginForm";
// import NewLoginForm from "./components1/NewLogin/NewLoginForm";
// import DataFetching from "./components1/NewLogin/DataFetching";
// const App = () => {
//   return (
//     <>
//       <Switch>
//         {/* <Route exact path='/LoginForm'><LoginForm /></Route> */}
//         {/* <LoginForm /> */}
//         <NewLoginForm/>
//         {/* <DataFetching/> */}


//       </Switch>
     
//     </>
//   );
// }
// export default App;


import React from 'react'
import Output from './components2/Output'
import SignUp from './components2/SignUp'
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
      <Routes>
        <Route  path="/"  element={<SignUp/>}/>
        <Route  path="/output"  element={<Output />}/>
      </Routes>
 )
}
