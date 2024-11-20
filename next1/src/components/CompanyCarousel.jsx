import React from 'react';  
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const CompanyCarousel = () => {  
    const settings = {  
        speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
    };  

    const companies = [  
        { id: 1, name: "Company A", logo: "link-to-logo-a" },  
        { id: 2, name: "Company B", logo: "link-to-logo-b" },  
        { id: 3, name: "Company C", logo: "link-to-logo-c" },  
        // Add more companies as needed  
    ];  

    return (  
        <Slider {...settings}>  
            {companies.map(company => (  
                <div key={company.id}>  
                    <img src={company.logo} alt={company.name} />  
                    <h3>{company.name}</h3>  
                </div>  
            ))}  
        </Slider>  
    );  
};  

export default CompanyCarousel;
