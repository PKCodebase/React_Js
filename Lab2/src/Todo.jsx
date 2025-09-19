
function Todo(){

    function callFun(){
        alert("Button Clicked")
    }

   return (
    <div>
        <h1> Kaushik Todo List</h1>
        <img src="pic.jpg" alt="Todo List" width="250" height="300">
        </img>
        <ul>
            <li>Hello</li>
            <li>My name is kaushik</li>
            <li>I am Java Developer</li>
            <button onClick={callFun}>Click</button>
        </ul>
    </div>
   )
}

export default Todo;