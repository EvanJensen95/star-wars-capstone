import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  function formValidate() {
    return (
      userName.match(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      ) &&
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const { signIn, register } = useEasybase();

  const clearInputs = () => {
    setUserName("");
    setPassword("");
  };

  const handleLogInPress = async () => {
    await signIn(userName, password);
    clearInputs();
  };

  const handleRegisterPress = async () => {
    await register(userName, password, {
      created_at: new Date().toString,
    });
  };
  clearInputs();
  setSuccess("You are successfully signed up, please continue to sign in");

  return (
    <div className="LogInMain">
      <div className="WelcomeToApp">
        <h2>Welcome to Smugglers Journey</h2>
      </div>
      <div className="LogIn">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="UserNameInput">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="PasswordInput">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <div className="ButtonDiv">
            <Button
              onClick={handleRegisterPress}
              type="submit"
              disabled={formValidate()}
            >
              Register
            </Button>

            <Button
              onClick={handleLogInPress}
              type="submit"
              disabled={formValidate()}
            >
              Login
            </Button>
          </div>
          <h2 className="Successful">{success}</h2>
        </Form>
      </div>
    </div>
  );
}

export default Login;
