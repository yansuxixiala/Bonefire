import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.css";
import Title from '../components/Title';
import BackToTopButton from '../components/BackToTopButton.jsx';

export default function food() {
    return(
        <div>
            <Header/>
            <Nav />
            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className='container'>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.onl/HfopxT" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.onl/NLcPEJ" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.onl/fDWCao" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
                <div className='container mt-6'>
                <Title  mainTitle="精選早餐"/>
            <div class="card mb-3 mt-5">
                <div class="row g-0  align-items-center">
                <div class="col-md-4">
                    <img id='cardimg' src="https://img.onl/6QodD7" alt="..." className='w-100'/>
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">肉桂捲</h5>
                        <p class="card-text">肉桂香氣四溢，甜而不膩</p>
                    <p class="card-text"><small class="text-muted">NT$100(含咖啡)</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-5 foodcard">
                <div class="row g-0 align-items-center">
                <div class="col-md-4">
                    <img id='cardimg' src="https://img.onl/LCRs37" alt="..." className='w-100'/>
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">季節時蔬沙拉</h5>
                        <p class="card-text">就很健康的沙拉</p>
                    <p class="card-text"><small class="text-muted">NT$100(含咖啡)</small></p>
      </div>
    </div>
  </div>
</div>
</div>
<div className='container mt-5'>
                <Title  mainTitle="精選晚餐"/>
            <div class="card mb-3 mt-5">
                <div class="row g-0  align-items-center">
                <div class="col-md-4">
                    <img id='cardimg' src="https://img.onl/Ubeufg" alt="..." className='w-100'/>
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-dark">烤雞套餐</h5>
                        <h6 class="card-text text-dark">「香草烤雞」使用天然香草植物為基底，以胡椒、大蒜等香料特別調製，
嚴選天然的匈牙利紅椒、荳蔻、丁香、羅勒、月桂、茴香、迷迭香、馬鬱蘭、鼠尾草、蒔籮...
堅持21種香料配方、搭配出獨家完美比例。</h6>
                    <p class="card-text text-dark"><small class="text-muted">NT$500(含酒)/每人</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 mt-5 ">
                <div class="row g-0  align-items-center ">
                <div class="col-md-4">
                    <img id='cardimg' src="https://img.onl/16ovSR" alt="..." className='w-100'/>
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-dark">韓式部隊鍋套餐</h5>
                        <h6 class="card-text text-dark">將乳白的牛骨湯倒入部隊鍋，

                                    讓肉嘎嘎的油脂被煮出來，

                            滋潤整個部隊鍋~。</h6>
                    <p class="card-text text-dark"><small class="text-muted">NT$500(含酒)/每人</small></p>
      </div>
    </div>
  </div>
</div>
</div>
<div  className='container mt-5 w-50'>
<Title  mainTitle="精選酒單"/>
<div class="card mb-3 mt-5">
  <img src="https://img.onl/jQkU7B" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">每份餐點均附一杯調酒</h5>
    <p class="card-text">隨著音樂享受大自然的氛圍，微醺的享受特別的夜晚，</p>
    <p class="card-text"><small class="text-muted">NT$1000(暢飲)</small></p>
  </div>
</div>
</div>
            <Footer />
            <BackToTopButton />
        </div>
    )
}