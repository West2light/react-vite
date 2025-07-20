const TodoData = (props) => {
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
    const { myName, age, data } = props;
    // const myName = props.myName;
    // const age = props.age;
    // const data = props.data;
    console.log(">>> check props: ", props);
    return (
        <div className='todo-data'>
            <div>My name is {myName} </div>
            {/* <div>My age is {age}</div>
            <div>My address is {data.address}</div> */}
            <div> Learning React</div>
            <div> Watching Youtube</div>
        </div>
    );
}
export default TodoData;