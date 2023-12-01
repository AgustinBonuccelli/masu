import { ProductsEntry, QueryParams } from '../types'
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
 * ProductEntry
 * @typedef {object} ProductsEntry
 * @property {ProductEntry} products
 * @property {string} total
 * @property {string} skip
 * @property {number} limit
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
 * getEntries
 * @async
 * @param {number} limit - using for filter the results
 * @returns {Promise<productEntry>} product object
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
