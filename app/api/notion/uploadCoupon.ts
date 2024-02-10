'use server'

import axios, { Axios } from 'axios'

export interface Properties {
  name: string
  imageUrl: string
  used: boolean
  expireAt: Date
}

export async function uploadCoupon(properties: Properties) {
  try {
    const client: Axios = axios.create({
      baseURL: `https://api.notion.com/v1`,
      headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
        Authorization: `Bearer ${process.env.NOTION_KEY}`,
      },
      responseType: 'json',
    })

    const body = {
      parent: {
        type: 'database_id',
        database_id: process.env.COUPON_DB as string,
      },
      properties: {
        name: {
          title: [
            {
              text: {
                content: properties.name,
              },
            },
          ],
        },
        expireAt: {
          date: {
            start: properties.expireAt.toISOString().substring(0, 10),
          },
        },
        imageUrl: {
          rich_text: [
            {
              text: {
                content: properties.imageUrl,
              },
            },
          ],
        },
        used: {
          checkbox: properties.used,
        },
      },
    }

    const response = await client.post(`/pages`, body)
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null) {
      const castedError = error as { message: string }
      console.error('Error retrieving coupons:', castedError.message)
      throw castedError
    }
    throw new Error('Unknown error occurred')
  }
}
