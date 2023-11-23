import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
// import { deletetodo } from 'redux/modules/todos';

const Detail = () => {
  // const list = useSelector((state) => {
  //   return state.todos;
  // });

  const dispatch = useDispatch();

  const { id } = useParams();

  // const filter = list.filter((item) => {
  //   console.log(filter);
  //   return item.id === id;
  // });

  const navigate = useNavigate();

  return (
    <div>
      {/* {filter.map((item) => {
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Detail;
