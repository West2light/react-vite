interface TodoDataProps {
    // myName: string;
    // age: number;
    // data: {
    //     address: string;
    //     country: string;
    // };
    todoList: Array<{
        id: number;
        name: string;
    }>;
}

const TodoData = (props: TodoDataProps) => {
    // props: là một biến object ==> Object destructuring mdn Web Docs
    // {
    //     name: "Dong Arsenal",
    //     age: 25,    
    //     data: {
    //         address: "Ha Noi",
    //         country: "Vietnam"
    //     }
    // }
    // props là một đối tượng chứa các thuộc tính được truyền từ component cha
    const { todoList } = props;
    // const myName = props.myName;
    // const age = props.age;
    // const data = props.data;

    return (
        <div className='todo-data'>
            {/* <div>My age is {age}</div>
            <div>My address is {data.address}</div> */}
            {todoList.map((item, index) => {
                console.log(">>>check map:", item, index)
                return (
                    <div className={`todo-item `} key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                );
            })}
            {/* <div> Learning React</div>
            <div> Watching Youtube</div> */}
            {/* <div>
                {JSON.stringify(props.todoList)}
            </div>
             */}

        </div>
    );
}
export default TodoData;