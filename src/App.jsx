import Card from "./components/Card/Card";

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

export default App;

// class Card {
//   constructor({id, phone, name, surname, nik}) {

//   }
// }
