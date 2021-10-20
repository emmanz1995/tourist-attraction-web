import React from 'react';
import '../styles/home.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Card from "../components/card";

function Home() {
    return (
        <div className="main-container">
            <section className="banner-container">
                <Carousel className="carousel" autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                    <div className="carousel-image">
                        <img className="image-1" src="/assets/vacations-1354563_1920.jpg" alt="" width="600" height="400" />
                        <p className="legend">Waterfall</p>
                    </div>
                    <div className="carousel-image">
                        <img className="image-1" src="/assets/London-banner.jpg" alt="" width="600" height="400" />
                        <p className="legend">City of London</p>
                    </div>
                </Carousel>
            </section>
            <section className="travel-agency">
                <h1>Welcome to the best tourism website guide for Londoners</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam neque quaerat sapiente? Accusamus alias aspernatur commodi culpa cum distinctio dolor dolorum eius enim eveniet exercitationem fuga fugit inventore ipsam laudantium magni minima minus mollitia necessitatibus nisi non obcaecati odit officia officiis perferendis provident quaerat, quam qui quibusdam quidem quis quisquam quo repellat repellendus soluta velit voluptas? Esse illo labore nobis provident quasi quo repudiandae temporibus voluptate. Autem, commodi dignissimos distinctio dolorum est ipsam iusto, minus officia perferendis quasi totam, voluptate voluptatum? Aspernatur at enim hic incidunt inventore magni nostrum quidem quo, reiciendis sapiente tempora ullam voluptates voluptatibus? Adipisci, cumque!</p>
            </section>
            <section className="card-align">
                <h1><b>Come and visit one of the world's most prestigious places</b></h1>
                <div className="card-container">
                    <Card title="Tower Bridge" image="assets/london-bridge-2324875_640.jpg" link="/" linkTitle="read more" />
                    <Card title="The City of London" image="assets/joao-barbosa-iSZJxklblkw-unsplash.jpg" link="/" linkTitle="read more" />
                    <Card title="Lesnes Abbey" image="assets/lesnes-abbey.jpg" link="/" linkTitle="read more" />
                </div>
            </section>
            <section className="about"></section>
            <section className="contact"></section>
        </div>
    );
}

export default Home;
