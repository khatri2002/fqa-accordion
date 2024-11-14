import styles from "./Home.module.scss";
import IconStar from "../../assets/images/icon-star.svg";
import IconPlus from "../../assets/images/icon-plus.svg";
import IconMinus from "../../assets/images/icon-minus.svg";
import { faqs } from "./data";
import classNames from "classnames";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState<Array<number>>([]);

  const handleClick = (index: number) => {
    setActive((prev) => {
      if (prev.includes(index)) return prev.filter((prev) => prev !== index);
      return [...prev, index];
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.header}>
          <img src={IconStar} alt="icon star" />
          <h1>FAQs</h1>
        </div>
        <div className={styles.container}>
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className={classNames({
                  [styles.item]: true,
                  [styles.active]: active.includes(index),
                })}
              >
                <div className={styles.que} onClick={() => handleClick(index)}>
                  <h2>{faq.que}</h2>
                  <img
                    className={styles.minus}
                    src={IconMinus}
                    alt="icon minus"
                  />
                  <img className={styles.plus} src={IconPlus} alt="icon plus" />
                </div>
                <div className={styles.ans}>
                  <p>{faq.ans}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
