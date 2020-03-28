import React, {Component} from 'react' ;
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title:''
    }

    change = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addtodo( this.state.title );
        this.setState({ title: '' });
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    className="input"
                    type="text"
                    name="title"
                    placeholder='Add Todo....'
                    value={this.state.title}
                    onChange={this.change}
                />
                <input
                    className="submit"
                    type='submit'
                    value='Submit'
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addtodo : PropTypes.func.isRequired
}

export default AddTodo ;