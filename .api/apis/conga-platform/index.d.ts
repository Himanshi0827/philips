import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Validates the record details and inserts if it does not exist in the given custom
     * object.
     *
     * @summary Insert a new custom object record
     * @throws FetchError<403, types.PostApiDataV1CustomObjectsObjectnameResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1CustomObjectsObjectnameResponse500> Internal Server Error
     */
    postApiDataV1CustomObjectsObjectname(body: types.PostApiDataV1CustomObjectsObjectnameBodyParam, metadata: types.PostApiDataV1CustomObjectsObjectnameMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1CustomObjectsObjectnameResponse201>>;
    postApiDataV1CustomObjectsObjectname(metadata: types.PostApiDataV1CustomObjectsObjectnameMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1CustomObjectsObjectnameResponse201>>;
    /**
     * Returns a list of all records for the given custom object.
     *
     * @summary Get all custom object records
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameResponse500> Internal Server Error
     */
    getApiDataV1CustomObjectsObjectname(metadata: types.GetApiDataV1CustomObjectsObjectnameMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1CustomObjectsObjectnameResponse200>>;
    /**
     * Checks the record ID in the given custom object and fetches the record if it exists.
     *
     * @summary Get a custom object record using record ID
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameIdResponse500> Internal Server Error
     */
    getApiDataV1CustomObjectsObjectnameId(metadata: types.GetApiDataV1CustomObjectsObjectnameIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the custom object, record ID, and the details of the record
     * to update.
     *
     * @summary Update a custom object record
     * @throws FetchError<500, types.PutApiDataV1CustomObjectsObjectnameIdResponse500> Internal Server Error
     */
    putApiDataV1CustomObjectsObjectnameId(body: types.PutApiDataV1CustomObjectsObjectnameIdBodyParam, metadata: types.PutApiDataV1CustomObjectsObjectnameIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1CustomObjectsObjectnameIdResponse200>>;
    putApiDataV1CustomObjectsObjectnameId(metadata: types.PutApiDataV1CustomObjectsObjectnameIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1CustomObjectsObjectnameIdResponse200>>;
    /**
     * Validates the record based on the record ID and removes it from the given custom object.
     *
     * @summary Delete a custom object record
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameIdResponse500> Internal Server Error
     */
    deleteApiDataV1CustomObjectsObjectnameId(metadata: types.DeleteApiDataV1CustomObjectsObjectnameIdMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1CustomObjectsObjectnameIdResponse200>>;
    /**
     * Checks the externalId in the given custom object and fetches the record if it exists.
     *
     * @summary Get a custom object record using externalId
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse500> Internal Server Error
     */
    getApiDataV1CustomObjectsObjectnameByExternalidExternalid(metadata: types.GetApiDataV1CustomObjectsObjectnameByExternalidExternalidMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, externalId, and the details of the record that
     * you want to update.
     *
     * @summary Update a record by externalId
     * @throws FetchError<500, types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse500> Internal Server Error
     */
    putApiDataV1CustomObjectsObjectnameByExternalidExternalid(body: types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidBodyParam, metadata: types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse200>>;
    putApiDataV1CustomObjectsObjectnameByExternalidExternalid(metadata: types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse200>>;
    /**
     * Validates the record based on the external ID and removes it from the given custom
     * object.
     *
     * @summary Delete a custom object record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse500> Internal Server Error
     */
    deleteApiDataV1CustomObjectsObjectnameByExternalidExternalid(metadata: types.DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalidResponse200>>;
    /**
     * Validates custom object record details and creates multiple records in the given custom
     * object.
     *
     * @summary Insert custom object records
     * @throws FetchError<500, types.PostApiDataV1CustomObjectsObjectnameBulkResponse500> Internal Server Error
     */
    postApiDataV1CustomObjectsObjectnameBulk(body: types.PostApiDataV1CustomObjectsObjectnameBulkBodyParam, metadata: types.PostApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1CustomObjectsObjectnameBulkResponse201>>;
    postApiDataV1CustomObjectsObjectnameBulk(metadata: types.PostApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1CustomObjectsObjectnameBulkResponse201>>;
    /**
     * Validates the custom object record details and updates multiple records in the given
     * custom object.
     *
     * @summary Update custom object records
     * @throws FetchError<500, types.PutApiDataV1CustomObjectsObjectnameBulkResponse500> Internal Server Error
     */
    putApiDataV1CustomObjectsObjectnameBulk(body: types.PutApiDataV1CustomObjectsObjectnameBulkBodyParam, metadata: types.PutApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    putApiDataV1CustomObjectsObjectnameBulk(metadata: types.PutApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes multiple records from the given custom object.
     *
     * @summary Delete custom object records
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameBulkResponse500> Internal Server Error
     */
    deleteApiDataV1CustomObjectsObjectnameBulk(body: types.DeleteApiDataV1CustomObjectsObjectnameBulkBodyParam, metadata: types.DeleteApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1CustomObjectsObjectnameBulkResponse200>>;
    deleteApiDataV1CustomObjectsObjectnameBulk(metadata: types.DeleteApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1CustomObjectsObjectnameBulkResponse200>>;
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert custom object records
     * @throws FetchError<500, types.PatchApiDataV1CustomObjectsObjectnameBulkResponse500> Internal Server Error
     */
    patchApiDataV1CustomObjectsObjectnameBulk(body: types.PatchApiDataV1CustomObjectsObjectnameBulkBodyParam, metadata: types.PatchApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    patchApiDataV1CustomObjectsObjectnameBulk(metadata: types.PatchApiDataV1CustomObjectsObjectnameBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Validates the custom object record details and updates multiple records that satisfy the
     * given criteria.
     *
     * @summary Update custom object records as per the criteria
     * @throws FetchError<500, types.PutApiDataV1CustomObjectsObjectnameCriteriaBulkResponse500> Internal Server Error
     */
    putApiDataV1CustomObjectsObjectnameCriteriaBulk(body: types.PutApiDataV1CustomObjectsObjectnameCriteriaBulkBodyParam, metadata: types.PutApiDataV1CustomObjectsObjectnameCriteriaBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    putApiDataV1CustomObjectsObjectnameCriteriaBulk(metadata: types.PutApiDataV1CustomObjectsObjectnameCriteriaBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes multiple records that satisfy the criteria in the custom object.
     *
     * @summary Delete custom object records as per the criteria
     * @throws FetchError<500, types.DeleteApiDataV1CustomObjectsObjectnameCriteriaBulkResponse500> Internal Server Error
     */
    deleteApiDataV1CustomObjectsObjectnameCriteriaBulk(body: types.DeleteApiDataV1CustomObjectsObjectnameCriteriaBulkBodyParam, metadata: types.DeleteApiDataV1CustomObjectsObjectnameCriteriaBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    deleteApiDataV1CustomObjectsObjectnameCriteriaBulk(metadata: types.DeleteApiDataV1CustomObjectsObjectnameCriteriaBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameSummaryResponse500> Internal Server Error
     */
    getApiDataV1CustomObjectsObjectnameSummary(metadata: types.GetApiDataV1CustomObjectsObjectnameSummaryMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1CustomObjectsObjectnameSummaryResponse200>>;
    /**
     * Executes multiple query requests parallelly on custom objects and returns the responses
     * of each query in a list.
     *
     * @summary Execute multiple queries
     */
    postApiDataV1CustomObjectsQueryParallel(body?: types.PostApiDataV1CustomObjectsQueryParallelBodyParam): Promise<FetchResponse<200, types.PostApiDataV1CustomObjectsQueryParallelResponse200>>;
    /**
     * Validates and executes the query request for the given custom object and specifying
     * whether the total record count should be included in the response.
     *
     * @summary Execute single query
     */
    postApiDataV1CustomObjectsQueryObjectname(body: types.PostApiDataV1CustomObjectsQueryObjectnameBodyParam, metadata: types.PostApiDataV1CustomObjectsQueryObjectnameMetadataParam): Promise<FetchResponse<200, types.PostApiDataV1CustomObjectsQueryObjectnameResponse200>>;
    postApiDataV1CustomObjectsQueryObjectname(metadata: types.PostApiDataV1CustomObjectsQueryObjectnameMetadataParam): Promise<FetchResponse<200, types.PostApiDataV1CustomObjectsQueryObjectnameResponse200>>;
    /**
     * Retrieves all currencies.
     *
     * @summary Get all currency
     */
    getApiDataV1Currencies(): Promise<FetchResponse<200, types.GetApiDataV1CurrenciesResponse200>>;
    /**
     * Retrieves a list of all record types for the given custom object.
     *
     * @summary Get all record types for the custom object
     * @throws FetchError<500, types.GetApiDataV1CustomObjectsObjectnameRecordtypesResponse500> Internal Server Error
     */
    getApiDataV1CustomObjectsObjectnameRecordtypes(metadata: types.GetApiDataV1CustomObjectsObjectnameRecordtypesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This bulk request API shares a record with users and user groups based on the provided
     * object name and record ID and sends an email notification to the user or user group.
     *
     * @summary Share a record
     * @throws FetchError<500, types.PostApiDataV1ObjectsObjectnameRecordidShareResponse500> Internal Server Error
     */
    postApiDataV1ObjectsObjectnameRecordidShare(body: types.PostApiDataV1ObjectsObjectnameRecordidShareBodyParam, metadata: types.PostApiDataV1ObjectsObjectnameRecordidShareMetadataParam): Promise<FetchResponse<202, types.PostApiDataV1ObjectsObjectnameRecordidShareResponse202>>;
    postApiDataV1ObjectsObjectnameRecordidShare(metadata: types.PostApiDataV1ObjectsObjectnameRecordidShareMetadataParam): Promise<FetchResponse<202, types.PostApiDataV1ObjectsObjectnameRecordidShareResponse202>>;
    /**
     * Updates the access level, such as View or Edit, for a shared record based on the
     * provided object name and record ID.
     *
     * @summary Update a shared record's access level
     * @throws FetchError<500, types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelResponse500> Internal Server Error
     */
    putApiDataV1ObjectsObjectnameRecordidAccessLevel(body: types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelBodyParam, metadata: types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelResponse200>>;
    putApiDataV1ObjectsObjectnameRecordidAccessLevel(metadata: types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ObjectsObjectnameRecordidAccessLevelResponse200>>;
    /**
     * Removes access to a record for a user or user group based on the given object name and
     * record ID.
     *
     * @summary Un-share a record
     * @throws FetchError<500, types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareResponse500> Internal Server Error
     */
    deleteApiDataV1ObjectsObjectnameRecordidUnShare(body: types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareBodyParam, metadata: types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareResponse200>>;
    deleteApiDataV1ObjectsObjectnameRecordidUnShare(metadata: types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1ObjectsObjectnameRecordidUnShareResponse200>>;
    /**
     * Gets sharing information about a record, including which users or user groups have
     * access to it and their corresponding permission levels, based on the object name and
     * record ID.
     *
     * @summary Get a record's sharing information
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidSharingInfoResponse500> Internal Server Error
     */
    getApiDataV1ObjectsObjectnameRecordidSharingInfo(metadata: types.GetApiDataV1ObjectsObjectnameRecordidSharingInfoMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1ObjectsObjectnameRecordidSharingInfoResponse200>>;
    /**
     * Gets the status of a record shared with a user group, such as `STARTED`, `IN PROGRESS`,
     * or `SUCCESS`, based on the object name, record ID, and tracking ID.
     *
     * @summary Get a record's sharing status
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatusResponse500> Internal Server Error
     */
    getApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatus(metadata: types.GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatusMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatusResponse200>>;
    /**
     * Retrieves the access details for a specific user on a given record, including permission
     * levels such as View, Edit, or Delete.
     *
     * @summary Get a user's access details for a shared record
     * @throws FetchError<500, types.GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevelResponse500> Internal Server Error
     */
    getApiDataV1ObjectsObjectnameRecordidUseridAccessLevel(metadata: types.GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevelMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevelResponse200>>;
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new account record
     * @throws FetchError<403, types.PostApiDataV1AccountResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1AccountResponse500> Internal Server Error
     */
    postApiDataV1Account(body?: types.PostApiDataV1AccountBodyParam, metadata?: types.PostApiDataV1AccountMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1AccountResponse201>>;
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all account records
     * @throws FetchError<500, types.GetApiDataV1AccountResponse500> Internal Server Error
     */
    getApiDataV1Account(metadata?: types.GetApiDataV1AccountMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1AccountResponse200>>;
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a account record using account record ID
     * @throws FetchError<500, types.GetApiDataV1AccountIdResponse500> Internal Server Error
     */
    getApiDataV1AccountId(metadata: types.GetApiDataV1AccountIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, record ID, and the details of the record that
     * you want to update.
     *
     * @summary Update a account record
     * @throws FetchError<500, types.PutApiDataV1AccountIdResponse500> Internal Server Error
     */
    putApiDataV1AccountId(body: types.PutApiDataV1AccountIdBodyParam, metadata: types.PutApiDataV1AccountIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1AccountIdResponse200>>;
    putApiDataV1AccountId(metadata: types.PutApiDataV1AccountIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1AccountIdResponse200>>;
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a account record
     * @throws FetchError<500, types.DeleteApiDataV1AccountIdResponse500> Internal Server Error
     */
    deleteApiDataV1AccountId(metadata: types.DeleteApiDataV1AccountIdMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1AccountIdResponse200>>;
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a account record using externalId
     * @throws FetchError<500, types.GetApiDataV1AccountByExternalidExternalidResponse500> Internal Server Error
     */
    getApiDataV1AccountByExternalidExternalid(metadata: types.GetApiDataV1AccountByExternalidExternalidMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, externalId, and the details of the record that
     * you want to update.
     *
     * @summary Update a account record by externalId
     * @throws FetchError<500, types.PutApiDataV1AccountByExternalidExternalidResponse500> Internal Server Error
     */
    putApiDataV1AccountByExternalidExternalid(body: types.PutApiDataV1AccountByExternalidExternalidBodyParam, metadata: types.PutApiDataV1AccountByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1AccountByExternalidExternalidResponse200>>;
    putApiDataV1AccountByExternalidExternalid(metadata: types.PutApiDataV1AccountByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1AccountByExternalidExternalidResponse200>>;
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a account record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1AccountByExternalidExternalidResponse500> Internal Server Error
     */
    deleteApiDataV1AccountByExternalidExternalid(metadata: types.DeleteApiDataV1AccountByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1AccountByExternalidExternalidResponse200>>;
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple account records
     * @throws FetchError<500, types.PostApiDataV1AccountBulkResponse500> Internal Server Error
     */
    postApiDataV1AccountBulk(body?: types.PostApiDataV1AccountBulkBodyParam, metadata?: types.PostApiDataV1AccountBulkMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1AccountBulkResponse201>>;
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple account records
     * @throws FetchError<500, types.PutApiDataV1AccountBulkResponse500> Internal Server Error
     */
    putApiDataV1AccountBulk(body?: types.PutApiDataV1AccountBulkBodyParam, metadata?: types.PutApiDataV1AccountBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple account records
     * @throws FetchError<500, types.DeleteApiDataV1AccountBulkResponse500> Internal Server Error
     */
    deleteApiDataV1AccountBulk(body?: types.DeleteApiDataV1AccountBulkBodyParam, metadata?: types.DeleteApiDataV1AccountBulkMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1AccountBulkResponse200>>;
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple account records
     * @throws FetchError<500, types.PatchApiDataV1AccountBulkResponse500> Internal Server Error
     */
    patchApiDataV1AccountBulk(body?: types.PatchApiDataV1AccountBulkBodyParam, metadata?: types.PatchApiDataV1AccountBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object account record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1AccountSummaryResponse500> Internal Server Error
     */
    getApiDataV1AccountSummary(): Promise<FetchResponse<200, types.GetApiDataV1AccountSummaryResponse200>>;
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    postApiDataV1AccountQuery(body?: types.PostApiDataV1AccountQueryBodyParam, metadata?: types.PostApiDataV1AccountQueryMetadataParam): Promise<FetchResponse<200, types.PostApiDataV1AccountQueryResponse200>>;
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all account record types
     * @throws FetchError<500, types.GetApiDataV1AccountRecordtypesResponse500> Internal Server Error
     */
    getApiDataV1AccountRecordtypes(): Promise<FetchResponse<number, unknown>>;
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new contact record
     * @throws FetchError<403, types.PostApiDataV1ContactResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1ContactResponse500> Internal Server Error
     */
    postApiDataV1Contact(body?: types.PostApiDataV1ContactBodyParam, metadata?: types.PostApiDataV1ContactMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1ContactResponse201>>;
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all contact records
     * @throws FetchError<500, types.GetApiDataV1ContactResponse500> Internal Server Error
     */
    getApiDataV1Contact(metadata?: types.GetApiDataV1ContactMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1ContactResponse200>>;
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a contact record using contact record ID
     * @throws FetchError<500, types.GetApiDataV1ContactIdResponse500> Internal Server Error
     */
    getApiDataV1ContactId(metadata: types.GetApiDataV1ContactIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, record ID, and the details of the record that
     * you want to update.
     *
     * @summary Update a contact record
     * @throws FetchError<500, types.PutApiDataV1ContactIdResponse500> Internal Server Error
     */
    putApiDataV1ContactId(body: types.PutApiDataV1ContactIdBodyParam, metadata: types.PutApiDataV1ContactIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ContactIdResponse200>>;
    putApiDataV1ContactId(metadata: types.PutApiDataV1ContactIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ContactIdResponse200>>;
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a contact record
     * @throws FetchError<500, types.DeleteApiDataV1ContactIdResponse500> Internal Server Error
     */
    deleteApiDataV1ContactId(metadata: types.DeleteApiDataV1ContactIdMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1ContactIdResponse200>>;
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a contact record using externalId
     * @throws FetchError<500, types.GetApiDataV1ContactByExternalidExternalidResponse500> Internal Server Error
     */
    getApiDataV1ContactByExternalidExternalid(metadata: types.GetApiDataV1ContactByExternalidExternalidMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, externalId, and the details of the record that
     * you want to update.
     *
     * @summary Update a contact record by externalId
     * @throws FetchError<500, types.PutApiDataV1ContactByExternalidExternalidResponse500> Internal Server Error
     */
    putApiDataV1ContactByExternalidExternalid(body: types.PutApiDataV1ContactByExternalidExternalidBodyParam, metadata: types.PutApiDataV1ContactByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ContactByExternalidExternalidResponse200>>;
    putApiDataV1ContactByExternalidExternalid(metadata: types.PutApiDataV1ContactByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1ContactByExternalidExternalidResponse200>>;
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a contact record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1ContactByExternalidExternalidResponse500> Internal Server Error
     */
    deleteApiDataV1ContactByExternalidExternalid(metadata: types.DeleteApiDataV1ContactByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1ContactByExternalidExternalidResponse200>>;
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple contact records
     * @throws FetchError<500, types.PostApiDataV1ContactBulkResponse500> Internal Server Error
     */
    postApiDataV1ContactBulk(body?: types.PostApiDataV1ContactBulkBodyParam, metadata?: types.PostApiDataV1ContactBulkMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1ContactBulkResponse201>>;
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple contact records
     * @throws FetchError<500, types.PutApiDataV1ContactBulkResponse500> Internal Server Error
     */
    putApiDataV1ContactBulk(body?: types.PutApiDataV1ContactBulkBodyParam, metadata?: types.PutApiDataV1ContactBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple contact records
     * @throws FetchError<500, types.DeleteApiDataV1ContactBulkResponse500> Internal Server Error
     */
    deleteApiDataV1ContactBulk(body?: types.DeleteApiDataV1ContactBulkBodyParam, metadata?: types.DeleteApiDataV1ContactBulkMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1ContactBulkResponse200>>;
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple contact records
     * @throws FetchError<500, types.PatchApiDataV1ContactBulkResponse500> Internal Server Error
     */
    patchApiDataV1ContactBulk(body?: types.PatchApiDataV1ContactBulkBodyParam, metadata?: types.PatchApiDataV1ContactBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object contact record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1ContactSummaryResponse500> Internal Server Error
     */
    getApiDataV1ContactSummary(): Promise<FetchResponse<200, types.GetApiDataV1ContactSummaryResponse200>>;
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    postApiDataV1ContactQuery(body?: types.PostApiDataV1ContactQueryBodyParam, metadata?: types.PostApiDataV1ContactQueryMetadataParam): Promise<FetchResponse<200, types.PostApiDataV1ContactQueryResponse200>>;
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all contact record types
     * @throws FetchError<500, types.GetApiDataV1ContactRecordtypesResponse500> Internal Server Error
     */
    getApiDataV1ContactRecordtypes(): Promise<FetchResponse<number, unknown>>;
    /**
     * Validates the record details and inserts if it does not exist in the given object.
     *
     * @summary Insert a new opportunity record
     * @throws FetchError<403, types.PostApiDataV1OpportunityResponse403> Forbidden
     * @throws FetchError<500, types.PostApiDataV1OpportunityResponse500> Internal Server Error
     */
    postApiDataV1Opportunity(body?: types.PostApiDataV1OpportunityBodyParam, metadata?: types.PostApiDataV1OpportunityMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1OpportunityResponse201>>;
    /**
     * Returns a list of all records for the given object.
     *
     * @summary Get all opportunity records
     * @throws FetchError<500, types.GetApiDataV1OpportunityResponse500> Internal Server Error
     */
    getApiDataV1Opportunity(metadata?: types.GetApiDataV1OpportunityMetadataParam): Promise<FetchResponse<200, types.GetApiDataV1OpportunityResponse200>>;
    /**
     * Checks the record ID in the given object and fetches the record if it exists.
     *
     * @summary Get a opportunity record using opportunity record ID
     * @throws FetchError<500, types.GetApiDataV1OpportunityIdResponse500> Internal Server Error
     */
    getApiDataV1OpportunityId(metadata: types.GetApiDataV1OpportunityIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, record ID, and the details of the record that
     * you want to update.
     *
     * @summary Update a opportunity record
     * @throws FetchError<500, types.PutApiDataV1OpportunityIdResponse500> Internal Server Error
     */
    putApiDataV1OpportunityId(body: types.PutApiDataV1OpportunityIdBodyParam, metadata: types.PutApiDataV1OpportunityIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1OpportunityIdResponse200>>;
    putApiDataV1OpportunityId(metadata: types.PutApiDataV1OpportunityIdMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1OpportunityIdResponse200>>;
    /**
     * Validates the record based on the record ID and removes it from the given object.
     *
     * @summary Delete a opportunity record
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityIdResponse500> Internal Server Error
     */
    deleteApiDataV1OpportunityId(metadata: types.DeleteApiDataV1OpportunityIdMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1OpportunityIdResponse200>>;
    /**
     * Checks the externalId in the given object and fetches the record if it exists.
     *
     * @summary Get a opportunity record using externalId
     * @throws FetchError<500, types.GetApiDataV1OpportunityByExternalidExternalidResponse500> Internal Server Error
     */
    getApiDataV1OpportunityByExternalidExternalid(metadata: types.GetApiDataV1OpportunityByExternalidExternalidMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates the record based on the object, externalId, and the details of the record that
     * you want to update.
     *
     * @summary Update a opportunity record by externalId
     * @throws FetchError<500, types.PutApiDataV1OpportunityByExternalidExternalidResponse500> Internal Server Error
     */
    putApiDataV1OpportunityByExternalidExternalid(body: types.PutApiDataV1OpportunityByExternalidExternalidBodyParam, metadata: types.PutApiDataV1OpportunityByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1OpportunityByExternalidExternalidResponse200>>;
    putApiDataV1OpportunityByExternalidExternalid(metadata: types.PutApiDataV1OpportunityByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.PutApiDataV1OpportunityByExternalidExternalidResponse200>>;
    /**
     * Validates the record based on the External ID and removes it from the given object.
     *
     * @summary Delete a opportunity record by externalId
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityByExternalidExternalidResponse500> Internal Server Error
     */
    deleteApiDataV1OpportunityByExternalidExternalid(metadata: types.DeleteApiDataV1OpportunityByExternalidExternalidMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1OpportunityByExternalidExternalidResponse200>>;
    /**
     * Validates the object record details and creates multiple records in the given object.
     *
     * @summary Insert multiple opportunity records
     * @throws FetchError<500, types.PostApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    postApiDataV1OpportunityBulk(body?: types.PostApiDataV1OpportunityBulkBodyParam, metadata?: types.PostApiDataV1OpportunityBulkMetadataParam): Promise<FetchResponse<201, types.PostApiDataV1OpportunityBulkResponse201>>;
    /**
     * Validates the object record details and updates multiple records in the given object.
     *
     * @summary Update multiple opportunity records
     * @throws FetchError<500, types.PutApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    putApiDataV1OpportunityBulk(body?: types.PutApiDataV1OpportunityBulkBodyParam, metadata?: types.PutApiDataV1OpportunityBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes multiple records from the given object.
     *
     * @summary Delete multiple opportunity records
     * @throws FetchError<500, types.DeleteApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    deleteApiDataV1OpportunityBulk(body?: types.DeleteApiDataV1OpportunityBulkBodyParam, metadata?: types.DeleteApiDataV1OpportunityBulkMetadataParam): Promise<FetchResponse<200, types.DeleteApiDataV1OpportunityBulkResponse200>>;
    /**
     * Validates the record details and updates if the ID already exists in the provided
     * object, else inserts if it does not.
     *
     * @summary Upsert multiple opportunity records
     * @throws FetchError<500, types.PatchApiDataV1OpportunityBulkResponse500> Internal Server Error
     */
    patchApiDataV1OpportunityBulk(body?: types.PatchApiDataV1OpportunityBulkBodyParam, metadata?: types.PatchApiDataV1OpportunityBulkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a count of all records for the given object, and it's size on disk.
     *
     * @summary Get object opportunity record count and size on disk
     * @throws FetchError<500, types.GetApiDataV1OpportunitySummaryResponse500> Internal Server Error
     */
    getApiDataV1OpportunitySummary(): Promise<FetchResponse<200, types.GetApiDataV1OpportunitySummaryResponse200>>;
    /**
     * Validates and executes the query request for the given object and specifying whether the
     * total record count should be included in the response.
     *
     * @summary Execute single query
     */
    postApiDataV1OpportunityQuery(body?: types.PostApiDataV1OpportunityQueryBodyParam, metadata?: types.PostApiDataV1OpportunityQueryMetadataParam): Promise<FetchResponse<200, types.PostApiDataV1OpportunityQueryResponse200>>;
    /**
     * Retrieves a list of all record types for the given object.
     *
     * @summary Get all opportunity record types
     * @throws FetchError<500, types.GetApiDataV1OpportunityRecordtypesResponse500> Internal Server Error
     */
    getApiDataV1OpportunityRecordtypes(): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
