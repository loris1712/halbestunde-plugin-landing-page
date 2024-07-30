import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
    const email = process.env.PLUGIN_USER;
  const password = process.env.PLUGIN_PASS;

  axios.post(
    'https://omr.external.api.halbestunde.com/service-auth/auth/signin',
    { email, password },
  ).then(({data}) => {
    console.log({data})
    res.status(200).json(data);
  }).catch((e)=> {
    res.status(500).json({error: e})
  });
}