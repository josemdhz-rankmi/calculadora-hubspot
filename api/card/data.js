// api/card/data.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  const props = req.body.properties || {};
  const embedUrl =
    `https://josemdhz-rankmi.github.io/calculadora-hubspot/` +
    `?G23=${encodeURIComponent(props.G23 || '')}` +
    `&G24=${encodeURIComponent(props.G24 || '')}` +
    `&G25=${encodeURIComponent(props.G25 || '')}` +
    `&callback=callbackFunc`;

  res.json({
    results: [
      {
        type: 'iframe',
        url: embedUrl,
        height: 450
      }
    ]
  });
}
