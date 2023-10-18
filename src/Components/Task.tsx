import styles from "./Task.modulce.css"

export function Task(){
    return(
        <div>
            <div>
              <i className="pi pi-calendar-minus"></i>
            </div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}
