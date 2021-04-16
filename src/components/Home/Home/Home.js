import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
// import NavigationBar from '../NavigationBar/NavigationBar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Services></Services>
            <Featured></Featured>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </Container>
    );
};

export default Home;