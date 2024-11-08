/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import config from "@/config";

const ButtonSignin = ({
  text = "Login",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  return (
    <Link
      className={`btn ${extraStyle ? extraStyle : ""}`}
      href={config.auth.loginUrl}
    >
      {text}
    </Link>
  );
};

export default ButtonSignin;
