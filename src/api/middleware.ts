import axios, { AxiosResponse } from 'axios'
import {ErrorStatus} from './types'

export class AxiosMiddleware {
  static boot(): void {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    axios.defaults.timeout = 2000;
    
    axios.interceptors.response.use(function (response: AxiosResponse): AxiosResponse {
      return response;
    },
      function (error) {
        switch (error.response.status) {
          case ErrorStatus.Forbidden:
            throw new Error(ErrorStatus[403]);
          case ErrorStatus['Not Found']:
            throw new Error(ErrorStatus[404]);
          default:
            throw new Error(ErrorStatus[500]);
        }
      });
  }
}

