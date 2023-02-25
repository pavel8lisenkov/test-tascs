import React from "react";
import s from './Button.module.css';

const Button = ({ phoneValue, amountValue, setModalActvie }) => {

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomPay = (num) => {
    if (num === 1) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ не прошла, попробуйте еще раз.`);
    } else if (num === 2) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ прошла, поздравляем!`);
      setModalActvie(false);
    }
  }

  const handleShow = (event) => {
    if (phoneValue[0] === '8' && phoneValue.length === 17 && amountValue.length > 0) {
      event.preventDefault();
      randomPay(getRandomNum(1, 2));
    } else if (phoneValue[0] === '+' && phoneValue[1] === '7' && phoneValue.length === 18 && amountValue.length > 0) {
      event.preventDefault();
      randomPay(getRandomNum(1, 2));
    } else if (phoneValue[0] === '+' && phoneValue[1] !== '7' && phoneValue.length === 12 && amountValue.length > 0) {
      event.preventDefault();
      randomPay(getRandomNum(1, 2));
    }
  }

  return (
    <button type="submit" className={s.button} onClick={event => handleShow(event)}>Оплатить</button>
  )
}

export default Button;