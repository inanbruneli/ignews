import {Client} from 'faunadb';

export const fauna = new Client({
  secret: 'fnAEocuFtoAAQDsp7OiHQ8DySirLt90XIkVoAdTZ',
  domain: "db.us.fauna.com",
})