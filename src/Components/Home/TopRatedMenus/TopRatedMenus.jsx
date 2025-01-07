import "./TopRatedMenus.css";
import Button from "../../Button/Button.jsx"

export default function TopRatedMenus() {
    return (
        <div className="top-rated-container">
            <div>
                <p id="emphasis">En çok paketlenen menüler</p>
                <p className="top-rated-main">Acıktıran Kodlara Doyuran Lezzetler</p>
            </div>
            <div className="top-rated-buttons-container">
                
                <Button className="top-rated-button">
                    <div className="top-rated-button-description">
                        
                        <img src="../../../../images/TopRatedMenus-images/Ramen.png" alt="ramen.png" />
                        <img src="../../../../images/TopRatedMenus-images/Pizza.png" alt="pizza.png" />
                        <img src="../../../../images/TopRatedMenus-images/Burger.png" alt="burger.png" />
                        <img src="../../../../images/TopRatedMenus-images/Frenchfries.png" alt="frenchfries.png" />
                        <img src="../../../../images/TopRatedMenus-images/Fastfood.png" alt="fastfood.png" />
                        <img src="../../../../images/TopRatedMenus-images/Softdrinks.png" alt="softdrinks.png" />
                        
                    </div>
                </Button>
            </div>
        </div>
    );
}