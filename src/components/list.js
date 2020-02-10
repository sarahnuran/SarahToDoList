import React from 'react';
import Item from './item';

class List extends React.Component {
    render() {
      return (
        <ul className="todolist">
          {this.props.items.map(item => (
            <Item key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
          ))}
        </ul>
      );
    }
  }
  export default List;