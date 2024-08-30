import React, { ReactNode } from "react";
import styles from './style.module.css'

export default function Button({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}): JSX.Element {
  switch (color) {
    case "note":
      color = "#6c757d";
      break;
    case "tip":
      color = "#198754";
      break;
    case "info":
      color = "#0d6efd";
      break;
    case "caution":
      color = "#b58d20";
      break;
    case "danger":
      color = "#dc3545";
      break;
    case undefined:
      color = "#0dcaf0";
      break;
  }
  return (
    <a
      className={styles.button}
    >
      {children}
    </a>
  );
}
