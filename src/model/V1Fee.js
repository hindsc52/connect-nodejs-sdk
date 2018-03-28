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




/**
 * The V1Fee model module.
 * @module model/V1Fee
 * @version 2.6.1
 */

/**
 * Constructs a new <code>V1Fee</code>.
 * @alias module:model/V1Fee
 * @class
 */
var exports = function() {
  var _this = this;










};

/**
 * Constructs a <code>V1Fee</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Fee} obj Optional instance to populate.
 * @return {module:model/V1Fee} The populated <code>V1Fee</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('rate')) {
      obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
    }
      if (data.hasOwnProperty('calculation_phase')) {
      obj['calculation_phase'] = ApiClient.convertToType(data['calculation_phase'], 'String');
    }
      if (data.hasOwnProperty('adjustment_type')) {
      obj['adjustment_type'] = ApiClient.convertToType(data['adjustment_type'], 'String');
    }
      if (data.hasOwnProperty('applies_to_custom_amounts')) {
      obj['applies_to_custom_amounts'] = ApiClient.convertToType(data['applies_to_custom_amounts'], 'Boolean');
    }
      if (data.hasOwnProperty('enabled')) {
      obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
    }
      if (data.hasOwnProperty('inclusion_type')) {
      obj['inclusion_type'] = ApiClient.convertToType(data['inclusion_type'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
    }
  return obj;
}

/**
 * The fee's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The fee's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
 * @member {String} rate
 */
exports.prototype['rate'] = undefined;
/**
 * Forthcoming
 * @member {module:model/V1Fee.CalculationPhaseEnum} calculation_phase
 */
exports.prototype['calculation_phase'] = undefined;
/**
 * The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees.
 * @member {module:model/V1Fee.AdjustmentTypeEnum} adjustment_type
 */
exports.prototype['adjustment_type'] = undefined;
/**
 * If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item.
 * @member {Boolean} applies_to_custom_amounts
 */
exports.prototype['applies_to_custom_amounts'] = undefined;
/**
 * If true, the fee is applied to all appropriate items. If false, the fee is not applied at all.
 * @member {Boolean} enabled
 */
exports.prototype['enabled'] = undefined;
/**
 * Whether the fee is ADDITIVE or INCLUSIVE.
 * @member {module:model/V1Fee.InclusionTypeEnum} inclusion_type
 */
exports.prototype['inclusion_type'] = undefined;
/**
 * In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants.
 * @member {module:model/V1Fee.TypeEnum} type
 */
exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>calculation_phase</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CalculationPhaseEnum = {
    /**
     * value: "FEE_SUBTOTAL_PHASE"
     * @const
     */
    "FEE_SUBTOTAL_PHASE": "FEE_SUBTOTAL_PHASE",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "FEE_TOTAL_PHASE"
     * @const
     */
    "FEE_TOTAL_PHASE": "FEE_TOTAL_PHASE"  };

  /**
   * Allowed values for the <code>adjustment_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AdjustmentTypeEnum = {
    /**
     * value: "TAX"
     * @const
     */
    "TAX": "TAX"  };

  /**
   * Allowed values for the <code>inclusion_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InclusionTypeEnum = {
    /**
     * value: "ADDITIVE"
     * @const
     */
    "ADDITIVE": "ADDITIVE",
    /**
     * value: "INCLUSIVE"
     * @const
     */
    "INCLUSIVE": "INCLUSIVE"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CA_GST"
     * @const
     */
    "CA_GST": "CA_GST",
    /**
     * value: "CA_HST"
     * @const
     */
    "CA_HST": "CA_HST",
    /**
     * value: "CA_PST"
     * @const
     */
    "CA_PST": "CA_PST",
    /**
     * value: "CA_QST"
     * @const
     */
    "CA_QST": "CA_QST",
    /**
     * value: "JP_CONSUMPTION_TAX"
     * @const
     */
    "JP_CONSUMPTION_TAX": "JP_CONSUMPTION_TAX",
    /**
     * value: "CA_PEI_PST"
     * @const
     */
    "CA_PEI_PST": "CA_PEI_PST",
    /**
     * value: "US_SALES_TAX"
     * @const
     */
    "US_SALES_TAX": "US_SALES_TAX",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


module.exports = exports;



