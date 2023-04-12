import React from "react";
import Button from "../component/Button";
import styles from "./SignUp.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
function SignUp(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wapper")}>
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <h1>Welcome to CE15</h1>
          <p>create a free account in 2 steps</p>
          <form className={cx("form")}>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Username</label>
              <input className={cx("input")} type="text" />
            </div>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Name</label>
              <input className={cx("input")} type="text" />
            </div>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Email</label>
              <input className={cx("input")} type="text" />
            </div>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Phone Number</label>
              <input className={cx("input")} type="text" />
            </div>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Password</label>
              <input className={cx("input")} type="password" />
            </div>
            <div className={cx("input-field")}>
              <label className={cx("label")}>Re-Password</label>
              <input className={cx("input")} type="password" />
            </div>

            <button className={cx("button")} type="submit">
              Log in
            </button>
          </form>
          <p>
            Already have an account ?{" "}
            <Link to="/login" className={cx("link")}>
              Login
            </Link>
          </p>
          <div className={cx("divider")}>or</div>
          <div className={cx("box")}>
            <FaFacebook className={cx("icon-facebook")} />
            <FaGoogle className={cx("icon-google")} />
            <FaGithub className={cx("icon-github")} />
          </div>
        </div>
        <div className={cx("right")}></div>
      </div>
    </div>
  );
}

export default SignUp;
