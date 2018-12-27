import React,{Component} from 'react';

class Output extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.label}
                {this.props.url}
            </div>
        );
    }
}

export default Output;