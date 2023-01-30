const { Sequelize} = require('sequelize')
const { env } = process;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    operatorsAliases:0,

    pool: {
        max:3,
        min: 1,
        acquire: env.DB_ACQUIRE_POOL,
        idle: env.DB_IDLE_POOL
    },
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
});

const siswa = require('./siswa.model')(sequelize, Sequelize);
const kelas = require('./kelas.model')(sequelize, Sequelize);
const pelanggaran = require('./pelanggaran.model')(sequelize, Sequelize);

const pelanggaranSiswa = sequelize.define('pelanggaran_siswa', {}, {
    timestamps: false,
  })
  
  kelas.hasMany(siswa, {
    as: 'siswa',
    foreignKey: 'id_kelas'
  })
  siswa.belongsTo(kelas, {
    as: 'siswa',
    foreignKey: 'id_kelas'
  })
  //
  siswa.belongsToMany(pelanggaran, {
    through: pelanggaranSiswa,
    foreignKey: 'id_siswa'
  })
  pelanggaran.belongsToMany(siswa, {
    through: pelanggaranSiswa,
    foreignKey: 'id_pelanggaran'
  })
  //

module.exports = {
    Sequelize,
    sequelize,
    siswa,
    kelas,
    pelanggaran
}