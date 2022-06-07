import React from "react";
import cn from "classnames";

import Logo from "@components/Logo/Logo";
import Button from "@components/Button/Button";

const Modal = ({ active, setActive }) => {
  const modalClose = () => {
    setActive(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div
      className={cn("modal", { active: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn("modal__content", { active: active })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-left">
          <div className="vacancyOverlay"></div>
          <Logo row bgColor="#B63A3A" />
        </div>
        <div className="modal__content-right">
          <div
            className={cn("modal__content-right-inside", { active: active })}
          >
            <div className="thank">Благодарим</div>
            <div style={{ textTransform: "uppercase", marginBottom: "10px" }}>
              За обращение
            </div>

            <div className="feed">
              Специалист свяжется с Вами в ближайшее время
            </div>
            <Button onClick={modalClose} value="Закрыть" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
