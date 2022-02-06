import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Nav1 from '../../assets/nav_background.jpg';
import Nav2 from '../../assets/nav_background1.jpg';
import Nav3 from '../../assets/nav_background2.jpg';
import Nav4 from '../../assets/nav_background3.jpg';


const Accueil = () => {
    return (
        <>
            <div id='slide' className='content'>
                <Slider autoplay={1500}>
                    <img
                        src={Nav1}
                        className="image-slider"
                    />
                    <img
                        src={Nav2}
                        className="image-slider"
                    />
                    <img
                        src={Nav3}
                        className="image-slider"
                    />
                    <img
                        src={Nav4}
                        className="image-slider"
                    />
                </Slider>
                <div className='text-slide'>
                    <h2>Always give people more than they expect to get</h2>
                    <h1>LOREM IPSUM DOLOR SIT</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero et in quod accusantium totam nam inventore, illum.</p>
                    <div className='button'><button >Get Started Now</button></div>
                </div>
            </div>

            <section className="content section1">SECTION</section>
            <section className="content section2">SECTION</section>
        </>
    );
};

export default Accueil;