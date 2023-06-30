import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const filePath = path.join(process.cwd(), 'project_files', 'passcodes.txt')
  const fileContents = await fs.readFile(filePath, 'utf8')
  console.log(fileContents)
  let b = fileContents.trim().replace(/\n/g, ',').split(',')

  // const jsonObject = {};
  // for (let i = 0; i < b.length; i += 2) {
  //   const key = b[i].trim();
  //   const value = b[i + 1].trim();
  //   jsonObject[key] = value;
  // }

// const jsonString = JSON.stringify(jsonObject);

  console.log(b)
  const data = await req.json()
  return new Response(JSON.stringify({ status: 'ok' }), { status: 200 })
}