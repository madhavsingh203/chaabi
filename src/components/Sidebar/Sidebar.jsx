import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/Category.png";
import trainingIcon from "../../assets/images/Game.png";
import usersIcon from "../../assets/images/Ticket Star.jpg";
import locationIcon from "../../assets/images/Location.png";

const Sider = () => {
  const sidebarMenu = [
    {
      icon: menuIcon,
      title: "Dashboard",
    },
    {
      icon: trainingIcon,
      title: "Training",
    },
    {
      icon: usersIcon,
      title: "Users",
    },
    {
      icon: locationIcon,
      title: "Analytcs",
    },
    {
      icon: locationIcon,
      title: "My Accounts",
    },
    {
      icon: locationIcon,
      title: "Support",
    },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <img src={logo} />
      </div>
      <div className="sidebar-bottom">
        <ul>
          {sidebarMenu.map((item, index) => (
            <li key={index} className={index === 0 ? "first-button" : ""}>
              <img src={item.icon} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sider;
