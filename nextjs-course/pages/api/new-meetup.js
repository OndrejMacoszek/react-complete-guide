//functions with server side code
//always run on server never exposed to client

// /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
