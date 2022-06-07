import React from "react";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactIntro from "../components/ContactIntro/ContactIntro";
import Map from "../components/Map/Map";

import { HelmetProvider, Helmet } from "react-helmet-async";

const ContactsPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ООО РегионСнаб - Контакты</title>
          <link rel="canonical" href="https://regionsnab24.ru/contacts" />
          <meta
            name="keywords"
            content="РегионСнаб, нефтепродукты, хранение, склад, поставщики, Красноярск, доставка, поставки, нефть, красноярский край, перевозка, склад ГСМ, ГСМ, перевалка, купить нефтепродукты, топливо, позвонить, контакты, адрес, телефон"
          />
          <meta
            name="description"
            content="Поставщик нефтепродуктов ООО РегионСнаб всегда на связи"
          />
        </Helmet>
      </HelmetProvider>
      <ContactIntro />
      <Map />
      <ContactForm />
    </>
  );
};

export default ContactsPage;
