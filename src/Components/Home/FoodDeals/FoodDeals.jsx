import "./FoodDeals.css";
import Button from "../../Button/Button.jsx";

export default function FoodDeals() {
    return (
        <div className="deal-container">
            <div
                style={{
                    backgroundImage: `url("../../../../images/iteration-2-images/cta/kart-1.png")`,
                    backgroundSize: "cover",
                }}
                className="top-deal"
            >
                <h3>Özel Lezzetus</h3>
                <p>Position:Absolute Acı Burger</p>
                <Button className="deal-button">SİPARİŞ VER</Button>
            </div>
            <div className="other-deals">
                <div
                    className="deal-item"
                    style={{
                        backgroundImage: `url("../../../../images/iteration-2-images/cta/kart-2.png")`,
                        backgroundSize: "cover",
                    }}
                >
                    <h3>Hackathlon</h3>
                    <p>Burger Menü</p>
                    <Button className="deal-button">SİPARİŞ VER</Button>
                </div>
                <div
                    className="deal-item"
                    style={{
                        backgroundImage: `url("../../../../images/iteration-2-images/cta/kart-3.png")`,
                        backgroundSize: "cover",    
                    }}
                >
                    <h3 style={{ color: "var(--primary-red)" }}>Çoooook</h3>
                    <p style={{ color: "var(--primary-black)" }}>hızlı npm gibi kurye</p>
                    <Button className="deal-button">SİPARİŞ VER</Button>
                </div>
            </div>
        </div>
    );
}
