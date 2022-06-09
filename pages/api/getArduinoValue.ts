import { createDBConnection } from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
const db = createDBConnection()

export default async function getArduinoValue(req: NextApiRequest, res: NextApiResponse)  {
  const sql = 'SELECT * FROM dht11'
  const [values] = await db.raw(sql)
  console.log(values)
  return res.send({Success: true, values})
}