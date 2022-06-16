import db from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getArduinoValue(req: NextApiRequest, res: NextApiResponse)  {
  const sql = 'SELECT * FROM dht11'
  const [values] = await db.raw(sql)
  console.log(values)
  return res.send({Success: true, values})
}