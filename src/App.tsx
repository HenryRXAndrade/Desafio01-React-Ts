import "./global.css";
import styles from "./App.module.css";
import { Header } from "./Components/Header";
import { TaskInput } from "./Components/TaskInput";

function App() {

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.input}>
        <TaskInput/>
      </div>
      <main>

      </main>
    </div>
  )
}

export default App
