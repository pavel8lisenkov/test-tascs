import React, { useState } from "react";
import Button from "./Button/Button";
import s from './Form-pay.module.css';
import InputAmount from "./Input-amount/Input-amount";
import InputPhone from "./Input-phone/Input-phone";

const FormPay = ({operator, setModalActvie}) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  return (
    <form action="" className={s.form__pay}>
      <div className={s.operator__title}>
        <img src={operator.logo} alt="logo" />
        <p>{operator.name}</p>
      </div>
      <InputPhone setPhoneValue={setPhoneValue} />
      <InputAmount setAmountValue={setAmountValue} />
      <Button phoneValue={phoneValue} amountValue={amountValue} setModalActvie={setModalActvie} />
    </form>
  )
}

export default FormPay;