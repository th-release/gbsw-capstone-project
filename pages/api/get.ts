import { STATUS_CODES } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/database";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { type } = req.query
    if (type === "panel") {
      const Items = await db.select('*').from('panel')
      res.status(200).send({
        statusCode: 200,
        message: '정상적으로 처리되었습니다.',
        panelItems: Items
      })
    } else {
      throw({
        statusCode: 400,
        message: ''
      })
    }
  } catch(e: any) {
    return res.status(200).send({
      statusCode: e.statusCode,
      message: e.message
    })
  }
}

export default get;
