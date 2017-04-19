// Global model loader
// Receives a connected Sequelize instace
module.exports = (sequelize) => {

  let models = {
    Product: require('./product')(sequelize)
    // Other models go here
  }

  models.syncAll = async (options) => {
    for (let key in models) {
      if (models[key].sync) {
        await models[key].sync(options)
      }
    }
  }

  return models
}
