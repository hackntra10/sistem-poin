module.exports = (sequelize, Sequelize) => {
    const pelanggaran = sequelize.define('pelanggaran', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jenis: {
            type: Sequelize.STRING
        },
        poin: {
            type: Sequelize.INTEGER
        },
    }, { timestamps: false});
    return pelanggaran
}