import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppProviders from "./Providers/AppProviders";

// Home Page Import
import HomePage from "./Pages/HomePage";
import AppLayout from "./Pages/AppLayout";

// Branch Pages Import
import BranchLayout from "./Pages/BranchPages/BranchLayout";
import EkbatanPage from "./Pages/BranchPages/EkbatanPage";
import ChalosPage from "./Pages/BranchPages/ChalosPage";
import AghdasiyehPage from "./Pages/BranchPages/AghdasiyehPage";
import VanakPage from "./Pages/BranchPages/VanakPage";

// Menu Pages Import
import MenuLayout from "./Pages/MenuPages/MenuLayout";
import MainFoodPage from "./Pages/MenuPages/MainFoodPage";
import AppetizerPage from "./Pages/MenuPages/AppetizerPage";
import DessertPage from "./Pages/MenuPages/DessertPage";
import DrinkPage from "./Pages/MenuPages/DrinkPage";

// Static Pages Import
import FranchisePage from "./Pages/FranchisePage";
import AboutUsPage from "./Pages/StaticPages/AboutUsPage";
import ContactUsPage from "./Pages/StaticPages/ContactUsPage";
import FAQPage from "./Pages/StaticPages/FAQPage";
import RulesPage from "./Pages/StaticPages/RulesPage";
import PrivacyPage from "./Pages/StaticPages/PrivacyPage";

import SearchResultPage from "./Pages/SearchResultPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <AppProviders>
      <Toaster />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />

          {/* Branch Pages */}
          <Route path="branch" element={<BranchLayout />}>
            <Route index element={<Navigate to="ekbatan" replace />} />

            <Route path="ekbatan" element={<EkbatanPage />} />
            <Route path="chalos" element={<ChalosPage />} />
            <Route path="aghdasiyeh" element={<AghdasiyehPage />} />
            <Route path="vanak" element={<VanakPage />} />
          </Route>

          {/* Menu Pages */}
          <Route path="menu" element={<MenuLayout />}>
            <Route index element={<Navigate to="main-food" replace />} />

            <Route path="main-food" element={<MainFoodPage />} />
            <Route path="appetizer" element={<AppetizerPage />} />
            <Route path="dessert" element={<DessertPage />} />
            <Route path="drink" element={<DrinkPage />} />
          </Route>

          {/* Static Pages */}
          <Route path="franchise" element={<FranchisePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="FAQ" element={<FAQPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="privacy" element={<PrivacyPage />} />

          {/* Search Result Page */}
          <Route path="search-result" element={<SearchResultPage />} />

          {/* Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
