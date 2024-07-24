import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Col from 'react-bootstrap/esm/Col';
import { registration, login, check } from '../http/userAPI';


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = registration (email, password)
            console.log(response); 
        }
    }

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
                value={email}
                onChange={elem => setEmail(elem.target.value)}
                />
                <Form.Control
                className="mt-3"
                placeholder='Введите ваш пароль...'
                value={password}
                onChange={elem => setPassword(elem.target.value)}
                type='password'
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
                        onClick={click}
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