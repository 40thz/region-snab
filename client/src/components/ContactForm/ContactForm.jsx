import React from "react";
import Pattern from "../Pattern/Pattern";
import PreviewText from "../PreviewText/PreviewText";
import BlockInfo from "../BlockInfo/BlockInfo";
import Button from "../Button/Button";
import AboutCall from "../AboutCall/AboutCall";

import axios from "axios";

import callImg from "@images/Jobs/callimg.png";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/mail", {
        name: data.firstName,
        email: data.email,
        phone: data.phone,
        text: data.message,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <section id="contactform">
        <div className="container">
          <div className="contactform">
            <Pattern />
            <div className="colum">
              <PreviewText value="Связваться с нами" />
              <BlockInfo
                title="Остались вопросы?"
                titleRed="Запоните свои контактные данные"
                subTitle="Наши специалисты свяжутся с Вами в ближайшее время, чтобы ответить на все интерсующие Вас вопросы"
                btn={false}
              />
            </div>
            <div className="colum">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contactform-name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    {...register("firstName")}
                    required
                  />
                </div>
                <div className="contactform-email">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    {...register("email")}
                    required
                  />
                </div>
                <div className="contactform-phone">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    {...register("phone")}
                  />
                </div>
                <div className="contactform-message">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Сообщение"
                    {...register("message")}
                  />
                </div>
                <div className="contactform-footer">
                  <div className="colum">
                    <Button value="Отправить" />
                  </div>
                  <div className="colum">
                    <div className="contactform-footer-polytic">
                      Нажимая кнопку «Отправить» вы принимаете условия{" "}
                      <a href="#">Политики конфиденциальности </a> и{" "}
                      <a href="#">Обработки персональных данных</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="contactform__call">
        <div className="container">
          <AboutCall
            value="узнавайте всю актуальная информация о ценах на нашем телеграмм-канале!"
            src={callImg}
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
