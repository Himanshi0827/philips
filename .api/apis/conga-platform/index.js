"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'conga-platform/v1 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    SDK.prototype.postApiDataV1CustomObjectsObjectname = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}', 'post', body, metadata);
    };
    /**
     * Returns a list of all records for the given custom object.
     *
     * @summary Get all custom object records
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1CustomObjectsObjectname = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}', 'get', metadata);
    };
    /**
     * Checks the record ID in the given custom object and fetches the record if it exists.
     *
     * @summary Get a custom object record using record ID
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameIdResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1CustomObjectsObjectnameId = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/{id}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1CustomObjectsObjectnameId = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/{id}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the record ID and removes it from the given custom object.
     *
     * @summary Delete a custom object record
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameIdResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1CustomObjectsObjectnameId = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/{id}', 'delete', metadata);
    };
    /**
     * Checks the externalId in the given custom object and fetches the record if it exists.
     *
     * @summary Get a custom object record using externalId
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1CustomObjectsObjectnameByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/by-externalId/{externalId}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1CustomObjectsObjectnameByExternalidExternalid = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/by-externalId/{externalId}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the external ID and removes it from the given custom
     * object.
     *
     * @summary Delete a custom object record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1CustomObjectsObjectnameByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/by-externalId/{externalId}', 'delete', metadata);
    };
    SDK.prototype.postApiDataV1CustomObjectsObjectnameBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/bulk', 'post', body, metadata);
    };
    SDK.prototype.putApiDataV1CustomObjectsObjectnameBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/bulk', 'put', body, metadata);
    };
    SDK.prototype.deleteApiDataV1CustomObjectsObjectnameBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/bulk', 'delete', body, metadata);
    };
    SDK.prototype.patchApiDataV1CustomObjectsObjectnameBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/bulk', 'patch', body, metadata);
    };
    SDK.prototype.putApiDataV1CustomObjectsObjectnameCriteriaBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/criteria/bulk', 'put', body, metadata);
    };
    SDK.prototype.deleteApiDataV1CustomObjectsObjectnameCriteriaBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/criteria/bulk', 'delete', body, metadata);
    };
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameSummaryResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1CustomObjectsObjectnameSummary = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/summary', 'get', metadata);
    };
    /**
     * Executes multiple query requests parallelly on custom objects and returns the responses
     * of each query in a list.
     *
     * @summary Execute multiple queries
     */
    SDK.prototype.postApiDataV1CustomObjectsQueryParallel = function (body) {
        return this.core.fetch('/api/data/v1/custom-objects/query/parallel', 'post', body);
    };
    SDK.prototype.postApiDataV1CustomObjectsQueryObjectname = function (body, metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/query/{objectName}', 'post', body, metadata);
    };
    /**
     * Retrieves all currencies.
     *
     * @summary Get all currency
     */
    SDK.prototype.getApiDataV1Currencies = function () {
        return this.core.fetch('/api/data/v1/currencies', 'get');
    };
    /**
     * Retrieves a list of all record types for the given custom object.
     *
     * @summary Get all record types for the custom object
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameRecordtypesResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1CustomObjectsObjectnameRecordtypes = function (metadata) {
        return this.core.fetch('/api/data/v1/custom-objects/{objectName}/recordtypes', 'get', metadata);
    };
    SDK.prototype.postApiDataV1ObjectsObjectnameRecordidShare = function (body, metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/share', 'post', body, metadata);
    };
    SDK.prototype.putApiDataV1ObjectsObjectnameRecordidAccessLevel = function (body, metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/access-level', 'put', body, metadata);
    };
    SDK.prototype.deleteApiDataV1ObjectsObjectnameRecordidUnShare = function (body, metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/un-share', 'delete', body, metadata);
    };
    /**
     * Gets sharing information about a record, including which users or user groups have
     * access to it and their corresponding permission levels, based on the object name and
     * record ID.
     *
     * @summary Get a record's sharing information
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidSharingInfoResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ObjectsObjectnameRecordidSharingInfo = function (metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/sharing-info', 'get', metadata);
    };
    /**
     * Gets the status of a record shared with a user group, such as `STARTED`, `IN PROGRESS`,
     * or `SUCCESS`, based on the object name, record ID, and tracking ID.
     *
     * @summary Get a record's sharing status
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatusResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatus = function (metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/{trackingId}/sharing-status', 'get', metadata);
    };
    /**
     * Retrieves the access details for a specific user on a given record, including permission
     * levels such as View, Edit, or Delete.
     *
     * @summary Get a user's access details for a shared record
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevelResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ObjectsObjectnameRecordidUseridAccessLevel = function (metadata) {
        return this.core.fetch('/api/data/v1/objects/{objectName}/{recordId}/{userId}/access-level', 'get', metadata);
    };
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new account record
     * @throws FetchError<403, types.PostApiDataV1AccountResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1AccountResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1Account = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account', 'post', body, metadata);
    };
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all account records
     * @throws FetchError<500, types.GetApiDataV1AccountResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1Account = function (metadata) {
        return this.core.fetch('/api/data/v1/Account', 'get', metadata);
    };
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a account record using account record ID
     * @throws FetchError<500, types.GetApiDataV1AccountIdResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1AccountId = function (metadata) {
        return this.core.fetch('/api/data/v1/Account/{id}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1AccountId = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/{id}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a account record
     * @throws FetchError<500, types.DeleteApiDataV1AccountIdResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1AccountId = function (metadata) {
        return this.core.fetch('/api/data/v1/Account/{id}', 'delete', metadata);
    };
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a account record using externalId
     * @throws FetchError<500, types.GetApiDataV1AccountByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1AccountByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Account/by-externalId/{externalId}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1AccountByExternalidExternalid = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/by-externalId/{externalId}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a account record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1AccountByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1AccountByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Account/by-externalId/{externalId}', 'delete', metadata);
    };
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple account records
     * @throws FetchError<500, types.PostApiDataV1AccountBulkResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1AccountBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/bulk', 'post', body, metadata);
    };
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple account records
     * @throws FetchError<500, types.PutApiDataV1AccountBulkResponse500> Internal Server Error
     */
    SDK.prototype.putApiDataV1AccountBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/bulk', 'put', body, metadata);
    };
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple account records
     * @throws FetchError<500, types.DeleteApiDataV1AccountBulkResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1AccountBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/bulk', 'delete', body, metadata);
    };
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple account records
     * @throws FetchError<500, types.PatchApiDataV1AccountBulkResponse500> Internal Server Error
     */
    SDK.prototype.patchApiDataV1AccountBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/bulk', 'patch', body, metadata);
    };
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object account record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1AccountSummaryResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1AccountSummary = function () {
        return this.core.fetch('/api/data/v1/Account/summary', 'get');
    };
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    SDK.prototype.postApiDataV1AccountQuery = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Account/query', 'post', body, metadata);
    };
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all account record types
     * @throws FetchError<500, types.GetApiDataV1AccountRecordtypesResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1AccountRecordtypes = function () {
        return this.core.fetch('/api/data/v1/Account/recordtypes', 'get');
    };
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new contact record
     * @throws FetchError<403, types.PostApiDataV1ContactResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1ContactResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1Contact = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact', 'post', body, metadata);
    };
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all contact records
     * @throws FetchError<500, types.GetApiDataV1ContactResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1Contact = function (metadata) {
        return this.core.fetch('/api/data/v1/Contact', 'get', metadata);
    };
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a contact record using contact record ID
     * @throws FetchError<500, types.GetApiDataV1ContactIdResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ContactId = function (metadata) {
        return this.core.fetch('/api/data/v1/Contact/{id}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1ContactId = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/{id}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a contact record
     * @throws FetchError<500, types.DeleteApiDataV1ContactIdResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1ContactId = function (metadata) {
        return this.core.fetch('/api/data/v1/Contact/{id}', 'delete', metadata);
    };
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a contact record using externalId
     * @throws FetchError<500, types.GetApiDataV1ContactByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ContactByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Contact/by-externalId/{externalId}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1ContactByExternalidExternalid = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/by-externalId/{externalId}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a contact record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1ContactByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1ContactByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Contact/by-externalId/{externalId}', 'delete', metadata);
    };
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple contact records
     * @throws FetchError<500, types.PostApiDataV1ContactBulkResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1ContactBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/bulk', 'post', body, metadata);
    };
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple contact records
     * @throws FetchError<500, types.PutApiDataV1ContactBulkResponse500> Internal Server Error
     */
    SDK.prototype.putApiDataV1ContactBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/bulk', 'put', body, metadata);
    };
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple contact records
     * @throws FetchError<500, types.DeleteApiDataV1ContactBulkResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1ContactBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/bulk', 'delete', body, metadata);
    };
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple contact records
     * @throws FetchError<500, types.PatchApiDataV1ContactBulkResponse500> Internal Server Error
     */
    SDK.prototype.patchApiDataV1ContactBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/bulk', 'patch', body, metadata);
    };
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object contact record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1ContactSummaryResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ContactSummary = function () {
        return this.core.fetch('/api/data/v1/Contact/summary', 'get');
    };
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    SDK.prototype.postApiDataV1ContactQuery = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Contact/query', 'post', body, metadata);
    };
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all contact record types
     * @throws FetchError<500, types.GetApiDataV1ContactRecordtypesResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1ContactRecordtypes = function () {
        return this.core.fetch('/api/data/v1/Contact/recordtypes', 'get');
    };
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new opportunity record
     * @throws FetchError<403, types.PostApiDataV1OpportunityResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1OpportunityResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1Opportunity = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity', 'post', body, metadata);
    };
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all opportunity records
     * @throws FetchError<500, types.GetApiDataV1OpportunityResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1Opportunity = function (metadata) {
        return this.core.fetch('/api/data/v1/Opportunity', 'get', metadata);
    };
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a opportunity record using opportunity record ID
     * @throws FetchError<500, types.GetApiDataV1OpportunityIdResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1OpportunityId = function (metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/{id}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1OpportunityId = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/{id}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a opportunity record
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityIdResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1OpportunityId = function (metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/{id}', 'delete', metadata);
    };
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a opportunity record using externalId
     * @throws FetchError<500, types.GetApiDataV1OpportunityByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1OpportunityByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/by-externalId/{externalId}', 'get', metadata);
    };
    SDK.prototype.putApiDataV1OpportunityByExternalidExternalid = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/by-externalId/{externalId}', 'put', body, metadata);
    };
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a opportunity record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityByExternalidExternalidResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1OpportunityByExternalidExternalid = function (metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/by-externalId/{externalId}', 'delete', metadata);
    };
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple opportunity records
     * @throws FetchError<500, types.PostApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    SDK.prototype.postApiDataV1OpportunityBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/bulk', 'post', body, metadata);
    };
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple opportunity records
     * @throws FetchError<500, types.PutApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    SDK.prototype.putApiDataV1OpportunityBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/bulk', 'put', body, metadata);
    };
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple opportunity records
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    SDK.prototype.deleteApiDataV1OpportunityBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/bulk', 'delete', body, metadata);
    };
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple opportunity records
     * @throws FetchError<500, types.PatchApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    SDK.prototype.patchApiDataV1OpportunityBulk = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/bulk', 'patch', body, metadata);
    };
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object opportunity record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1OpportunitySummaryResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1OpportunitySummary = function () {
        return this.core.fetch('/api/data/v1/Opportunity/summary', 'get');
    };
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    SDK.prototype.postApiDataV1OpportunityQuery = function (body, metadata) {
        return this.core.fetch('/api/data/v1/Opportunity/query', 'post', body, metadata);
    };
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all opportunity record types
     * @throws FetchError<500, types.GetApiDataV1OpportunityRecordtypesResponse500> Internal Server Error
     */
    SDK.prototype.getApiDataV1OpportunityRecordtypes = function () {
        return this.core.fetch('/api/data/v1/Opportunity/recordtypes', 'get');
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
