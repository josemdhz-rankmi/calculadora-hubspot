// api/crm/v3/extensions/cards.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  // Devuelve la definición de tu Custom Card
  res.json({
    results: [
      {
        id: 'cotizador-saas',
        title: 'Calculadora de Cotización',
        objectTypes: ['DEAL'],
        fetch: {
          targetUrl: `${process.env.SERVER_URL}/api/card/data`,
          method: 'POST'
        }
      }
    ]
  });
}
