import React, { useState, useEffect } from 'react';
import db from './firebase';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  //handleSubmit adds items to the todo list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //if value is empty then display alert
      setAlert({ show: true, msg: 'please enter value', type: 'danger' });
    } else if (name && isEditing) {
      //deal with alert if there is a value and is editing is true
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
    // the above code allows the list to be created and then empties the input section after putting in a to dos
  };
  // note that the alert functions are inside the handlesubmit function
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
    console.log('hello');
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    // setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()));
      setName(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);
  return (
    <section className="section-center">
      <form className="todo-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>To do ✅ </h3>
        <div className="form-control">
          <input
            type="text"
            className="todolist"
            placeholder="eg. pay taxes"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
          {/* Why didnt the guy in the tutorial didn't put the handleSubmit on the button instead of the form? */}
        </div>
      </form>
      {list.length > 0 && (
        <div className="todo-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
        // this function doesn't display list unless items are input
      )}
    </section>
  );
}

export default App;
