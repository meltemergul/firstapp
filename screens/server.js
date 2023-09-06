const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Dosya yüklenmedi.');
    }

    const uploadedFile = req.files.uploadedFile;
    const destinationPath = __dirname + '/uploads/' + uploadedFile.name;

    uploadedFile.mv(destinationPath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Dosya yüklendi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});
