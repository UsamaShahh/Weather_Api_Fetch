import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../Images/images.jpg'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import Card from 'react-bootstrap/Card';
import { BsClouds } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { BsSun } from 'react-icons/bs';
import { BsCloudHaze2 } from 'react-icons/bs';
import { TbMist } from 'react-icons/tb';
import { RiMoonClearLine } from 'react-icons/ri';

function Weather() {

    let [weatherData, setWeatherData] = useState([]);
    let [searchCity, setSearchCity] = useState('hyderabad');

    let [checkdata ,setcheckdata]=useState(false)
    // let [time, setTime] = useState(new Date())
    // console.log(time.getHours() + ':' + time.getMinutes(2))

    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://pro.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                setWeatherData(response.data)
                setcheckdata(true)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [searchCity])

    return (

        <>

            {/* ------------ NAVBAR START ------------ */}

            {/* <Navbar bg="dark" className='navFix' data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='mt-1'><h4>Achanak Weather <img src={img1} height={40} alt="weatherImg" /> </h4></Navbar.Brand>
                    <Nav className="me-auto">

                        <Col lg={10} className='mt-1'>

                            <h5 style={{ color: 'white' }}> {weatherData.name}°C </h5>

                        </Col>

                        <Col lg={12}></Col>
                        <Col lg={12}>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search city..."
                                    className="me-2"
                                    onChange={(e) => setSearchCity(e.target.value)}
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>

                        </Col>

                    </Nav>
                </Container>
            </Navbar> */}

            <nav className='navBlack'>
                <Container>
                    <Row className='mt-3 mb-2'>
                        <Col sm={6} md={6} lg={3}>
                            <h4>Achanak Weather <img src={img1} height={40} alt="weatherImg" /> </h4>
                        </Col>
                        <Col sm={3} md={3} lg={6}>
                            <h5 style={{ color: 'white' }} className='mt-2'> {weatherData.name}°C </h5>
                        </Col>
                        <Col sm={3} md={3} lg={3}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search city..."
                                    className="me-2"
                                    onChange={(e) => setSearchCity(e.target.value)}
                                    aria-label="Search"
                                />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </nav>

            {/* ------------ NAVBAR END ------------ */}

            {/* ------------ WEATHER BODY START ------------ */}
            <br /><br /><br /><br /><br /><br /><br /><br />

            {
                checkdata == true ?

            

            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Card>
                            {/* <Card.Header>CURRENT WEATHER</Card.Header> */}
                            <Card.Body>
                                <Card.Title style={{ fontSize: 17 }}>CURRENT WEATHER </Card.Title>
                                <Card.Text>

                                    <Row>
                                        <Col lg={6} className='mt-3'>
                                            <h4>{weatherData.name}</h4>

                                            {
                                            weatherData.weather[0].main == 'Smoke' ?
                                            <TiWeatherWindyCloudy className='cloud'/> 

                                            : weatherData.weather[0].main == 'Sunny' ?
                                            <BsSun className='sunny'/> 

                                            : weatherData.weather[0].main == 'Clouds' ?
                                            <BsClouds className='cloud'/>
                                            
                                            : weatherData.weather[0].main == 'Haze' ?
                                            <BsCloudHaze2 className='cloud'/>

                                            : weatherData.weather[0].main == 'Mist' ?
                                            <TbMist className='cloud'/>

                                            : weatherData.weather[0].main == 'Clear' ?
                                            <RiMoonClearLine className='cloud'/>

                                            :
                                            <BsSun className='sunny'/> 



                                        }
                                         
                                         <b className='cloudFont'> {weatherData.main.temp.toFixed()}°C </b><br />
                                         <span className='realFeel'>RealFeel {weatherData.main.feels_like}° </span><br /><br />
                                            <span className='overCast'>Overcast </span>

                                        </Col>
                                        <Col lg={6}>
                                            <p className=''>RealFeel Shade <span className='floatRight'> {weatherData.main.feels_like}° </span> </p>
                                            <hr className='' />
                                            <p className=''>Humidity <span className='floatRight'> {weatherData.main.humidity} </span> </p>
                                            <hr className='' />
                                            <p className=''> Wind <span className='floatRight'> S {weatherData.wind.speed} km/h </span> </p>
                                            <hr className='' />
                                            <p className=''>Pressure <span className='floatRight'> {weatherData.main.pressure} </span> </p><br />

                                            <p className='floatRight fontW'>MORE DETAILS <HiOutlineArrowRight style={{ fontSize: 20 }} className='mb-1' /> </p>

                                        </Col>
                                    </Row>

                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
            :
            <h1>loading</h1>
}


            {/* ------------ WEATHER BODY END ------------ */}


        </>

    )
}
export default Weather;