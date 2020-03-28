import React, { Component } from 'react' ; 
import PropTypes from 'prop-types' ;

class Todoitem extends Component {

    titleStyle = () => {
        return{  
            padding: '10px',
            border : '1px solid black',
            textDecoration : this.props.todo.completed ? 'line-through': 'none' 
        }
      }
     
    render(){
        
        const { id ,title } = this.props.todo;

        return(
            <div style={this.titleStyle()}>
                <h4 >
                    <input type="checkbox" onClick={ this.props.markComplete.bind(this, id)  } />
                    { title }
                    <button onClick={ this.props.deleteTodo.bind(this, id) } className="btnstyle">x</button>
                </h4>
            </div>
        );
    }
}

Todoitem.propTypes = { 
    todo: PropTypes.object.isRequired, 
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}


export default Todoitem ;