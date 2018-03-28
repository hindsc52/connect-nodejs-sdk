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
var CatalogQuery = require('./CatalogQuery');




/**
 * The SearchCatalogObjectsRequest model module.
 * @module model/SearchCatalogObjectsRequest
 * @version 2.6.1
 */

/**
 * Constructs a new <code>SearchCatalogObjectsRequest</code>.
 * 
 * @alias module:model/SearchCatalogObjectsRequest
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>SearchCatalogObjectsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchCatalogObjectsRequest} obj Optional instance to populate.
 * @return {module:model/SearchCatalogObjectsRequest} The populated <code>SearchCatalogObjectsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('object_types')) {
      obj['object_types'] = ApiClient.convertToType(data['object_types'], ['String']);
    }
      if (data.hasOwnProperty('include_deleted_objects')) {
      obj['include_deleted_objects'] = ApiClient.convertToType(data['include_deleted_objects'], 'Boolean');
    }
      if (data.hasOwnProperty('include_related_objects')) {
      obj['include_related_objects'] = ApiClient.convertToType(data['include_related_objects'], 'Boolean');
    }
      if (data.hasOwnProperty('begin_time')) {
      obj['begin_time'] = ApiClient.convertToType(data['begin_time'], 'String');
    }
      if (data.hasOwnProperty('query')) {
      obj['query'] = CatalogQuery.constructFromObject(data['query']);
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
    }
  return obj;
}

/**
 * The pagination cursor returned in the previous response. Leave unset for an initial request. See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * The desired set of object types to appear in the search results. The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely `\"ITEM\"`, `\"ITEM_VARIATION\"`, `\"CATEGORY\"`, `\"DISCOUNT\"`, `\"TAX\"`, `\"MODIFIER\"`, or `\"MODIFIER_LIST\"`.
 * @member {Array.<module:model/SearchCatalogObjectsRequest.ObjectTypesEnum>} object_types
 */
exports.prototype['object_types'] = undefined;
/**
 * If `true`, deleted objects will be included in the results. Deleted objects will have their `is_deleted` field set to `true`.
 * @member {Boolean} include_deleted_objects
 */
exports.prototype['include_deleted_objects'] = undefined;
/**
 * If `true`, the response will include additional objects that are related to the requested object, as follows:  If a [CatalogItem](#type-catalogitem) is returned in the object field of the response, its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and [CatalogModifierList](#type-catalogmodifierlist)s will be included in the `related_objects` field of the response.  If a [CatalogItemVariation](#type-catalogitemvariation) is returned in the object field of the response, its parent [CatalogItem](#type-catalogitem) will be included in the `related_objects` field of the response.
 * @member {Boolean} include_related_objects
 */
exports.prototype['include_related_objects'] = undefined;
/**
 * Return objects modified after this [timestamp](#workingwithdates), in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\". The timestamp is exclusive - objects with a timestamp equal to `begin_time` will not be included in the response.
 * @member {String} begin_time
 */
exports.prototype['begin_time'] = undefined;
/**
 * A query to be used to filter or sort the results. If no query is specified, the entire catalog will be returned.
 * @member {module:model/CatalogQuery} query
 */
exports.prototype['query'] = undefined;
/**
 * A limit on the number of results to be returned in a single page. The limit is advisory - the implementation may return more or fewer results. If the supplied limit is negative, zero, or is higher than the maximum limit of 1,000, it will be ignored.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;


  /**
   * Allowed values for the <code>objectTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectTypesEnum = {
    /**
     * value: "ITEM"
     * @const
     */
    "ITEM": "ITEM",
    /**
     * value: "CATEGORY"
     * @const
     */
    "CATEGORY": "CATEGORY",
    /**
     * value: "ITEM_VARIATION"
     * @const
     */
    "ITEM_VARIATION": "ITEM_VARIATION",
    /**
     * value: "TAX"
     * @const
     */
    "TAX": "TAX",
    /**
     * value: "DISCOUNT"
     * @const
     */
    "DISCOUNT": "DISCOUNT",
    /**
     * value: "MODIFIER_LIST"
     * @const
     */
    "MODIFIER_LIST": "MODIFIER_LIST",
    /**
     * value: "MODIFIER"
     * @const
     */
    "MODIFIER": "MODIFIER"  };


module.exports = exports;



