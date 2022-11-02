import axios, { AxiosResponse } from 'axios'
import {ErrorStatus} from './types'
import router from '@/router';

export class AxiosMiddleware {
  static boot(): void {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    axios.defaults.timeout = 2000;
    
    axios.interceptors.response.use(function (response: AxiosResponse): AxiosResponse {
      return response;
    },
      function (error) {
        switch (error.response.status) {
          case ErrorStatus.Unauthorized:
            router.push('/login');
            throw new Error(ErrorStatus[401]);
          case ErrorStatus.Forbidden:
            throw new Error(ErrorStatus[403]);
          case ErrorStatus['Not Found']:
            throw new Error(error.response.data.message || ErrorStatus[404]);
          default:
            throw new Error(ErrorStatus[500]);
        }
      });
  }
}

