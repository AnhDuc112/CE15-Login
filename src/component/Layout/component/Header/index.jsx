import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { auth } from "../../../../config/firebase";
function Header(props) {
  const cx = classNames.bind(styles);

  const [user, setUser] = useState(
    JSON.stringify(localStorage.getItem("Account"))
  );

  return (
    <header className={cx("wapper")}>
      <div className={cx("inner")}>
        <div className={cx("Logo")}>
          <h1>CE15</h1>
        </div>
        {!user && (
          <div className={cx("inner-button")}>
            <Link className={cx("button-login")} to="/login">
              Log in
            </Link>
            <Link className={cx("button-signup")} to="/signup">
              Sign Up
            </Link>
          </div>
        )}
        {user && (
          <div
            className={cx("profile")}
            onClick={() => {
              setUser(null);
              localStorage.clear();
            }}
          >
            <img className={cx("avatar")} src={user.photoURL} alt="" />
            <span className={cx("avatar-name")}>{user.displayName}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
