import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useEasybase } from "easybase-react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  function formValidate() {
    return (
      userName.length > 0 && password.length > 0
      // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const { signIn, signUp } = useEasybase();

  const clearInputs = () => {
    setUserName("");
    setPassword("");
  };

  const handleLogInPress = async () => {
    await signIn(userName, password);
    clearInputs();
  };

  const handleRegisterPress = async () => {
    await signUp(userName, password, {
      created_at: new Date().toString,
    });
    clearInputs();
    setSuccess("You are successfully signed up, please continue to sign in");
  };

  return (
    <div className="LogInMain">
      <div className="WelcomeToApp">
        <h1 className="WelcomeLogIn">Welcome to Smugglers Journey</h1>
        <h3 className="Intro">
          Where you will embark on a journey across the Galaxy to put your Star
          Wars knowledge to the test!
        </h3>
      </div>

      <div className="LogIn">
        <div className="EmailPasswordContainer">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="EmailInput">
              <Form.Control
                type="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Email"
              />
            </Form.Group>

            <div className="Register">
              <Form.Group>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
            </div>

            <div className="RegisterButtonDiv">
              <Button
                onClick={handleRegisterPress}
                type="submit"
                disabled={!formValidate()}
              >
                Register
              </Button>
            </div>
            <div className="LoginButtonDiv">
              <Button
                onClick={handleLogInPress}
                type="submit"
                disabled={!formValidate()}
              >
                Login
              </Button>
            </div>

            <h2 className="Successful">{success}</h2>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
