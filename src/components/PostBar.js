import React, {Component} from "react"; 


class PostBar extends Component {
    
    state = {term: ""};

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.term)
    }



    render() { 
        return ( 
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Post Comment </label>
                        <input 
                        type="text" 
                        value= {this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PostBar;