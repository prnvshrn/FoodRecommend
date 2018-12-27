import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {q:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        switch(e.target.name){
            case 'q': 
            this.setState({q:e.target.value});
            break;
        }
    }

    handleSubmit(){
        this.props.params(this.state.q);
    }

    render(){
        return(
            <div>
                <form>
                    <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        name = "q"
                        onChange = {this.handleChange}

                    />
                    <Button type="button" onClick={this.handleSubmit}>Go</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Input;