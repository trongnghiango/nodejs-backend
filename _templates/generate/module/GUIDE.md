# Huong dan tao ra module 1 cach tu dong

```sh
hygen generate module <ten_module>
```

```ejs
---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.controller.js
---
const <%= h.inflection.camelize(name, true) %>Service = require('./<%= h.inflection.camelize(name, true) %>.service')

class <%= h.inflection.camelize(name) %>Controller {
  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  async get<%= h.inflection.camelize(name) %>(req, res) {
    return await <%= h.inflection.camelize(name, true) %>Service.find()
  }

  /**
   *
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns
   */
  async get<%= h.inflection.camelize(name) %>(req, res) {
    return await <%= h.inflection.camelize(name, true) %>Service.findOne(req.params.id)
  }
}



module.exports = new <%= h.inflection.camelize(name) %>Controller()
```
