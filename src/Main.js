import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import BrandListPage from './pages/BrandListPage';
import FoundationsPage from './pages/FoundationsPage';
import WishlistPage from './pages/WishlistPage';

function Main() {
    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="brand" element={<BrandListPage />}/>
                    <Route path="brand/react-frontend-development" element={<BrandPage />}/>
                    <Route path="foundations" element={<FoundationsPage />}/>
                    <Route path="wishlist" element={<WishlistPage />}/>
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default Main;
