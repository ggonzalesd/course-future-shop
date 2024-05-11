import React from "react";

interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersInfo: React.ReactNode;
  userInfo: React.ReactNode;
}

export default function AccountLayout(props: MyAccountLayoutProps) {
  return (
    <div>
      {props.children}
      {props.userInfo}
      {props.ordersInfo}
    </div>
  );
}
