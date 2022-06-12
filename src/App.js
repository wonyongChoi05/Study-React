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
                        <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
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

            {/*nested routes*/}
            <Route path={'/detail'} element={<About/>}>
                <Route path={'member'} element={<div>Member</div>}></Route>
                <Route path={'location'} element={<div>Location</div>}></Route>
            </Route>

            <Route path={'/event'} element={<Event></Event>}>
                <Route path={'one'} element={<div>첫 주문시 양배추즙 서비스</div>}/>
                <Route path={'two'} element={<div>생일 기념 쿠폰 받기</div>}/>
            </Route>

            <Route path={'*'} element={<div>없는 페이지입니다.</div>}></Route>

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

function About(){
    return(
        <div>
            <h4>회사정보</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Event(){
    return(
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default App;