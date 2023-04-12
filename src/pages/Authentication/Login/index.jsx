import React, { useRef, useState } from "react";
import Button from "../component/Button";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link, json, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { google, auth, facebook, github } from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import accounts from "../../../service/accountApi";
function Login(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    accounts.map((account) => {
      if (
        account.userName === data.username &&
        account.password === data.password
      ) {
        setLogin(true);
        localStorage.setItem("Account", JSON.stringify(account));
        navigate("/");
      }
    });
  };
  const handleClick = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setLogin(true);
    navigate("/");
    localStorage.setItem("Account", JSON.stringify(result));
    console.log(result);
  };
  const [login, setLogin] = useState(false);
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wapper")}>
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <h1>Welcome to CE15</h1>
          <p>create a free account in 2 steps</p>
          <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
            <label className={cx("label")}>Username</label>
            <input
              className={cx("input")}
              {...register("username")}
              type="text"
            />
            <label className={cx("label")}>Password</label>
            <input
              className={cx("input")}
              {...register("password")}
              type="password"
            />
            <Link className={cx("link")}>Fogot Password ?</Link>
            <button className={cx("button")} type="submit">
              Log in
            </button>
          </form>
          <p>
            Don't have an account ?{" "}
            <Link to="/signup" className={cx("link")}>
              Sign Up
            </Link>
          </p>
          <div className={cx("divider")}>or</div>
          <div className={cx("box")}>
            <div
              onClick={() => {
                handleClick(facebook);
              }}
            >
              <FaFacebook className={cx("icon-facebook")} />
            </div>

            <div
              onClick={() => {
                handleClick(google);
              }}
            >
              <FaGoogle className={cx("icon-google")} />
            </div>
            <div
              onClick={() => {
                handleClick(github);
              }}
            >
              <FaGithub className={cx("icon-github")} />
            </div>
          </div>
        </div>
        <div className={cx("right")}></div>
      </div>
    </div>
  );
}

export default Login;
