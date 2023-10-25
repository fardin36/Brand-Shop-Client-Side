
const Advertisement = () => {
    return (
        <div className="carousel w-full pt-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/XZkPNqv/EOS-R50-B-W-3-X1-1366x509-09-05-23-03-18-28.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-sm btn-circle btn-ghost text-white">❮</a>
                    <a href="#slide2" className="btn btn-sm btn-circle btn-ghost text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ydxvnYm/Apple-WATCH-HP.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-sm btn-circle btn-ghost text-white">❮</a>
                    <a href="#slide3" className="btn btn-sm btn-circle btn-ghost text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/41DHhyC/Samsung-Pay-Card-South-Korea.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-sm btn-circle btn-ghost text-white">❮</a>
                    <a href="#slide1" className="btn btn-sm btn-circle btn-ghost text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;