import React from "react";
import { FcRight } from "react-icons/fc";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
function Button(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}></div>
        <div className={cx("value")}></div>
        <div className={cx("icon")}>
          <FcRight />
        </div>
      </div>
    </div>
  );
}

export default Button;
