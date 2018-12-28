import React,{Component} from 'react';
import {Panel} from 'react-bootstrap';

class Output extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Panel>
                    <Panel.Heading>
                    {this.props.label}
                    </Panel.Heading>
                    <Panel.Body>
                    <a>{this.props.url}</a>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Output;