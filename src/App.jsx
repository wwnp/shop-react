import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Single } from './containers/Single';
import { Shop } from "./containers/Shop";
import { AccId } from "./containers/AccId";
import { Notfound } from "./containers/Notfound";
export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Shop />}></Route>
        <Route path='/shop/:slag' element={<Single />}></Route>
        <Route path='/accid' element={<AccId />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Route>
    </Routes>
  );
}