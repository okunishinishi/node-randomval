/**
 * Random boolean value.
 * @function randomDate
 * @param {Date} [min=_now()] - Min date.
 * @param {Date} [max=_aYearLater(min)] -  Max date.
 * @returns {date} - Random date.
 */

'use strict'

const randomInt = require('./random_int')

/** @lends randomDate */
function randomDate (min, max) {
  if (typeof min === 'undefined') {
    min = _now()
  }
  if (typeof max === 'undefined') {
    max = _aYearLater(min)
  }
  min = new Date(min).getTime()
  max = new Date(max).getTime()

  return new Date(randomInt(min, max))
}

module.exports = randomDate;

function _now () {
  return new Date()
}
function _aYearLater (date) {
  var base = new Date(date).getTime()
  return new Date(base + 365 * 24 * 60 * 60 * 1000)
}