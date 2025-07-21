import { useState } from "react";

interface TodoNewProps {
    addNewTodo: (name: string) => void;
}
const TodoNew = (props: TodoNewProps) => {
    //useState hook
    //const valueInput = "";
    const [valueInput, setValueInput] = useState("Dong Arsenal");
    const { addNewTodo } = props;

    //addNewTodo('Dong Arsenal');
    const handleClick = () => {
        addNewTodo(valueInput);
        console.log(">>> check value input: ", valueInput);
    }
    const handleOnChange = (name: string) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}
export default TodoNew;