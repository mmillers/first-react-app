import { useEffect, useRef, useState } from "react";
import Trash from "../../assets/trash.svg";
import "./style.css";

let index = 0;

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function addUser() {
    setUsers([
      ...users,
      {
        id: index++,
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      },
    ]);
  }

  useEffect(() => {
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  }, [users]);

  function removeUser(id) {
    const user = users.find((user) => user.id === id);
    if (confirm(`Deseja remover o usuário ${user.name}?`))
      setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>

        <input name="name" placeholder="Nome" ref={inputName} />
        <input name="age" type="number" placeholder="Idade" ref={inputAge} />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={inputEmail}
        />
        <button type="button" onClick={addUser}>
          Cadastrar
        </button>
      </form>

      <div className="list">
        {users.map((user) => (
          <div className="item" key={user.id}>
            <div>
              <p>
                <span>Nome:</span> {user.name}
              </p>
              <p>
                <span>Idade:</span> {user.age}
              </p>
              <p>
                <span>E-mail:</span> {user.email}
              </p>
            </div>
            <button type="button" onClick={() => removeUser(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
