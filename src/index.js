import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import { Provider } from 'react-redux'
import VisibleTodoList from './containers/VisibleTodoList'
import { createStore } from 'redux'
import todoApp from './reducers'
import NoUseRedux from './NoUseRedux'

let store = createStore(todoApp)
class App extends Component {

    render(){
        return(
            <div>
                <h1>redux</h1>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <hr/>
                <h1>normal</h1>
                <NoUseRedux></NoUseRedux >

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

