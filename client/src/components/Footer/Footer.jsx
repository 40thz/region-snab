import React from 'react'
import { Link } from "react-scroll";

import Logo from '../Logo/Logo'
import gangImg from '@images/gang.png'

import RS from '../RS'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer__header">
                    <RS color='#262C36' />
                    <div className="colum">
                        <Logo row bgColor='#B63A3A' />
                        <ul className='footer-leftside'>
                            <li>ООО "регионснаб"</li>
                            <li>ИНН: 1234567891</li>
                            <li>ОГРН: 1234567891234</li>
                        </ul>
                    </div>
                    <div className="colum">
                        <div className="footer__title">Контакты</div>
                        <ul>
                            <a href="tel:83912191597">
                                <li>8 391 219-15-97 (отдел продаж)</li>
                            </a>
                            <a href="tel:83912191597">
                                <li>8 391 219-15-97 (отдел кадров)</li>
                            </a>
                            <a href="mailto:regionsnab24@mail.ru">
                                <li>regionsnab24@mail.ru</li>
                            </a>
                        </ul>

                        <div style={{ marginTop: '80px' }} className="footer__title">Время работы</div>
                        <ul>
                            <li>Пн-Пт</li>
                            <li>9:00 - 18:00</li>
                        </ul>
                    </div>
                    <div className="colum">
                        <div className="footer__title">Картка сайта</div>
                        <ul>
                            <Link
                                to="header"
                                smooth
                                duration={500}
                            >
                                <li>Главная</li>
                            </Link>
                            <Link
                                to="about"
                                smooth
                                duration={1000}
                            >
                                <li>О компании</li>
                            </Link>
                            <Link
                                to="advantages"
                                smooth
                                duration={1000}
                                offset={250}
                            >
                                <li>Направления деятельности</li>
                            </Link>
                            <a>
                                <li>Контакты</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>Все права защищены</p>
                    <a href="#" target='_blank'>
                        <p>Политика конфиденциальности</p>
                    </a>
                    <p>Разработка сайта:</p>
                    <a href='https://mygang.ru/' target='_blank' className="gang">
                        <img src={gangImg} alt="Gang" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer