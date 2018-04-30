import Constants from '../constants';

const Types = Constants.actionTypes;

export default {
  toggleItem(id) {
    return {
      id,
      type:Types.toggleItem
    };
  },
  delItem(id) {
    return {
      id,
      type:Types.delItem
    };
  },
  createItem(title) {
    return {
      title,
      type:Types.createItem
    };
  },
  editItem(id, title) {
    return {
      id,
      title,
      type:Types.editItem
    };
  },
  loadData() {
    // 这里的dispatch就是store中的dispatch
    // 这里返回的是一个函数，在store中处理字典和函数两种不同的方式
    // 这里是函数，处理之后仍旧返回的是字典
    return (dispatch) => {
        fetch('books.json')
            .then((data) => data.json())
            .then((books)=>{
                dispatch({
                    type: Types.loadData,
                    books
                });
            });
    }
  }
};