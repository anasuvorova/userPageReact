import { useState } from "react";
import Button from "../Button/button";
import "./card.css";

const Card = ({ id, photo, name, surname, nik, birthday, town, email, phone }) => {
  const [status, setStatus] = useState(false); // [status, setStateStatus]
  // const [counter, setCounter] = useState(0); // [status, setStateStatus]

  // _state = {
  //   status: false,
  //   counter: 0
  // }

  // _setStateStatus(){}
  // _setStateCounter(){}

  return (
    <div className="user-card">
      <img className="user-card__photo" src={photo} alt="photo" />

      <div className="user-card__info">
        <span className="user-card__name">{name}</span>
        <span className="user-card__surname">{surname}</span>
        <span className="user-card__nik">{nik}</span>
        <span className="user-card__birthday">{birthday}</span>
        <span className="user-card__town">{town}</span>
        {/* <button className="user-card__button">add to friend!</button> */}
        <Button handler={() => setStatus(!status)}></Button>
      </div>

      {/* если состояние status === true тогда добавляем user-card__contacts--active иначе удаляем */}

      <div className={`user-card__contacts ${status ? "user-card__contacts--active" : ""}`}>
        <ul className="user-card__connection">
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
