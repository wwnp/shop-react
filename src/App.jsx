import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Single } from './containers/Single';
import { Shop } from "./containers/Shop";
import { AccId } from "./containers/AccId";
import { Notfound } from "./containers/Notfound";
import { ContexProvider } from "./contex";
export function App() {
  return (
    <ContexProvider>
      <Layout>
        <Shop></Shop>
      </Layout>
    </ContexProvider>
    // <Routes>
    //   <Route path='/shop-react' element={<Layout />}>
    //     <Route index element={<Shop />}></Route>
    //     <Route path='shop-react/shop/:slag' element={<Single />}></Route>
    //     <Route path='shop-react/accid' element={<AccId />}></Route>
    //     <Route path='shop-react/*' element={<Notfound />}></Route>
    //   </Route>
    // </Routes>
  );
}