import "./global.css";
import styles from "./App.module.css";
import { Header } from "./Components/Header";
import { TaskInput } from "./Components/TaskInput";
import { Task } from "./Components/Task";

function App() {

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.input}>
        <TaskInput/>
      </div>
      <main className={styles.main}>
        <div className={styles.wrapperLista}>
          <div className={styles.cabecalholista}>
            
            <div className={styles.tarefas}>Tarefas Criadas
              <div className={styles.contadortarefas}>5</div>
            </div>
            
            <div className={styles.concluidas}>Concluídas
              <div className={styles.contadorconcluidas}>2 de 5</div>
            </div>
            
          </div>
          <div className={styles.lista}>
            <Task/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
