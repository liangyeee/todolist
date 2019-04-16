import React from 'react';
import classNames from 'classnames';

import './index.css';

export default class Todotodo extends React.PureComponent {
  render() {
    const { todo, onAction = e => e, onRemove } = this.props;
    return (
      <li className="list-group-item">
        <div>
          {
            todo.completed ? (
              <span className={classNames('label', 'label-primary')}>完成</span>
            ) : (
              <span className={classNames('label', 'label-warning')}>未完成</span>
            )
          }
          <span>{ todo.value }</span>
        </div>
        <div className="edit-btn-group">
          <span style={{ color: 'rgb(126, 148, 146)', marginRight: 5 }}>{todo.createDate}</span>
          {
            !todo.completed && (
              <span className="finish" onClick={() => onAction(todo, true)}></span>
            )
          }
          {
            todo.todoType !== 'cancel' && (
              <span className="cancel" onClick={() => onAction(todo, false)}></span>
            )
          }
          <span className="remove" onClick={() => onRemove(todo)}></span>
        </div>
    </li>
    );
  }
}