import { STATUS_CODES } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const get = (req: NextApiRequest, res: NextApiResponse) => {
  try {

  } catch(e: any) {
    return res.status(e.statusCode).send({
      statusCode: e.statusCode,
      message: e.message
    })
  }
}

export default get;
