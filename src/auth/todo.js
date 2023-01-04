import { useState } from "react";

export default function Todo() {
  let [todo, setTodo] = useState([]);
  let [date, setDate] = useState([]);
  return (
    <>
      <div>
        {todo.map((k, i) => {
          return (
            <div className="todo" key={i}>
              <h4>{todo[i]}</h4>
              <p>
                {date[i].slice(0, 2)}월 {date[i].slice(2)}일
              </p>
              <div className="container">
                <DeleteBtn setTodo={setTodo} setDate={setDate} i={i} todo={todo} date={date} />
                <UpdateBtn setTodo={setTodo} setDate={setDate} i={i} todo={todo} date={date} />
              </div>
            </div>
          );
        })}
      </div>
      <AddTodo todo={todo} date={date} setTodo={setTodo} setDate={setDate} />
    </>
  );
}

function UpdateBtn(props) {
  return (
    <button
      onClick={(e) => {
        e.target.parentNode.parentNode.innerHTML = '<input placeholder="수정 내용"/></br><input type="date"/>';
      }}
      className="btn-design"
    >
      수정
    </button>
  );
}

function DeleteBtn(props) {
  return (
    <button
      onClick={() => {
        let todoCopy = [...props.todo];
        todoCopy.splice(props.i, 1);
        props.setTodo(todoCopy);
        let dateCopy = [...props.date];
        dateCopy.splice(props.i, 1);
        props.setDate(dateCopy);
      }}
      className="btn-design"
    >
      삭제
    </button>
  );
}

function AddTodo(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let todoCopy = [...props.todo];
        todoCopy.push(e.target[0].value);
        props.setTodo(todoCopy);
        let dateCopy = [...props.date];
        let month = e.target[1].value.slice(5, 7);
        let day = e.target[1].value.slice(8);
        dateCopy.push(`${month}${day}`);
        props.setDate(dateCopy);
        e.target[0].value = "";
        e.target[1].value = "";
      }}
      className="todo-input"
    >
      <label>할 일</label>
      <input type="text" required />
      <input type="date" required />
      <button className="btn-design">추가</button>
    </form>
  );
}
