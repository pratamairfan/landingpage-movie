import React from "react";

const Hero = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="hero min-h-screen carousel-item relative w-full">
          <img src="https://daisyui.com//images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          <div className="overlay">
            <p className="relative px-40 top-72">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero obcaecati ipsam, temporibus nostrum optio ea ratione odio, sint incidunt nam minus adipisci consequuntur consectetur
              recusandae tenetur expedita aspernatur corporis enim! Exercitationem nisi illum recusandae earum reprehenderit vitae facere quo, cum fugit odio pariatur mollitia autem ducimus id tempora
              similique! Ratione, eligendi earum? Sequi eveniet consectetur, nobis non rerum quam consequatur, reprehenderit, quos voluptates ut dolore labore! Quasi minima reiciendis recusandae
              mollitia quas? Odio vitae culpa cumque quidem nulla amet perspiciatis sapiente. Cupiditate atque consectetur architecto tenetur enim minima illum quis possimus voluptate eum libero a, in
              eligendi. Eaque, ex.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="hero min-h-screen carousel-item relative w-full">
          <img src="https://daisyui.com//images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="overlay"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="hero min-h-screen carousel-item relative w-full">
          <img src="https://daisyui.com//images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="overlay"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="hero min-h-screen carousel-item relative w-full">
          <img src="https://daisyui.com//images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="overlay"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* hero v1 */}
      {/* <div className="hero min-h-screen bg-base-200 mb-20">
        <div className="img"></div>
        <div className="overlay"></div>
        <div className="hero-content grid relative top-56">
          <div>
            <h1 className="text-5xl font-bold">Box Office Movies!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="content-merk">
              <span href="#" className="text-2xl font-bold">
                Disney
              </span>
            </a>
            <a href="#" className="content-merk">
              <span href="#" className="text-2xl font-bold">
                Netflix
              </span>
            </a>
            <a href="#" className="content-merk">
              <span href="#" className="text-2xl font-bold">
                HBO
              </span>
            </a>
            <a href="#" className="content-merk">
              <span href="#" className="text-2xl font-bold">
                Apple TV
              </span>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
