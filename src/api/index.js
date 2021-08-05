import axios from 'axios';
import { apiConfig } from './api-config';

export default axios.create({
  baseURL: apiConfig.baseURL,
});
