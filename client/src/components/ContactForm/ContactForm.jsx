import React from "react";
import Pattern from "../Pattern/Pattern";
import PreviewText from "../PreviewText/PreviewText";
import BlockInfo from "../BlockInfo/BlockInfo";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <section id="contactform">
      <Pattern />
      <div className="container">
        <div className="contactform">
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
            <form>
              <div className="contactform-name">
                <input type="text" name="name" placeholder="Ваше имя" />
              </div>
              <div className="contactform-email">
                <input type="text" name="email" placeholder="E-mail" />
              </div>
              <div className="contactform-phone">
                <input type="text" name="phone" placeholder="Телефон" />
              </div>
              <div className="contactform-message">
                <textarea type="text" name="message" placeholder="Сообщение" />
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
  );
};

export default ContactForm;
