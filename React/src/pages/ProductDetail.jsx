import { useParams, Link } from "react-router-dom";
import Title from "../components/Title";
import QuantityBtn from "../components/QuantityBtn";
import BackToTopButton from '../components/BackToTopButton.jsx';

export default function ProductDetail() {
    
    let params = useParams()
    
    return (
        <div>
                <Title mainTitle={params.id+'產品資料'}/>
                <QuantityBtn />
        
            <Link to="/North">回到露營區列表</Link>
            <BackToTopButton />
        </div>
    )
}

