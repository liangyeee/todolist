import React from 'react';
import './index.css';

export default class Headers extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Todo</h1>
        <p>添加任务，管理每日计划</p>
      </div>
    );
  }
}