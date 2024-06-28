
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
// Link
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Vans from "./components/pages/Vans"
import { loader as vansLoader } from "./components/vanLoader"
import { loader as hostVansLoader } from "./components/vanLoader"
import { loader as hostVanDetailLoader } from "./components/vanLoader"
import { loader as vanDetailLoader } from "./components/vanLoader"
import VanDetail from "./components/pages/VanDetail"
import Dashboard from "./components/pages/Host/Dashboard"
import Income from "./components/pages/Host/Income"
import Reviews from "./components/pages/Host/Reviews"
import HostVans from "./components/pages/Host/HostVans"
import HostVanDetail from "./components/pages/Host/HostVanDetail"
import HostVanPricing from "./components/pages/Host/HostVanPricing"
import HostVanPhotos from "./components/pages/Host/HostVanPhotos"
import HostVanInfo from "./components/pages/Host/HostVanInfo"
import NotFound from "./components/pages/NotFound"
import Login from "./components/Login"
import { messageLoader as loginMessageLoader } from "./components/vanLoader"
import { action as loginAction } from "./components/vanLoader"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"
import { requireAuth } from "./components/utils"
import './App.css'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route
      path="login"
      element={<Login />}
      loader={loginMessageLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
    />


    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => await requireAuth()}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="about" element={<About />} />
//     <Route
//       path="login"
//       element={<Login />}
//     />
//     <Route path="vans" 
//     element={<Vans />} 
//     errorElement={<Error />}
//     loader={vansLoader} />
//     <Route path="vans/:id" element={<VanDetail />} />

//     <Route path="host" element={<HostLayout />}>
//       <Route index element={<Dashboard />} />
//       <Route path="income" element={<Income />} />
//       <Route path="reviews" element={<Reviews />} />
//       <Route path="vans" element={<HostVans />} />
//       <Route path="vans/:id" element={<HostVanDetail />}>
//         <Route index element={<HostVanInfo />} />
//         <Route path="pricing" element={<HostVanPricing />} />
//         <Route path="photos" element={<HostVanPhotos />} />
//       </Route>
//     </Route>
//     <Route path="*" element={<NotFound />} />

//   </Route>
// ))


// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="vans" element={<Vans />} />
//         <Route path="vans/:id" element={<VanDetail />} />
        
//         <Route path="host" element={<HostLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="income" element={<Income />} />
//           <Route path="reviews" element={<Reviews />} />
//           <Route path="vans" element={<HostVans />} />
//           <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//         </Route>
//         <Route path="*" element={<NotFound />}/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   )
  // return (
  //   <>
  //     <h1>App</h1>
  //     <BrowserRouter>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/vans" element={<Vans />} />
  //       <Route path="/vans/:id" element={<VanDetail />} />
  //     </Routes>
  //   </BrowserRouter>
  //   </>

  // )
// }


