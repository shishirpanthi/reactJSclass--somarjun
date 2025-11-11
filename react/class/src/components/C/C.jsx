import React from "react";
import { FaUsers, FaHeart, FaStar, FaBell } from "react-icons/fa";
import data from "./data.json";
import styles from "./DashboardCard.module.css";

const icons = [FaUsers, FaHeart, FaStar, FaBell];

const DashboardCard = () => {
  return (
    <div className={styles.cardContainer}>
      {data.map((item, index) => {
        const Icon = icons[index];
        return (
          <div key={index} className={styles.card}>
            <Icon className={styles.icon} />
            <h2 className={styles.count}>{item.count}</h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;

