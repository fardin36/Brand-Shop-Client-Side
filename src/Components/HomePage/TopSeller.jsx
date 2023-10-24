import Marquee from "react-fast-marquee";

const TopSeller = () => {
    return (
        <Marquee className="py-20" speed={200}>
            <img src="https://i.ibb.co/XJGkW8X/brand-1.png" alt="" />
            <img src="https://i.ibb.co/JpS4V57/brand-2.png" alt="" />
            <img src="https://i.ibb.co/GTm7sKG/brand-3.png" alt="" />
            <img src="https://i.ibb.co/7nttZf9/brand-4.png" alt="" />
            <img src="https://i.ibb.co/7rM9KYV/brand-5.png" alt="" />
        </Marquee>
    );
};

export default TopSeller;