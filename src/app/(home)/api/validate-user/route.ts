export async function POST(req: Request) {
    


    
    
    const data = await req.json()
    if (data.userchoice == 'admin') {
      return new Response(JSON.stringify({ choice: 'admin' }), { status: 200 })
    } else if (data.userchoice == 'reserve') {
        return new Response(JSON.stringify({ choice: 'reserve' }), { status: 200 })
    }
    return new Response(JSON.stringify({ status: 'ok' }), { status: 200 })
  }