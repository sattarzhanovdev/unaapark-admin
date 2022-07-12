import axios from 'axios'

export const API = {
  get: () => axios.get('/cars.json'),
  getInfoAboutCar: id => axios.get(`/cars/${id}.json`),
  delete: id => axios.delete(`/cars/${id}.json`),
  getUsers: () => axios.get('/users.json'),
  deleteUser: id => axios.get(`/users/${id}.json`),
  getOrders: () => axios.get(`/orders.json`),
  getOrdersById: id => axios.get(`/orders/${id}.json`),
  postOrder: data => axios.post('/orders.json', data),
  deleteOrder: id => axios.delete(`/orders/${id}.json`),
  getSuccessOrders: () => axios.get(`/successOrders.json`),
  postSuccessOrder: data => axios.post('/successOrders.json', data),
  getCancelledOrders: () => axios.get(`/cancelledOrders.json`),
  postCancelledOrders: data => axios.post('/cancelledOrders.json', data),
}