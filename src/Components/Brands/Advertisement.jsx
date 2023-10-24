import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.ibb.co/XZkPNqv/EOS-R50-B-W-3-X1-1366x509-09-05-23-03-18-28.jpg" },
    { url: "https://i.ibb.co/ydxvnYm/Apple-WATCH-HP.webp" },
    { url: "https://i.ibb.co/41DHhyC/Samsung-Pay-Card-South-Korea.jpg" },
];

const Advertisement = () => {
    return (
        <div className="flex justify-center items-start pt-20">
            <SimpleImageSlider
                width={1000}
                height={300}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={0.5}
            />
        </div>
    );
};

export default Advertisement;