// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./hoge.module.css";

function MyHoge() {
  const [hoge, setHoge] = useState(0);

  function handleClick() {
    setHoge(hoge + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.hoge}>
        Clicked {hoge} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyHoge />;
}
