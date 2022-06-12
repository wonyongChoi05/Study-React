import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from "react";
import data from "./data";
import {Route, Routes, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from "./pages/Detail";

function App() {

    let[shoes] = useState(data);

    let navigate = useNavigate();

  return (
    <div className="App">


        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'}>홈</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'detail'}>상세페이지</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <Routes>
            <Route path={'/'} element={
                <>
                    <div className={"main-bg"}></div>
                    <div className={"container"}>
                        <div className={'row'}>
                            {
                                shoes.map((a, i) => {
                                    return (
                                        <Card shoes={shoes[i]} i={i}></Card>
                                    )
                                })}
                        </div>
                    </div>
                </>
            } />

                    <Route path={'/detail'} element={<Detail/>}></Route>
                </Routes>
    </div>
  );
}

function Card(props){
    return (
        <div className={'col-md-4'}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'}
                 width={'80%'} alt={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <h5>{props.shoes.price}</h5>
        </div>
    )
}

export default App;