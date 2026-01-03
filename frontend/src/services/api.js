import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getContacts = (search = '') => 
  api.get(`/contacts${search ? `?search=${search}` : ''}`);

export const getContact = (id) => 
  api.get(`/contacts/${id}`);

export const createContact = (data) => 
  api.post('/contacts', data);

export const updateContact = (id, data) => 
  api.put(`/contacts/${id}`, data);

export const deleteContact = (id) => 
  api.delete(`/contacts/${id}`);
