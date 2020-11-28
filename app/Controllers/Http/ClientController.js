'use strict'

const ClientModel = use('App/Models/Client')

class ClientController {
  async index () {
    const clientData = await ClientModel.all()
    return { status: 200, data: clientData}
  }
  async show ({ request }) {
    const { id } = request.params;
    const clientData = await ClientModel.find
    return { status: 200, data: clientData}
  }
  async store ({ request }) {
    const { username, password,email } = request.body
    const clientData = await ClientModel.create({username,password,email})
    return { status: 200, data: clientData}
  }
  async login({request, auth}) {
    const { username, password } = request.body
      try {
        if (await auth.attempt(username, password)) {
          let username = await ClientModel.find({username})
          let accessToken = await auth.generate(username)
          return ({status:200, data: username, token: accessToken})
        }
      }
      catch (err) {
        return ({message: 'Failed'})
    }
  }
}

module.exports = ClientController
