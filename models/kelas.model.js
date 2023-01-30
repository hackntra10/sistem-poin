module.exports = (sequelize, Sequelize)=> {
    const kelas = sequelize.define('kelas', {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
        },     
        nama_kelas: {
            type: Sequelize.STRING
        },
    }, { timestamps: false});
    return kelas;
}