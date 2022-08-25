import React from 'react';

import Navigation from './pages-items/Navigation';
import TodoAddInput from './pages-items/TodoAddInput';
import TodoList_Item from './pages-items/TodoList_Item';
import TodoTabs from './pages-items/TodoTabs';

const TodoList = () => {
  return (
    <div id="todoListPage" className="bg-half">
      <Navigation />
        <div className="conatiner todoListPage vhContainer">
            <div className="todoList_Content">
              <TodoAddInput />
                <div className="todoList_list">
                <TodoTabs />
                <div className="todoList_items">
                  <TodoList_Item />
                    <div className="todoList_statistics">
                        <p>0個已完成項目</p>
                        <button>
                        清除已完成項目
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList