import { useSelector, useDispatch } from "react-redux";
import {removeService, changeServiceField} from '../actions/actionCreators'

const ServiceList = ({ setEditMode }) => {
  const items = useSelector((state) => state.ServiceList.serviceList
    .filter(item => item.name.toLowerCase().includes(state.ServiceFilter.toLowerCase())));
    
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeService(id))
  }

  const handleEdit = (item) => {
    const {id, name, price} = item;
    setEditMode(true)

    dispatch(changeServiceField('id', id))
    dispatch(changeServiceField('name', name))
    dispatch(changeServiceField('price', price))
  }


  return (
    <ul>
      {items
      .map(item => {
        return (
          <li key={item.id.toString()}>
            <div className="name">{item.name}</div>
            <div>{item.price}</div>
            <button
              onClick={() => handleEdit(item)}
            >Редактировать</button>
            <button
              onClick={() => handleRemove(item.id)}
            >Удалить</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ServiceList;