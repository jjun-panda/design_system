import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ScrollTop from "./components/ScrollTop";
import NotFoundPage from "./pages/NotFoundPage";

// Pages
import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage/BrandPage";
import FoundationsPage from "./pages/FoundationsPage/FoundationsPage";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import ContentsPage from "./pages/ContentsPage/ContentsPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import WishlistPage from "./pages/WishlistPage";
import SamplePage from "./pages/SamplePage";

// Brand
import BrandValues from "./pages/BrandPage/BrandValues";
import BrandLogo from "./pages/BrandPage/BrandLogo";
import BrandAppIcon from "./pages/BrandPage/BrandAppIcon";
import BrandApplication from "./pages/BrandPage/BrandApplication";

// Foundations
import FoundationsColor from "./pages/FoundationsPage/FoundationsColor";
import FoundationsTypography from "./pages/FoundationsPage/FoundationsTypography";
import FoundationsIcon from "./pages/FoundationsPage/FoundationsIcon";
import FoundationsGrid from "./pages/FoundationsPage/FoundationsGrid";
import FoundationsRadius from "./pages/FoundationsPage/FoundationsRadius";
import FoundationsShadow from "./pages/FoundationsPage/FoundationsShadow";
import FoundationsBorder from "./pages/FoundationsPage/FoundationsBorder";

// Components
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

// Contents
import ContentThumbnail from "./pages/ContentsPage/ContentsThumbnail";
import ContentBanner from "./pages/ContentsPage/ContentsBanner";
import ContentHeader from "./pages/ContentsPage/ContentsHeader";
import ContentFooter from "./pages/ContentsPage/ContentsFooter";

// Resources
import ResourcesDesignStory from "./pages/ResourcesPage/ResourcesDesignStory";
import ResourcesBXguidelines from "./pages/ResourcesPage/ResourcesBXguidelines";
import ResourcesUXUIguidelines from "./pages/ResourcesPage/ResourcesUXUIguidelines";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "brand", element: <BrandPage /> },
  { path: "brand/values", element: <BrandValues /> },
  { path: "brand/logo", element: <BrandLogo /> },
  { path: "brand/appicon", element: <BrandAppIcon /> },
  { path: "brand/application", element: <BrandApplication /> },

  { path: "foundations", element: <FoundationsPage /> },
  { path: "foundations/color", element: <FoundationsColor /> },
  { path: "foundations/typography", element: <FoundationsTypography /> },
  { path: "foundations/icon", element: <FoundationsIcon /> },
  { path: "foundations/grid", element: <FoundationsGrid /> },
  { path: "foundations/radius", element: <FoundationsRadius /> },
  { path: "foundations/shadow", element: <FoundationsShadow /> },
  { path: "foundations/border", element: <FoundationsBorder /> },

  { path: "components", element: <ComponentsPage /> },
  { path: "components/button", element: <ComponentsButton /> },
  { path: "components/text-field", element: <ComponentsTextField /> },
  { path: "components/selection-control", element: <ComponentsSelectionControl /> },
  { path: "components/tab", element: <ComponentsTab /> },
  { path: "components/badge-tag", element: <ComponentsBadgeTag /> },
  { path: "components/tooltip", element: <ComponentsTooltip /> },
  { path: "components/action-sheets", element: <ComponentsActionSheets /> },
  { path: "components/navigation", element: <ComponentsNavigation /> },
  { path: "components/modals", element: <ComponentsModals /> },
  { path: "components/loading", element: <ComponentsLoading /> },
  { path: "components/carousel", element: <ComponentsCarousel /> },
  { path: "components/toast", element: <ComponentsToast /> },

  { path: "contents", element: <ContentsPage /> },
  { path: "contents/thumbnail", element: <ContentThumbnail /> },
  { path: "contents/banner", element: <ContentBanner /> },
  { path: "contents/header", element: <ContentHeader /> },
  { path: "contents/footer", element: <ContentFooter /> },

  { path: "resources", element: <ResourcesPage /> },
  { path: "resources/design-story", element: <ResourcesDesignStory /> },
  { path: "resources/bx-guidelines", element: <ResourcesBXguidelines /> },
  { path: "resources/uxui-guidelines", element: <ResourcesUXUIguidelines /> },

  { path: "sample", element: <SamplePage /> },
  { path: "wishlist", element: <WishlistPage /> },
  { path: "*", element: <NotFoundPage /> },
];

function Main() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <App>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
