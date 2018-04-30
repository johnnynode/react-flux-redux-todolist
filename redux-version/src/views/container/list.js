import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from "../templates/list";
import Action from '../../action';

class ListContainer extends Component {
  render() {
    const { 
      books,
      toggleItem,
      delItem,
      editItem
    } = this.props;
    return (
      <List 
          books={books} 
          toggleItemList={toggleItem}
          delItemList={delItem}
          editItemList={editItem}
      />
    )
  }
}

// connect 这个函数有两个参数
// 第一个参数是用于连接当前数据和reducer的，可以把state参数理解为rootReducer
// 所以通过调用 state.todos 获取 todos这个reducer的数据 并且绑定到 this.props.todos中
// 第二个参数是处理Action中的用到的方法绑定到this.props中
export default connect(
  (state) => ({books: state.books}),
  {
    toggleItem: Action.toggleItem,
    delItem: Action.delItem,
    editItem: Action.editItem
  }
)(ListContainer)