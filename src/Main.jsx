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

import { NotFound } from "react-admin";
import NotFoundPage from "pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="brand" element={<BrandPage />} />
          <Route path="brand/values" element={<BrandValues />} />
          <Route path="brand/logo" element={<BrandLogo />} />
          <Route path="brand/appicon" element={<BrandAppIcon />} />
          <Route path="brand/application" element={<BrandApplication />} />

          <Route path="foundations" element={<FoundationsPage />} />
          <Route path="foundations/color" element={<FoundationsColor />} />
          <Route path="foundations/typorgaphy" element={<FoundationsTyporgaphy />} />
          <Route path="foundations/icon" element={<FoundationsIcon />} />
          <Route path="foundations/grid" element={<FoundationsGrid />} />
          <Route path="foundations/radius" element={<FoundationsRadius />} />
          <Route path="foundations/shadow" element={<FoundationsShadow />} />
          <Route path="foundations/border" element={<FoundationsBorder />} />

          <Route path="components" element={<ComponentsPage />} />
          <Route path="components/button" element={<ComponentsButton />} />
          <Route path="components/text-field" element={<ComponentsTextField />} />
          <Route path="components/selection-control" element={<ComponentsSelectionControl />} />
          <Route path="components/tab" element={<ComponentsTab />} />
          <Route path="components/badge-tag" element={<ComponentsBadgeTag />} />
          <Route path="components/tooltip" element={<ComponentsTooltip />} />
          <Route path="components/action-sheets" element={<ComponentsActionSheets />} />
          <Route path="components/navigation" element={<ComponentsNavigation />} />
          <Route path="components/modals" element={<ComponentsModals />} />
          <Route path="components/loading" element={<ComponentsLoading />} />
          <Route path="components/carousel" element={<ComponentsCarousel />} />
          <Route path="components/toast" element={<ComponentsToast />} />

          <Route path="contents" element={<ContentsPage />} />
          <Route path="contents/thumbnail" element={<ContentThumbnail />} />
          <Route path="contents/banner" element={<ContentBanner />} />
          <Route path="contents/header" element={<ContentHeader />} />
          <Route path="contents/footer" element={<ContentFooter />} />

          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/design-story" element={<ResourcesDesignStory />} />
          <Route path="resources/bx-guidelines" element={<ResourcesBXguidelines />} />
          <Route path="resources/uxui-guidelines" element={<ResourcesUXUIguidelines />} />

          <Route path="sample" element={<SamplePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
