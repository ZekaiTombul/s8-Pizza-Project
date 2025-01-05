import "./FoodDeals.css";

export default function FoodDeals({deals}) {

    return (
        <div className="deal-container">
            <div style={{
                backgroundImage : `url(${deals[0].img})`, 
                backgroundSize:"cover" 
                }} > 
            </div>
        </div>
    )
}