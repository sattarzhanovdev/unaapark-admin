import axios from 'axios'

export const API = {
  get: () => axios.get('/cars.json'),
  postCar: data => axios.post('/cars.json', data),
  getCarWithID: id => axios.get(`/cars/${id}.json`),
  postCarWithID: (id, data) => axios.post(`/cars/${id}.json`, data),
  brone: (id, data) => axios.put(`/cars/${id}/isBroned.json`, data),
  getInfoAboutCar: id => axios.get(`/cars/${id}.json`),
  delete: id => axios.delete(`/cars/${id}.json`),
  edit: (id, data) => axios.put(`/cars/${id}.json`, data),
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
  getMessages: () => fetch('https://node-sber1-az1-2.jivosite.com/agent/2018888/message_ack', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  getMessageWithId: id => axios.get(`/message/${id}.json`),
  postMessage: (id, message) => fetch('https://node-sber1-az1-2.jivosite.com/agent/2018888/message_ack', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      title: message
    }
  })
}