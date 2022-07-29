const Hero = ({text, backdrop}) => {
    return (
        <div className="bg-dark text-white 
        p-5 hero-container" style={{backgroundImage: `url(${backdrop})`}}>
            <h1 className="hero-text">{text}</h1>
            <div className="hero-backdrop">
            </div>
        </div>
    );
}

export default Hero