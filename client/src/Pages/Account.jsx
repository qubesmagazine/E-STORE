import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../config/context";
import { registerOptions } from "../utils/formValidation";

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginUser, registerUser, currentUser } = useStateContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (currentUser.token) {
      navigate("/");
    }
  }, [navigate, currentUser.token]);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const onSubmit = async ({ name, email, password }, e) => {
    console.log(name)
    e.preventDefault();
    setIsSubmitting(true);
    if (isSignUp) {
      await registerUser(name, email, password);
    } else {
      await loginUser(name, password);
    }
    setIsSubmitting(false);
  };

  return (
    <Container className="mt-5 py-5">
      <div className="'border border-danger px-2 logo-width">
        <p className="texting mb-0">Footshop</p>
        <h1 className="text-danger display-3">SHOP</h1>
      </div>
      <div style={{ border: "1px solid red" }} className="mb-5 " />
      <h1 className="heading text-center">
        {isSignUp ? "Get started" : "Log in"}
      </h1>
      <Form
        className="mt-4 mx-auto"
        style={{ width: "270px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId="formBasicName" className="mb-4">
          <Form.Control
            type="text"
            placeholder="Username"
            className="rounded-0 mb-0"
            {...register("name", registerOptions.name)}
          />
          {errors?.name && (
            <span className="text-danger small">{errors.name.message}</span>
          )}
        </Form.Group>
        {isSignUp && (
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Control
              type="email"
              placeholder="E-mail"
              className="rounded-0 mb-0"
              {...register("email", registerOptions.email)}
            />
            {errors?.email && (
              <span className="text-danger small">{errors.email.message}</span>
            )}
          </Form.Group>
        )}
        <Form.Group controlId="formBasicPassword" className="mb-4">
          <Form.Control
            type="password"
            placeholder="Password"
            className="rounded-0 mb-0"
            {...register("password", registerOptions.password)}
          />
          {errors?.password && (
            <span className="text-danger small">{errors.password.message}</span>
          )}
        </Form.Group>

        {isSignUp ? (
          <Button variant="dark" type="submit" className="rounded-0 w-100 mb-3">
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        ) : (
          <Button variant="dark" type="submit" className="rounded-0 w-100 mb-3">
            {isSubmitting ? "Loading..." : "Log in"}
          </Button>
        )}

        {isSignUp ? (
          <p>
            Have an account?{" "}
            <span className="cursor" onClick={switchMode}>
              Log in
            </span>
          </p>
        ) : (
          <p onClick={switchMode} className="cursor">
            Create account
          </p>
        )}
      </Form>
    </Container>
  );
};

export default Account;