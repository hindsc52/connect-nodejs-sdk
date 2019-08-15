/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Error = require('./Error');
var Order = require('./Order');




/**
 * The UpdateOrderResponse model module.
 * @module model/UpdateOrderResponse
 */

/**
 * Constructs a new <code>UpdateOrderResponse</code>.
 * Defines the fields that are included in the response body of a request to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
 * @alias module:model/UpdateOrderResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>UpdateOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateOrderResponse} obj Optional instance to populate.
 * @return {module:model/UpdateOrderResponse} The populated <code>UpdateOrderResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order')) {
      obj['order'] = Order.constructFromObject(data['order']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The updated Order.
 * @member {module:model/Order} order
 */
exports.prototype['order'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;


