import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.results[0];

        setUser({
          photo: userData.picture.large,
          name: userData.name.first,
          surname: userData.name.last,
          nik: userData.login.username,
          birthday: new Date(userData.dob.date).toLocaleDateString(),
          town: userData.location.city,
          email: userData.email,
          phone: userData.phone,
        });
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>Users</h1>
      {user && <Card {...user} />}
    </div>
  );
}
export default App;
/*
const data = [
  {
    id: 4345,
    photo: "https://lipsum.app/id/24/100x100",
    name: "Иван",
    surname: "Иванов",
    nik: "Ivan",
    birthday: "11.11.1990",
    town: "Москва",
    email: "ivanov@yandex.ru",
    phone: "+7-888-888-88-88",
  },
  {
    id: 65,
    photo: "https://lipsum.app/id/25/100x100",
    name: "Garry",
    surname: "Watson",
    nik: "super Garry",
    birthday: "12.12.1990",
    town: "London",
    email: "garrySuper@yandex.ru",
    phone: "+7-555-555-88-88",
  },
];

function App() {
  return (
    <>
      {data.map((user) => (
        <Card
          id={user.id}
          photo={user.photo}
          name={user.name}
          surname={user.surname}
          nik={user.nik}
          birthday={user.birthday}
          town={user.town}
          email={user.email}
          phone={user.phone}
        ></Card>
      ))}
    </>
  );
}

*/

// class Card {
//   constructor({id, phone, name, surname, nik}) {

//   }
// }
