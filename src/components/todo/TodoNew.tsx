interface TodoNewProps {
    addNewTodo: (name: string) => void;
}
const TodoNew = (props: TodoNewProps) => {
    console.log(">>> check props: ", props);
    const { addNewTodo } = props;
    //addNewTodo('Dong Arsenal');
    const handleClick = () => {
        alert('Click me');
    }
    const handleOnChange = (name: string) => {
        console.log('Change input: ', name);
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    );
}
export default TodoNew;