import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import ImagePage from './ImagePage';
import VideoPage from './VideoPage';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';


// Routing
const routing=(
  <>
  <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet"/>
  <BrowserRouter>
    {/* <NavLink to='/'>Home</NavLink>&nbsp;&nbsp;
    <NavLink to='/image'>ImagePage</NavLink>&nbsp;&nbsp;
    <NavLink to='/video'>VideoPage</NavLink>&nbsp;&nbsp; */}

      <Navbar  bg="primary" variant="dark">
        <Container >
          <Navbar.Brand href="/">Game Zone</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink id='navlink' to='/'>Home</NavLink>&nbsp;&nbsp;
          <NavLink id='navlink' to='/image'>Images</NavLink>&nbsp;&nbsp;
          <NavLink id='navlink' to='/video'>Videos</NavLink>&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/'element={<HomePage/>}></Route>
      <Route path='image'element={<ImagePage/>}></Route>
      <Route path='video'element={<VideoPage/>}></Route>
    </Routes>

  </BrowserRouter>
  <MDBFooter className='text-center' color='white' bgColor='dark'>
  <MDBContainer className='p-4'>
    <section className='mb-4'>
      <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/' role='button'>
        <MDBIcon fab icon='facebook-f' />
      </a>

      <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/' role='button'>
        <MDBIcon fab icon='twitter' />
      </a>

      <a className='btn btn-outline-light btn-floating m-1' href='https://www.google.co.in/' role='button'>
        <MDBIcon fab icon='google' />
      </a>

      <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/' role='button'>
        <MDBIcon fab icon='instagram' />
      </a>

      <a className='btn btn-outline-light btn-floating m-1' href='https://in.linkedin.com/in/om-rawal' role='button'>
        <MDBIcon fab icon='linkedin-in' />
      </a>

      <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/om-rawal' role='button'>
        <MDBIcon fab icon='github' />
      </a>
    </section>

    <section className=''>
      <form action=''>
        <div className='row d-flex justify-content-center'>
          <div className='col-auto'>
            <p className='pt-2'  class='onlyFont'>
              <strong  >Sign up for our newsletter</strong>
            </p>
          </div>

          <MDBCol md='5' start='12'>
            <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
          </MDBCol>

          <div className='col-auto'>
            <MDBBtn outline color='light' type='submit' className='mb-4'>
              Subscribe
            </MDBBtn>
          </div>
        </div>
      </form>
    </section>

    <section className='mb-4'  class='onlyFont'>
      <p  class='onlyFont'>
        GameZone provides a comprehensive overview of all the famous games out there.<br/>
        It provides links to the official website to purchase the game.
      </p>
    </section>
  </MDBContainer>

  <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2020 Copyright:
    <a className='text-white' href='https://mdbootstrap.com/'>
      MDBootstrap.com
    </a>
  </div>
</MDBFooter>
</>
)
ReactDOM.render(routing,document.getElementById('root'));

// reportWebVitals(console.log);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
