export default async function handler(req, res) {
  try {
    const card = {
      results: [
        {
          objectTypes: ['DEAL'],
          title: 'Calculadora de Cotización',
          id: 'cotizador-saas',
          fetch: {
            targetUrl: 'https://calculadora-hubspot.vercel.app/api/card/data',
            method: 'POST'
          }
        }
      ]
    };
    res.status(200).json(card);
  } catch (error) {
    console.error('Error en handler de card/data:', error);
    res.status(500).send('Internal Server Error');
  }
}
