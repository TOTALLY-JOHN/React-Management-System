const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Andrew Brian',
            'birthday': '971229',
            'gender': 'Male',
            'job': 'Student'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'David Raul',
            'birthday': '921005',
            'gender': 'Male',
            'job': 'Student'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Esther Anna',
            'birthday': '980421',
            'gender': 'Female',
            'job': 'Student'
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
