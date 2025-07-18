
//JSX
//fragment
import './style.css'
const MyComponent = () => {
    const duongdong = "Duong Dong"; //string
    //const duongdong = 26; //number
    //const duongdong = true; //boolean
    //const duongdong = undefined; //undefined
    //const duongdong = null; //null

    //const duongdong = [1, 2, 3];
    //const duongdong = { name: 'Duong Dong', age: 26 }; //object
    return (
        //React Fragment
        <>
            <div> {JSON.stringify(duongdong)} new</div>
            {/* <div>{console.log("Dong")}</div> */}
            <div className="child"
                style={{ borderRadius: '10px' }}>child</div>

        </>
    );
}

export default MyComponent;