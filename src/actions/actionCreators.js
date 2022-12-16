import { 
  ADD_SERVICE, 
  REMOVE_SERVICE, 
  EDIT_SERVICE, 
  FILTER_SERVICE, 
  CHANGE_SERVICE_FIELD,
} from './actionTypes'

export function addService (name, price) {
  return {type: ADD_SERVICE, payload: {name, price}}
}

export function removeService (id) {
  return {type: REMOVE_SERVICE, payload: {id}} 
}

export function editService (editId, editName, editPrice) {
  return {type: EDIT_SERVICE, payload: {editId, editName, editPrice}} 
}

export function filterService (filter) {
  return {type: FILTER_SERVICE, payload: {filter}} 
}

export function changeServiceField (name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}} 
}


