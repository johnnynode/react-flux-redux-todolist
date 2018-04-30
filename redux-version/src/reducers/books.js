import Constants from '../constants';
import Utils from '../utils';

const Types = Constants.actionTypes;

// state 默认值为 [], action 默认值为 {}
let books = (state = [], action = {}) => {
  // 通过switch来做判断
  switch(action.type) {
    case Types.toggleItem:
      return Utils.toggleItemList(state, action.id);
    case Types.delItem:
      return Utils.delItemList(state, action.id);
    case Types.createItem:
      return Utils.createItem(state, action.title);
    case Types.editItem:
      return Utils.editItemList(state, action.id, action.title);
    case Types.loadData:
      return action.books;
    default:
      return state;
  }
}

export default books;