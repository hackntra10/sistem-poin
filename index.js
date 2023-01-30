require('dotenv').config();
const express = require('express')
const cors = require('cors')
const db = require('./models')
const kelas = require('./routes/kelas.route')
const siswa = require('./routes/siswa.route')
const pelanggaran = require('./routes/pelanggaran.route')
const app = express();

app.get('/', (_, res)=> {
    res.status(200).json({
        status: true,
        message: 'Welcome'
    })
})

app.use(express.json());
app.use(cors())

db.sequelize.sync(); //

app.use('/kelas', kelas)
app.use('/siswa', siswa)
app.use('/pelanggaran', pelanggaran)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});