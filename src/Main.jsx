import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";

import BrandPage from "./pages/BrandPage/BrandPage";
import BrandValues from "./pages/BrandPage/BrandValues";
import BrandLogo from "./pages/BrandPage/BrandLogo";
import BrandAppIcon from "./pages/BrandPage/BrandAppIcon";
import BrandApplication from "./pages/BrandPage/BrandApplication";

import FoundationsPage from "./pages/FoundationsPage/FoundationsPage";
import FoundationsColor from "./pages/FoundationsPage/FoundationsColor";
import FoundationsTyporgaphy from "./pages/FoundationsPage/FoundationsTyporgaphy";
import FoundationsIcon from "./pages/FoundationsPage/FoundationsIcon";
import FoundationsGrid from "./pages/FoundationsPage/FoundationsGrid";
import FoundationsRadius from "./pages/FoundationsPage/FoundationsRadius";
import FoundationsShadow from "./pages/FoundationsPage/FoundationsShadow";
import FoundationsBorder from "./pages/FoundationsPage/FoundationsBorder";

import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import ComponentsButton from "./pages/ComponentsPage/ComponentsButton";
import ComponentsTextField from "./pages/ComponentsPage/ComponentsTextField";
import ComponentsSelectionControl from "./pages/ComponentsPage/ComponentsSelectionControl";
import ComponentsTab from "./pages/ComponentsPage/ComponentsTab";
import ComponentsBadgeTag from "./pages/ComponentsPage/ComponentsBadgeTag";
import ComponentsTooltip from "./pages/ComponentsPage/ComponentsTooltip";
import ComponentsActionSheets from "./pages/ComponentsPage/ComponentsActionSheets";
import ComponentsNavigation from "./pages/ComponentsPage/ComponentsNavigation";
import ComponentsModals from "./pages/ComponentsPage/ComponentsModals";
import ComponentsLoading from "./pages/ComponentsPage/ComponentsLoading";
import ComponentsCarousel from "./pages/ComponentsPage/ComponentsCarousel";
import ComponentsToast from "./pages/ComponentsPage/ComponentsToast";

import ContentsPage from "./pages/ContentsPage/ContentsPage";
import ContentThumbnail from "./pages/ContentsPage/ContentsThumbnail";
import ContentBanner from "./pages/ContentsPage/ContentsBanner";
import ContentHeader from "./pages/ContentsPage/ContentsHeader";
import ContentFooter from "./pages/ContentsPage/ContentsFooter";

import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ResourcesDesignStory from "./pages/ResourcesPage/ResourcesDesignStory";
import ResourcesBXguidelines from "./pages/ResourcesPage/ResourcesBXguidelines";
import ResourcesUXUIguidelines from "./pages/ResourcesPage/ResourcesUXUIguidelines";

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

          <Route path="brand" element={<BrandPage />}>
            <Route path="values" element={<BrandValues />} />
            <Route path="logo" element={<BrandLogo />} />
            <Route path="appicon" element={<BrandAppIcon />} />
            <Route path="application" element={<BrandApplication />} />
          </Route>

          <Route path="foundations" element={<FoundationsPage />}>
            <Route path="color" element={<FoundationsColor />} />
            <Route path="typorgaphy" element={<FoundationsTyporgaphy />} />
            <Route path="icon" element={<FoundationsIcon />} />
            <Route path="grid" element={<FoundationsGrid />} />
            <Route path="radius" element={<FoundationsRadius />} />
            <Route path="shadow" element={<FoundationsShadow />} />
            <Route path="border" element={<FoundationsBorder />} />
          </Route>

          <Route path="components" element={<ComponentsPage />}>
            <Route path="button" element={<ComponentsButton />} />
            <Route path="text-field" element={<ComponentsTextField />} />
            <Route path="selection-control" element={<ComponentsSelectionControl />} />
            <Route path="tab" element={<ComponentsTab />} />
            <Route path="badge-tag" element={<ComponentsBadgeTag />} />
            <Route path="tooltip" element={<ComponentsTooltip />} />
            <Route path="action-sheets" element={<ComponentsActionSheets />} />
            <Route path="navigation" element={<ComponentsNavigation />} />
            <Route path="modals" element={<ComponentsModals />} />
            <Route path="loading" element={<ComponentsLoading />} />
            <Route path="carousel" element={<ComponentsCarousel />} />
            <Route path="toast" element={<ComponentsToast />} />
          </Route>

          <Route path="contents" element={<ContentsPage />}>
            <Route path="thumbnail" element={<ContentThumbnail />} />
            <Route path="banner" element={<ContentBanner />} />
            <Route path="header" element={<ContentHeader />} />
            <Route path="footer" element={<ContentFooter />} />
          </Route>

          <Route path="resources" element={<ResourcesPage />}>
            <Route path="design-story" element={<ResourcesDesignStory />} />
            <Route path="bx-guidelines" element={<ResourcesBXguidelines />} />
            <Route path="uxui-guidelines" element={<ResourcesUXUIguidelines />} />
          </Route>

          <Route path="sample" element={<SamplePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
