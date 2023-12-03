'use server'

import { Client } from "@notionhq/client";

export async function retrieveCoupons() {
    try {
        const notion = new Client({ auth: process.env.NOTION_KEY });
        const response = await notion.databases.retrieve({ database_id: process.env.COUPON_DB as string });
        return response;
    } catch (error: unknown) {
        if (typeof error === 'object' && error !== null) {
            const castedError = error as { message: string };
            console.error("Error retrieving coupons:", castedError.message);
            throw castedError;
        }
        throw new Error("Unknown error occurred");
    }
}