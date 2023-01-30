module.exports = (sequelize, Sequelize) => {
    const siswa = sequelize.define('siswa', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING
        },    
    }, { timestamps: false});
    return siswa;
};