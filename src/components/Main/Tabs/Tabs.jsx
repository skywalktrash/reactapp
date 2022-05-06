import React from "react";
import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <ul className={styles.spisok}>
        <li className={styles.element}>All</li>
        <li className={styles.element}>Active</li>
        <li className={styles.element}>Complited</li>
      </ul>
      <div className={styles.border}></div>
      <input type="text" placeholder="add details" className={styles.adddetails}/>
      <button>Add</button>      
      <div>
        <input className={styles.inp1} type="checkbox"/>
        <p className={styles.p1}>Do coding challange</p>
        <input className={styles.inp2} type="checkbox"/>
        <p className={styles.p2}>Do coding challange</p>
        <input className={styles.inp3} type="checkbox"  />
        <p className={styles.p3} >Do coding challange</p>
      </div>
    </div>
  );
}