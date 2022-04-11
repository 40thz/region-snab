import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactIntro from "../components/ContactIntro/ContactIntro";
import Map from "../components/Map/Map";

const ContactsPage = () => {
  return (
    <>
      <ContactIntro />
      <Map />
      <ContactForm />
    </>
  );
};

export default ContactsPage;
