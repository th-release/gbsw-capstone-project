import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/database";
import utils from "../../utils/utils";
import jwt from 'jsonwebtoken'
const get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { type } = req.query
    if (type === 'login') {
      const { id, pw } = req.body
      const [user] = await db.select('*').from('users').where({ id })
      const [arduino] = await db.select('*').from('arduino').where({ arduino_id: 1 }).orderBy('count_id', 'desc').limit(1)
      if (user) {
        if (user.pw === utils.hash(pw + user.salt)) {
          res.status(200).send({
            statusCode: 200,
            message: '정상적으로 처리되었습니다.',
            arduino,
            token: jwt.sign({ id: user.id }, utils.getSecret(), { expiresIn: '24h' })
          })
        } else throw({
          statusCode: 400,
          message: '아이디 혹은 비밀번호를 확인해주세요.'
        })
      } else throw ({
        statusCode: 400,
        message: '아이디 혹은 비밀번호를 확인해주세요.'
      })

    } else {
      throw({
        statusCode: 400,
        message: '잘못된 요청 입니다.'
      })
    }
  } catch(e: any) {
    return res.status(e.statusCode).send({
      statusCode: e.statusCode,
      message: e.message
    })
  }
}

export default get;
