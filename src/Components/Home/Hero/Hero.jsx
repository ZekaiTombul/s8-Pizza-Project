import "./Hero.css";
import Button from "../../Button/Button.jsx"
import { useHistory } from "react-router-dom";


export default function Hero(){
    let history = useHistory();

    function handleNavigation(){
        history.push("/order");
    }

    return (
        <div className="hero">
            <div className="hero-container">
                <p id="deal">Fırsatı kaçırma</p>
                <div className="hero-main">
                    <p>Kod Acıktırır</p>
                    <p>Pizza, Doyurur</p>
                </div>
                <Button className="hero-button" onClick={handleNavigation}>
                Acıktım
                </Button>
            </div>
        </div>
    );
}
