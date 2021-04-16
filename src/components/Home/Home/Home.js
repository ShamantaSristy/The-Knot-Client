import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Navbar from '../NavigationBar/NavigationBar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Featured></Featured>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </Container>
    );
};

export default Home;