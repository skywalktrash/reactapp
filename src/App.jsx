import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;