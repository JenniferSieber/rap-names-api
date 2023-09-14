const express = require('express');
const app = express();
const PORT = 8000;

let rappers = {
  '21 savage': {
      'age': 28,
      'birthName': 'Shéyaa Bin Abraham-Joseph',
      'birthdate': '22 October 1992', 
      'birthLocation': 'London, England',
      'origin': 'Atlanta, Georgia',
      'genre': 'hip hop, trap, rap, horrorcore',
      'occupation': 'rapper, songwriter, record producer',
      'yearsActive': '2013-present',
      'labels': 'Epic, Slaughter Gang',
      'children': 3
  },
  'chance the rapper':{
      'age': 28,
      'birthName': 'Chancelor Jonathan Bennett',
      'birthdate': 'April 16, 1993', 
      'birthLocation': 'London, England',
      'origin': 'Chicago, Illinois',
      'genre': 'hip hop, alternative hip hop, r & b',
      'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
      'yearsActive': '2011-present',
      'labels': 'none',
      'children': 0
  },
  'unknown':{
      'age': 'unknown',
      'birthName': 'unknown',
      'birthdate': 'unknown', 
      'birthLocation': 'unknown',
      'origin': 'unknown',
      'genre': 'unknown',
      'occupation': 'unknown',
      'yearsActive': 'unknown',
      'labels': 'unknown',
      'children': 'unknown'
  }
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
});

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName].birthName)
  } else {
    res.json(rappers['unknown'])
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} port is working. Servers make the best Partners because they know how to Listen! Betta get the Catch!`)
});
