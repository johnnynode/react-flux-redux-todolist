class Utils {
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }

  // toggle 特定一项
  toggleItemList(books, id) {
    let newBooks = [...books]; // copy books
    let target = newBooks.find((book) => {
      return book.id === id;
    });
    target.checked = !target.checked;
    return newBooks;
  }

  // 删除特定一项
  delItemList(books, id) {
    let newBooks = [...books];
    let index = newBooks.findIndex((book) => {
      return book.id === id;
    });

    // 按照索引进行删除
    (index !== -1) && newBooks.splice(index, 1);
    return newBooks;
  }

  // 新增代办事项
  createItem (books, val) {
    let newBooks = [...books];
    let index = newBooks.length ? newBooks[newBooks.length -1].id - 0 + 1 : 1;
    let json = {
      id:index,
      content:val,
      checked:false
    };
    newBooks.push(json);
    return newBooks;
  }

  // 编辑列表
  editItemList (books, id, content) {
    let newBooks = [...books];
    let target = newBooks.find((book)=> {
      return book.id === id;
    });
    target.content = content;
    return newBooks;
  }
}

export default new Utils();