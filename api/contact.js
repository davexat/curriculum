import fetch from 'node-fetch';

export default async function handler(req, res) {
  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (req.method === 'POST') {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Form submitted successfully' });
      } else {
        res.status(500).json({ message: 'Error submitting the form' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing the request' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
