import styles from "./TaskInput.module.css"
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export function TaskInput() {
    const [value, setValue] = useState<string>('');
    const [created, setCreated] = useState<number>(0);

    return (
        <div className={styles.inputWrapper}>
            <span className="p-float-label">
                <div className={styles.ajuste}>
                    <InputText id="newTask" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                    <label className={styles.placeHolder} htmlFor="newTask">Adicione uma nova tarefa</label>
                    <div className={styles.buttonWrapper}>
                        <button>
                            <div>Criar</div>
                            <div>
                                <i className="pi pi-plus-circle"/>
                            </div>
                        </button>
                    </div>
                </div>
            </span>
        </div>
    )
}
        