require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// 1) Registro de la Custom Card
app.post('/crm/v3/extensions/cards', (req, res) => {
  res.json({
    results: [{
      id: 'cotizador-saas',
      title: 'Calculadora de Cotización',
      objectTypes: ['DEAL'],
      fetch: {
        targetUrl: `${process.env.SERVER_URL}/card/data`,
        method: 'POST'
      }
    }]
  });
});

// 2) Datos de la Custom Card
app.post('/card/data', (req, res) => {
  const props = req.body.properties || {};
  const embedUrl =
    `https://josemdhz-rankmi.github.io/calculadora-hubspot/` +
    `?G23=${encodeURIComponent(props.G23 || '')}` +
    `&G24=${encodeURIComponent(props.G24 || '')}` +
    `&G25=${encodeURIComponent(props.G25 || '')}` +
    `&callback=callbackFunc`;

  res.json({
    results: [{
      type: 'iframe',
      url: embedUrl,
      height: 450
    }]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));
