import React, { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/buton/Button";
import Form from "./components/form/Form";

function App() {
  const [user, setuser] = useState({ name: "", password: "" });
  const handlechange = (e) => {
    if (e.target.type === "text") {
      setuser({ ...user, name: e.target.value });
      console.log(user);
    }
    else{
      setuser({ ...user, password: e.target.value });
      console.log(user);
    }
  };

  const handleclick =() => {
    if (user.name === "" || user.password === ""){
      alert("Kullanıcı adı veya şifre girilmedi")
    }
  }

  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
        <Input
          value={user.name}
          type={"text"}
          placeholder={"Kullanıcı adı"}
          onChange={handlechange}
        />
        <Input
          value={user.password}
          type={"password"}
          placeholder={"Şifre"}
          onChange={handlechange}
          
        />
        <Button onClick= {handleclick}/>
      </Form>
    </div>
  );
}

export default App;
