---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.model.js
---
const { Schema, model } = require('mongoose')

/**
 * @typedef {Object} <%= h.inflection.camelize(name) %>
 * @property {string} name - Tên
 */

/**
 * @type {import('mongoose').Model<<%= h.inflection.camelize(name) %>>}
 */
const <%= h.inflection.camelize(name, true) %>Schema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
)

// <%= h.inflection.camelize(name, true) %>Schema.index({ name: "text" }, { weights: { name: 2 } });

module.exports.<%= h.inflection.camelize(name) %>Model = model('<%= h.inflection.camelize(name) %>', <%= h.inflection.camelize(name, true) %>Schema)
