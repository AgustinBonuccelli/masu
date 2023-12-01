import { ProductEntry, ProductsEntry, QueryParams } from '../types'
import { fetch } from '../utils'
import dotenv from 'dotenv'
dotenv.config()


/**
 * ProductEntry
 * @typedef {object} ProductEntry
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} discountPercentage
 * @property {number} rating
 * @property {number} prop1
 * @property {number} stock
 * @property {string} brand
 * @property {string} category
 * @property {thumbnail} thumbnail
 * @property {string[]} images
*/

/**
 * ProductsEntry
 * @typedef {object} ProductsEntry
 * @property {ProductEntry} products
 * @property {number} total
 * @property {number} skip
 * @property {number} limit
*/

/**
 * QueryParams
 * @typedef {object} QueryParams
 * @property {number} limit?
 * @property {number} skip?
 * @property {string} select?
*/

/**
 * findById
 * @async
 * @param {number} id - product id
 * @returns {Promise<productEntry>} product object
*/
export const findById = async (id: number): Promise<ProductEntry> => {
  const url = `${process.env.URL}/products/${id}`
  return await fetch(url).then(function ({ data }: { data: ProductEntry }) {
    return data
  })
    .catch(function (error: any) {
      return error
    })
}

/**
 * getEntries
 * @async
 * @param {number} limit - using for filter the results
 * @returns {Promise<productsEntry>} product object
*/
export const getEntries = async (limit?: number, skip?: number, select?: string): Promise<ProductsEntry> => {
  const url = `${process.env.URL}/products`
  const params: QueryParams = {
    limit,
    skip,
    select
  }
  return await fetch(url, params).then(function ({ data }: { data: ProductsEntry }) {
    return data
  }).catch(function (error: any) {
    throw error
  })
}
