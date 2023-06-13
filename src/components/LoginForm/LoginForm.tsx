import React, { FunctionComponent } from "react"
import { useState ,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import supabase from "../../supabase";
import logo from "../../assets/logo.png";
import { userToken } from "../../App";
import "./style.scss";

interface FormData {
  name: string;
  email: string;
  password: string;
}
interface LoginFormProps {
  closePanel: (state: boolean) => void;
  token:userToken | null
  setToken:React.Dispatch<React.SetStateAction<userToken | null >>
}
const LoginForm: React.FC<LoginFormProps> = ({ closePanel ,token ,setToken} ) => {
  const [regPanel, setRegPanel] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) throw error;
    setToken(data)
    if(token) {
      closePanel(false)
    }
  };

  const handleSubmitRegister = async (e:React.FormEvent) => {
    e.preventDefault()
   try{
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
            data: {
                name: formData.name
            }
        }
        })
   if (error) throw error
   alert("check the e-mail")
   } catch(error) {
   }
}
  const showRegisterForm = (item: boolean) => {
    setRegPanel(item);
  };

  return (
    <>
      {regPanel ? (
        <form onSubmit={handleSubmitRegister} className="cont-form">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#5b1010" }}
            size="xl"
            className="close"
            onClick={() => closePanel(false)}
          />
          <img src={logo} alt="logo" className="logo" />
          <div className="input-cont">
            <h2 className="user-panel-title">Fill All Fields</h2>
            <input
              name="name"
              placeholder="Name"
              className="user-panel-input"
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="E-mail"
              className="user-panel-input"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="user-panel-input"
              onChange={handleChange}
            />
          </div>
          <div className="user-panel-btn-cont">
            <button
              className="user-panel-btn"
              onClick={() => showRegisterForm(false)}
            >
              Back to Login
            </button>
            <button className="user-panel-btn" type="submit">
              Register
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitLogin} className="cont-form">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#5b1010" }}
            size="xl"
            className="close"
            onClick={() => closePanel(false)}
          />
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h2 className="user-panel-title">E-mail</h2>
            <input
              type="e-mail"
              placeholder="Example@gmail.com"
              className="user-panel-input"
              onChange={handleChange}
              name="email"
            />
            <h2 className="user-panel-title">Password</h2>
            <input
              type="password"
              placeholder="Password"
              className="user-panel-input"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="user-panel-btn-cont">
            <button className="user-panel-btn" type="submit">
              Login
            </button>
            <button
              className="user-panel-btn"
              onClick={() => showRegisterForm(true)}
            >
              Register
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
