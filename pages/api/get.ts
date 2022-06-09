import { STATUS_CODES } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/database";
import jwt from 'jsonwebtoken'
import utils from "../../utils/utils";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { type } = req.query
    if (type === "panel") {
      const { token } = req.cookies
      const verify = jwt.verify(token, utils.getSecret()) as any
      const [user] = await db.select("*").from("account").where({ id: verify.id })
      if (user) {
        const [arduino] = await db.select("*").from("arduino").where({ arduino_id: 1 }).orderBy("count_id", "desc").limit(1)
        const Items = await db.select('*').from('panel')
        return res.status(200).send({
          statusCode: 200,
          message: '정상적으로 처리되었습니다.',
          panelItems: Items,
          arduino,
        })
      } else throw({
        statusCode: 400,
        message: '로그인을 해주세요.'
      })

    } else {
      throw({
        statusCode: 400,
        message: '잘못된 요청 입니다.'
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
