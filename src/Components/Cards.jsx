import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, body, deleteHandler, doneHandler, isDone }) {
  const navigate = useNavigate();

  return (
    <div key={id}>
      <div>{title}</div>
      <div>{body}</div>
      <button onClick={() => deleteHandler(id)}>삭제하기</button>
      <button onClick={() => doneHandler(id)}>
        {isDone ? '취소' : '완료'}
      </button>
      <button
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        상세페이지
      </button>
    </div>
  );
}
export default Card;
