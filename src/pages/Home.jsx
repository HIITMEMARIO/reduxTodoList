import React from 'react';
import { useState } from 'react';
import Cards from '../Components/Cards';
import styled from 'styled-components';
import shortid from 'shortid';
// import { useNavigate } from 'react-router-dom';
import { addtodo, deletetodo, switchtodo } from '../redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const list = useSelector((state) => {
    return state.todos;
  });

  const [titleValue, setTitleValue] = useState('');
  const [detailValue, setDetailValue] = useState('');
  // const [list, setList] = useState([]);

  const dispatch = useDispatch();

  const addCard = () => {
    const newList = {
      id: shortid.generate(),
      title: titleValue,
      body: detailValue,
      isDone: false,
    };

    dispatch(addtodo(newList));
    setTitleValue('');
    setDetailValue('');
  };

  const deleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    console.log('newList:', newList);
    dispatch(deletetodo(newList));
  };

  const doneHandler = (id) => {
    dispatch(switchtodo(id));
  };

  console.log(list);
  return (
    <StContainer>
      <header>
        <div>
          제목
          <input
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
        </div>

        <div>
          내용
          <input
            value={detailValue}
            onChange={(e) => {
              setDetailValue(e.target.value);
            }}
          />
        </div>
        <button onClick={addCard}>추가하기</button>
      </header>

      <section>
        <p>working</p>
        {list
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <Cards
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
                isDone={item.isDone}
              />
            );
          })}

        <p>done</p>
        {list
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <Cards
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
                isDone={item.isDone}
              />
            );
          })}
      </section>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px;

  header {
    background-color: red;
  }

  button {
    margin: 15px;
  }

  p {
    font-size: 40px;
    font-weight: 800;
  }
`;
