import React from 'react';

import TodoItem from '../TodoItem';

import './index.css';

export default class Content extends React.Component {
  render() {
    const { list = [], onAction = e => e, onRemove = e => e } = this.props;
    return (
      <ul className="list-group">
      {
        list.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onAction={onAction}
            onRemove={onRemove}
          />
        ))
      }
    </ul>
    );
  }
}