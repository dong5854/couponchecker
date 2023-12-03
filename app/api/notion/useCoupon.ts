'use server'

import { Client } from "@notionhq/client";

export async function useCoupon(pageId : string) {
  try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "used": {
          "checkbox": true
        }
      }
    });
    console.log(response);
  }  catch (error: unknown) {
      if (typeof error === 'object' && error !== null) {
        const castedError = error as { message: string };
        console.error("Error using coupons:", castedError.message);
        throw castedError;
    }
    throw new Error("Unknown error occurred");
  }
}