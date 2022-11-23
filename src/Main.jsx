import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage";
// import BrandListPage from './pages/BrandListPage';
import FoundationsPage from "./pages/FoundationsPage";
// import Color from "./pages/FoundationsPage/Color";
// import Typorgaphy from "./pages/FoundationsPage/Typorgaphy";
// import Icon from "./pages/FoundationsPage/Icon";
// import Grid from "./pages/FoundationsPage/Grid";
// import Radius from "./pages/FoundationsPage/Radius";
// import Shadow from "./pages/FoundationsPage/Shadow";
// import Border from "./pages/FoundationsPage/Border";

import ComponentsPage from "./pages/ComponentsPage";
import ContentsPage from "./pages/ContentsPage";
import ResourcesPage from "./pages/ResourcesPage";
import WishlistPage from "./pages/WishlistPage";
import ScrollTop from "./components/ScrollTop";
import SamplePage from "./pages/SamplePage";

function Main() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="brand" element={<BrandListPage />}/> */}
          <Route path="brand" element={<BrandPage />} />
          <Route path="foundations" element={<FoundationsPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="contents" element={<ContentsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="sample" element={<SamplePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
