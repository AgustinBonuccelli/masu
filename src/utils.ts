import axios, { AxiosResponse } from 'axios'
import { QueryParams } from './types'

/**
 * 
 * @param url {string}
 * @param params { QueryParams }
 * @returns { Promise<AxiosResponse> }
 */
export const fetch = async (url: string, params?: QueryParams): Promise<AxiosResponse> => {
  const options = {
    method: 'GET',
    url,
    params,
    headers: {}
  }
  return await axios.request(options)
}
