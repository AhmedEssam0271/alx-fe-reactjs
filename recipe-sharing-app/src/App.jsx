import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div>
          <h1>Recipe Sharing App</h1>
          <SearchBar />
          <AddRecipeForm />
          <FavoritesList />
          <RecommendationsList />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
