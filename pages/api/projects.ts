import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'projects.json');
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);
    
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
