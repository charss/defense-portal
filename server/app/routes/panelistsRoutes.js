const panelistsController = require('../controllers').panelists;

module.exports = app => {
  app.get( "/panelists/", panelistsController.index);
  app.get( "/panelists/:id", panelistsController.show);
}