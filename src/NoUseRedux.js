import React,{Component} from 'react'
let index = 0;
export default class NoUseRedux extends Component{
    constructor(props){
        super(props);
        this.state={
            visibilityFilter:"SHOW_ALL",//"SHOW_COMPLETED" "SHOW_ACTIVE"
            todos:[]
        }
    }
    addTodo(e){
        e.preventDefault();
        let value = this.refs.input.value
        if(value===""){
            return
        }

        this.setState({
            todos:[...this.state.todos,{
                id: index,
                text: value,
                completed: false
            }]
        });
        index++;
        this.refs.input.value="";
    }
    toggleTodo(id){
        let newTodos= this.state.todos.map((todo,i)=>{
            return todo.id===id?{...todo,completed:!todo.completed}:todo;
        })
        this.setState({
            todos:newTodos
        })
    }
    handleFilter(type){
        console.log(type)
        this.setState({
            visibilityFilter:type
        })
    }
    render(){

        let filterArr=[{
            item: "all",
            filter:"SHOW_ALL"
        },{
            item:"active",
            filter:"SHOW_COMPLETED"
        },{
            item:"completed",
            filter:"SHOW_ACTIVE"
        }]
        return(
            <div>
                <form onSubmit={(e)=>this.addTodo(e)}>
                    <input type="text" ref="input"/>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {this.state.todos.map((todo,i)=>{
                        if(this.state.visibilityFilter==="SHOW_ALL"){
                            return <li style={{textDecoration: todo.completed?"line-through":""}} key={i} onClick={()=>{this.toggleTodo(todo.id)}}>{todo.text}</li>
                        }else if(this.state.visibilityFilter==="SHOW_COMPLETED"){
                            if(!todo.completed){
                                return <li style={{textDecoration: todo.completed?"line-through":""}} key={i} onClick={()=>{this.toggleTodo(todo.id)}}>{todo.text}</li>
                            }else{
                                return null
                            }
                        }else{
                            if(todo.completed){
                                return <li style={{textDecoration: todo.completed?"line-through":""}} key={i} onClick={()=>{this.toggleTodo(todo.id)}}>{todo.text}</li>
                            }else{
                                return null
                            }
                        }
                    })}
                </ul>
                <p>
                    Show:
                    {filterArr.map((item,i)=>{
                        return item.filter===this.state.visibilityFilter?<span key={i}> {item.item}</span>:<a key={i} href="" onClick={(e)=>{e.preventDefault();this.handleFilter(item.filter)}}> {item.item} </a>
                    })}
                </p>
            </div>
        )
    }
}