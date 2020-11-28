'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistsSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.increments("playlist_id")
      table.integer("client_id").unsigned()
      table.integer("songs_id").notNullable()
      table.timestamps()

      table.foreign('client_id')
      .references('clients.client_id')
      .onDelete('CASCADE') // ON DELETE CASCADE
      .onUpdate('CASCADE') // ON UPDATE CASCADE
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistsSchema
