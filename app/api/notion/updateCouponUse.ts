'use server'

import { Client } from '@notionhq/client'

export async function updateCouponUse(pageId: string) {
  try {
    const notion = new Client({ auth: process.env.NOTION_KEY })
    await notion.pages.update({
      page_id: pageId,
      properties: {
        used: {
          checkbox: true,
        },
      },
    })
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null) {
      const castedError = error as { message: string }
      console.error('Error using coupons:', castedError.message)
      throw castedError
    }
    throw new Error('Unknown error occurred')
  }
}
