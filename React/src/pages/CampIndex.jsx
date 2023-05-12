import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import ".//CampIndex.css";
import "bootstrap/dist/js/bootstrap.js";
import LinkButton from '../components/LinkButton.jsx';
import BackToTopButton from '../components/BackToTopButton.jsx';
import { Link } from 'react-router-dom';
import North from './North.jsx'


function CampIndex() {
    
    return(
        <div>
            <Header />
            <Nav />
            
            <div id="index-img1" class=" bg-image col-md-12" >
                <img src="https://img.onl/xyAUqr" alt="" class="vw-100"/>
                <div class="overlay position-absolute bottom-50 start-50 translate-middle text-center imf w-25 h-25">
                        <h1 class="ft-sz">了解更多露營區</h1>
                        <button className=' btn btn-success 'id='btn-sz'><Link to="/north" className='text-light'>前往了解</Link></button>
                    </div>
            </div>
            <div id="index-img2" class=" bg-image col-md-12">
                <img src="https://img.onl/6sZCc9" alt="" class="vw-100"/>
                <div class="overlay position-absolute top-50 start-50 translate-middle text-center imf w-25 h-25">
                        <h1 class="ft-sz">豐盛的早餐與晚餐</h1>
                        <button className=' btn btn-success 'id='btn-sz'><Link to="/food1" className='text-light'>前往了解</Link></button>
                    </div>
            </div>
            <div class=" bg-image col-md-12 position-relative">
                <img src="https://img.onl/Drl3xm" alt="" class="vw-100" />
                    <div class="overlay position-absolute top-50 start-50 translate-middle text-center imf w-25 h-25">
                        <h1 class="ft-sz">想同樂嗎</h1>
                        <button className=' btn btn-success 'id='btn-sz'><Link to="/north" className='text-light'>前往了解</Link></button>
                    </div>
            </div>
            <div id="index-img1" class=" bg-image col-md-12" >
                <img src="https://img.onl/JG8BLq" alt="" class="vw-100"/>
                <div class="overlay position-absolute bottom-50 start-50 translate-middle text-center imf w-25 h-25">
                        <h1 class="ft-sz">喜歡我們的品牌嗎</h1>
                        <button className=' btn btn-success 'id='btn-sz'><Link to="/product" className='text-light'>前往了解</Link></button>
                    </div>
            </div>
            <Footer />
            <BackToTopButton />
            </div>


    ) 
}

export default CampIndex;