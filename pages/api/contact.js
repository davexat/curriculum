export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Message sent successfully' });
      } else {
        return res.status(500).json({ message: 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}