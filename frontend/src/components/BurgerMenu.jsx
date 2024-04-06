import { useRef } from "react";

const BurgerMenu = ({ onClick }) => {
  const buttonRef = useRef();

  function handleClick() {
    const btn = buttonRef.current;
    const currentState = btn.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      btn.setAttribute("data-state", "opened");
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.setAttribute("data-state", "closed");
      btn.setAttribute("aria-expanded", "false");
    }
    onClick();
  }

  return (
    <button
      ref={buttonRef}
      className="button-one md:hidden"
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={handleClick}
    >
      <svg
        fill="var(--button-color)"
        className="hamburger"
        viewBox="0 0 100 100"
        width="24"
      >
        <rect
          className="line top"
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        ></rect>
        <rect
          className="line middle"
          width="80"
          height="10"
          x="10"
          y="45"
          rx="5"
        ></rect>
        <rect
          className="line bottom"
          width="80"
          height="10"
          x="10"
          y="65"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
};

export default BurgerMenu;
