'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  static get primaryKey() {
    return "playlist_id";
  }
  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
  playlists() {
    return this.belongsToMany("App/Models/Clients");
  }

}

module.exports = Client
