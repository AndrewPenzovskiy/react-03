import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactPage from "../../pages/ContactPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Layout from "../layout/layout";

const App = () => {
  return (
    <div className='wrapper'>
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={'/about-me'} element={<AboutPage />} />
                <Route path={'/portfolio'} element={<PortfolioPage />} />
                <Route path={'/contact'} element={<ContactPage />} />
                <Route path={'*'} element={<NotFoundPage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
