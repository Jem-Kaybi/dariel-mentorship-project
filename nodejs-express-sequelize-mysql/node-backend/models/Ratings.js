module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Rating;
};