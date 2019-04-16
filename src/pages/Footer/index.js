import React from 'react';

import './index.css';

export default class TodoItem extends React.PureComponent {
  render() {
    const { total } = this.props;
    return (
      <div className="panel-footer">共<span className="total">{total}</span>项任务</div>
    );
  }
}