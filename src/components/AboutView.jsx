import Hero from "./Hero";
const AboutView = () => {
    return (
        <>
        <Hero text='About Us '/>
        <div className="container">
            <div className='row'>
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ratione exercitationem. Alias voluptates numquam delectus laboriosam id ex mollitia, quasi, deserunt veniam debitis voluptatibus eligendi placeat quam quis atque dolorum!
                    </p>
                </div>
            </div>        
        </div>
        </>
    );
}

export default AboutView;