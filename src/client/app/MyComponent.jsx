import React from 'react';

class MyComponent extends React.Component {
     constructor(props) {
         super(props);
         this.state = {words: 'hello'}
         this.onClicky = this.onClicky.bind(this);
     }

      onClicky () {
         this.setState({words: 'something else'});
      }


      render(){
        return (
            <div>
                <span>{this.state.words}</span>
                <button onClick={this.onClicky}>Click for message</button>
            </div>
        );

      }
}

export default MyComponent;
