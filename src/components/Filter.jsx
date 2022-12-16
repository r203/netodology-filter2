import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { filterService } from '../actions/actionCreators'


const Filter = () => {
  const [form, setForm] = useState({
    filter: ''
  });
  const dispatch = useDispatch()

  const handleFormChange = async (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  useEffect(() => {
      dispatch(filterService(form.filter));
  }, [form, dispatch])

  return (
    <form>
      <div>
        <label htmlFor="filter">Фильтр</label>
        <input type="text" name="filter" value={form.filter} onChange={handleFormChange} />
      </div>
    </form>
  )
}

export default Filter;