// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

const connect = async () =>
    await notion.databases.query({ database_id: databaseId });

export default connect;
