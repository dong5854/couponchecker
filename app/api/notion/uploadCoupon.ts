'use server'
import { Client } from '@notionhq/client'

export interface Properties {
  name: string
  imageUrl: string
  used: boolean
  expireAt: Date
}

export async function uploadCoupon(properties: Properties) {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const response = await notion.pages.create({
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
  })

  console.log(response)
}
