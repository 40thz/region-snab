import React from "react";
import Pattern from "@components/Pattern/Pattern";
import PreviewText from "@components/PreviewText/PreviewText";
import BlockInfo from "@components/BlockInfo/BlockInfo";
import Button from "@components/Button/Button";
import AboutCall from "@components/AboutCall/AboutCall";

import axios from "axios";

import callImg from "@images/Jobs/callimg.png";

import { useForm } from "react-hook-form";
import Modal from "@components/Modal/Modal";

const ContactForm = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://regionsnab24.ru/api/mail", {
        name: data.firstName,
        email: data.email,
        phone: data.phone,
        text: data.message,
      })
      .then(function (response) {
        response.data.message === "ok" && setModalActive(true);
        document.body.style.overflowY = "hidden";
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
                titleRed="Заполните свои контактные данные"
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
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    {...register("email")}
                    required
                  />
                </div>
                <div className="contactform-phone">
                  <input
                    type="tel"
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
                      Нажимая кнопку «Отправить», вы принимаете условия{" "}
                      <a
                        target="_blank"
                        href="uploads/Политика%20конфиденциальности.pdf"
                      >
                        Политики конфиденциальности и Обработки персональных
                        данных
                      </a>
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
            value="узнавайте всю актуальную информацию о ценах на нашем телеграмм-канале!"
            src={callImg}
            btnName="Подписаться"
            btnSubname="@regionsnab24"
            to="https://t.me/regionsnab24"
          />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ContactForm;
