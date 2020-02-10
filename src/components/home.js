import React from 'react';
import { withRouter} from 'react-router-dom';
import List from './list';
import InputForm from './inputForm';
import Title from './title';


import '../../src/app.css';
import Filtre from './filtre';


class Home extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        items: [],
        text: ""
      };
      
    
      this.markItemCompleted = this.markItemCompleted.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    markItemCompleted(itemId) {
      var updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.done = !item.done;
        
        return item;
      });
      
      // State Updates are Merged
      this.setState({
        items: [].concat(updatedItems)
      });
    }

    handleDeleteItem(itemId) {
      var updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });
      
      this.setState({
        items: [].concat(updatedItems)
      });
    }

    render() {
      return (
        <div>
          
          <Title name="Sarah Todo List React"/>
          <div className="row">
            <div className="col-md-3">
              <List items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
            </div>
          </div>

          <div>
            <InputForm />
          </div>
          <Filtre/>
        </div>
        
      );
    }
  }
  
  
export default withRouter(Home);


