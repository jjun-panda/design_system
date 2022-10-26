import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
// import BrandListPage from './pages/BrandListPage';
import FoundationsPage from './pages/FoundationsPage';
import ComponentsPage from './pages/ComponentsPage';
import ContentsPage from './pages/ContentsPage'
import ResourcesPage from './pages/ResourcesPage'
import WishlistPage from './pages/WishlistPage';
import ScrollTop from './components/ScrollTop';

function Main() {
    return (
        <BrowserRouter>
            <ScrollTop/>
            <App>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    {/* <Route path="brand" element={<BrandListPage />}/> */}
                    <Route path="brand" element={<BrandPage />}/>
                    <Route path="foundations" element={<FoundationsPage />}/>
                    <Route path="components" element={<ComponentsPage />}/>
                    <Route path='contents' element={<ContentsPage />}/>
                    <Route path='resources' element={<ResourcesPage />}/>
                    <Route path="wishlist" element={<WishlistPage />}/>
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default Main;
