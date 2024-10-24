---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.repo.js
---
const { <%= h.inflection.camelize(name) %>Model } = require('./<%= h.inflection.camelize(name, true) %>.model')

class <%= h.inflection.camelize(name) %>Repo {
  constructor(model) {
    this.model = model
  }
}

const <%= h.inflection.camelize(name, true) %>Repo = new <%= h.inflection.camelize(name) %>Repo(<%= h.inflection.camelize(name) %>Model)

module.exports = <%= h.inflection.camelize(name, true) %>Repo
