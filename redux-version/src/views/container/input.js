import React, {Component} from 'react';
import {connect} from 'react-redux';
import Utils from '../../utils';
import Action from '../../action';
import Input from "../templates/input";

class InputContainer extends Component {

  render() {
    const {
      createItem
    } = this.props;
    
    return (
      <Input 
        type='text' 
        style={{width:200,height:30,outline:"none"}} 
        placeholder="please input here to add your book ..." 
        autoFocus={true} 
        onKeyDown={(e)=>{
          var val = e.target.value;
          var _val = Utils.trim(val);
          // 正常新增
          if(e.keyCode === 13 && _val) {
            createItem(e.target.value);
            e.target.value = ""; // 清空原值
          }

          // 空值回车的处理
          if(e.keyCode === 13 && !_val) {
            e.target.value = ""; // 清空原值
          }
        }}
      />
    )
  }

}

export default connect(
  undefined,
  {
    createItem:Action.createItem
  }
)(InputContainer);
