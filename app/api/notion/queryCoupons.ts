"use server";

import axios, { Axios } from "axios";
import { Condition } from "./queryCouponsCondition";

export interface NotionQueryResult {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  developer_survey: string;
  request_id: string;
}

export interface PageOrDatabase {}

export interface Result {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  image: Image;
  used: Used;
  expireAt: ExpireAt;
  name: Name;
}

export interface ExpireAt {
  id: string;
  type: string;
  date: DateClass;
}

export interface DateClass {
  start: Date;
  end: null;
  time_zone: null;
}

export interface Image {
  id: string;
  type: string;
  files: FileElement[];
}

export interface FileElement {
  name: string;
  type: string;
  file: FileFile;
}

export interface FileFile {
  url: string;
  expiry_time: Date;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Used {
  id: string;
  type: string;
  checkbox: boolean;
}

export async function queryCoupons(condition: Condition) {
  try {
    const client: Axios = axios.create({
      baseURL: `https://api.notion.com/v1/databases`,
      headers: {
        "Content-Type": "application/json",
        "Notion-Version": "2022-02-22",
        Authorization: `Bearer ${process.env.NOTION_KEY}`,
      },
      responseType: "json",
    });

    const body = condition;

    const response = await client.post<NotionQueryResult>(
      `/${process.env.COUPON_DB as string}/query`,
      body
    );

    return <NotionQueryResult>(<unknown>response.data);
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null) {
      const castedError = error as { message: string };
      console.error("Error retrieving coupons:", castedError.message);
      throw castedError;
    }
    throw new Error("Unknown error occurred");
  }
}
