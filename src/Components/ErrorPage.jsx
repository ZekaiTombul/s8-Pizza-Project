import {useLocation} from "react-router-dom"
import "./Error.css";

export default function ErrorPage(){
    const location = useLocation();
    const data = location.state;

    return (
        <div className="error">
            <p>{data}</p>
        </div>
    );
}