interface TodoNewProps {
    addNewTodo: (name: string) => void;
}
const TodoNew = (props: TodoNewProps) => {
    console.log(">>> check props: ", props);
    const { addNewTodo } = props;
    //addNewTodo('Dong Arsenal');
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    );
}
export default TodoNew;