import Hero from "./Hero/Hero";
import CuisineList from "./CuisineList/CuisineList";
import FoodDeals from "./FoodDeals/FoodDeals";
import TopRatedMenus from "./TopRatedMenus/TopRatedMenus";
import Cards from "./Cards/Cards";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <Hero />
            <CuisineList />
            <FoodDeals />
            <TopRatedMenus />
            <Cards />
        </div>
    );
}
