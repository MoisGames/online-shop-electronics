import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Col from 'react-bootstrap/esm/Col';


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
        className='d-flex justify-content-center align-items-center text-decoration-none text-reset'
        
        style={{height: window.innerHeight - 100, textDecoration: 'none'}}
        >
        <Card className='p-5'>
            <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <Form 
            style={{width: 600}} 
            className='d-flex flex-column m-4'>
                <Form.Control 
                className="mt-3"
                placeholder='Введите ваш email...'
                />
                <Form.Control
                className="mt-3"
                placeholder='Введите ваш пароль...'
                />
                <Row 
                className='d-flex justify-content-between mt-3 ml-3 mr-3'
                >
                    <Col sm={8}>
                    {isLogin ? 
                    <div>
                        Нет аккаунта? <NavLink to = {REGISTRATION_ROUTE} className = "link-underline-light">Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div>
                        Есть аккаунт? <NavLink to = {LOGIN_ROUTE} className = "link-underline-light">Войдите</NavLink>
                    </div>
                    }
                    </Col>

                    <Col sm={3}>
                    <Button
                        variant={"outline-success"}
                        >
                        {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Col> 
                    </Row>
                </Form>
            </Card>
            </Container>
        );
    };

    export default Auth;