import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Shop } from "./containers/Shop";
import { Notfound } from "./containers/Notfound";
export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Shop />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Route>
    </Routes>
  );
}