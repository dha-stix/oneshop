// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { defineOneEntry } from 'oneentry'

const {Pages} = defineOneEntry(process.env.PROJECT_URL!, process.env.PROJECT_TOKEN!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const request = await Pages.getPageByUrl("home", "en_US")
  res.status(200).json({ attributes: request.attributeValues })
}
