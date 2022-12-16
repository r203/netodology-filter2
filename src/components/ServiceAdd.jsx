import { useSelector, useDispatch } from "react-redux";
import {addService, editService, changeServiceField} from '../actions/actionCreators'

const ServiceAdd = ({editMode, setEditMode}) => {
  const item = useSelector((state) => state.ServiceAdd);
  const dispatch = useDispatch()

  const handleChange = (event) => { 
    const { name, value } = event.target 
    dispatch(changeServiceField(name, value))
  };
  
  const handleSubmit = (event) => { 
    event.preventDefault() 
    if(editMode) {
      const {id, name, price} = item;
      dispatch(editService (id, name, price))
      dispatch(changeServiceField('name', ''))
      dispatch(changeServiceField('price', ''))
      setEditMode(false);
      return
    }

    dispatch(addService(item.name, item.price))
    dispatch(changeServiceField('name', ''))
    dispatch(changeServiceField('price', ''))
  };

  const handleCancel = () => { 
    setEditMode(false);
    dispatch(changeServiceField('name', ''))
    dispatch(changeServiceField('price', ''))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя</label>
        <input type="text" name="name" value={item.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="price">Цена</label>
        <input type="text" name="price" value={item.price}  onChange={handleChange}/>
      </div>
      <button type="submit">Save</button>
      {editMode && 
        <button 
          onClick={() => {handleCancel()}}
          type="button">Cancel</button>}
    </form>
  )
}

export default ServiceAdd;