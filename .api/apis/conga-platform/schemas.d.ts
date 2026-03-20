declare const DeleteApiDataV1AccountBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DeleteByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for deleting the record. <p>**Note**: Default value set to Id.</p>";
                };
                readonly IncludeDeleteResultStatus: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the delete status in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1AccountByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 27a6a4a6-41c0-4e2a-b56d-355bb4ab2e09.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1AccountId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1ContactBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DeleteByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for deleting the record. <p>**Note**: Default value set to Id.</p>";
                };
                readonly IncludeDeleteResultStatus: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the delete status in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1ContactByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 27a6a4a6-41c0-4e2a-b56d-355bb4ab2e09.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1ContactId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1CustomObjectsObjectnameBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly DeleteByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for deleting the record. <p>**Note**: Default value set to Id.</p>";
                };
                readonly IncludeDeleteResultStatus: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the delete status in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain underscores and alphanumeric characters. **For example**: PaymentTool, PaymentToolHistory.";
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 27a6a4a6-41c0-4e2a-b56d-355bb4ab2e09.";
                };
            };
            readonly required: readonly ["objectName", "externalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1CustomObjectsObjectnameCriteriaBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Object from which the records need to be deleted.";
            };
            readonly Criteria: {
                readonly type: "string";
                readonly description: "Delete criteria for the Records. **For example**: IsActive = 'true'. <p>**Note**: The criteria field (in this case, IsActive) should be indexed.</p>";
            };
            readonly PageSize: {
                readonly type: "integer";
                readonly description: "The number of records to display on each page.";
                readonly format: "int32";
                readonly deprecated: true;
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly PageNumber: {
                readonly type: "integer";
                readonly description: "The page number of the result set to view.";
                readonly format: "int32";
                readonly deprecated: true;
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly NumberOfRecordsToDelete: {
                readonly type: "integer";
                readonly description: "Number of records to delete. \r\nIf NumberOfRecordsToDelete is provided PageNumber and PageSize will be ignored.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly additionalProperties: false;
        readonly description: "Criteria based request for delete.";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeDeleteResultStatus: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the delete status in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1CustomObjectsObjectnameId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: `2614d72c-edfc-4dc5-b72f-45104fe5ef43`.";
                };
            };
            readonly required: readonly ["objectName", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1ObjectsObjectnameRecordidUnShare: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RecordShareType: {
                readonly enum: readonly ["User", "UserGroup"];
                readonly type: "string";
            };
            readonly UserId: {
                readonly type: "string";
                readonly description: "User to whom the record is shared with. Should be provided when RecordShareType is User.";
            };
            readonly UserGroupId: {
                readonly type: "string";
                readonly description: "User Group to which the record is shared with. Should be provided when RecordShareType is UserGroup.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be shared. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
            };
            readonly required: readonly ["objectName", "recordId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1OpportunityBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly DeleteByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for deleting the record. <p>**Note**: Default value set to Id.</p>";
                };
                readonly IncludeDeleteResultStatus: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the delete status in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1OpportunityByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 27a6a4a6-41c0-4e2a-b56d-355bb4ab2e09.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApiDataV1OpportunityId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "boolean";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1Account: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly criteria: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search criteria for the users. **For example**: IsActive = 'true'. <p>**Note**: The criteria field (in this case, IsActive) should be indexed.</p>";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of records in each page. **For example**: 5, It will display 5 records on each page.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pages to be fetched. **For example**: 2, It will fetch the second page with the number of records (mentioned in the pageSize parameter).<p>**Note**:The page Index starts from 1.</p>";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field name for sorting. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                };
                readonly sortDirection: {
                    readonly enum: readonly ["Ascending", "Descending"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction for the data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1AccountByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1AccountId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1AccountRecordtypes: {
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1AccountSummary: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1Contact: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly criteria: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search criteria for the users. **For example**: IsActive = 'true'. <p>**Note**: The criteria field (in this case, IsActive) should be indexed.</p>";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of records in each page. **For example**: 5, It will display 5 records on each page.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pages to be fetched. **For example**: 2, It will fetch the second page with the number of records (mentioned in the pageSize parameter).<p>**Note**:The page Index starts from 1.</p>";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field name for sorting. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                };
                readonly sortDirection: {
                    readonly enum: readonly ["Ascending", "Descending"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction for the data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ContactByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ContactId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ContactRecordtypes: {
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ContactSummary: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1Currencies: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Code: {
                                readonly type: "string";
                            };
                            readonly Name: {
                                readonly type: "string";
                            };
                            readonly Symbol: {
                                readonly type: "string";
                            };
                            readonly Scale: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1CustomObjectsObjectname: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object from which the records need to be fetched. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly criteria: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search criteria for the object. **For example**: `IsActive = 'true'`.<p>**Note**: The criteria field (in this case, IsActive) must be indexed.</p>";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of records in each page. **For example**: `5` produces five records for each page.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pages to be fetched. **For example**: `2` fetches the second page with the number of records in the pageSize parameter.<p>**Note**: The page index starts at 1.</p>";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field name for sorting. **For example**: `FirstName`.<p>**Note**: The sort field (in this case, FirstName) must be indexed or sortable.</p>";
                };
                readonly sortDirection: {
                    readonly enum: readonly ["Ascending", "Descending"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction for the data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1CustomObjectsObjectnameByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain underscores and alphanumeric characters. **For example**: PaymentTool, PaymentToolHistory.";
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["objectName", "externalId"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1CustomObjectsObjectnameId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. <p>**For example**: `2614d72c-edfc-4dc5-b72f-45104fe5ef43`.</p>";
                };
            };
            readonly required: readonly ["objectName", "id"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1CustomObjectsObjectnameRecordtypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Custom object name. It can only contain underscores and alphanumeric characters and \"_c\" in the sufix. **For example**: CustomObject_c.";
                };
            };
            readonly required: readonly ["objectName"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1CustomObjectsObjectnameSummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the object from which the records need to be fetched. It can only contain underscores and alphanumeric characters. **For example**: PaymentTool, PaymentToolHistory.";
                };
            };
            readonly required: readonly ["objectName"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ObjectsObjectnameRecordidSharingInfo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be shared. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
            };
            readonly required: readonly ["objectName", "recordId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of records in each page. **For example**: 5, It will display 5 records on each page.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pages to be fetched. **For example**: 2, It will fetch the second page with the number of records (mentioned in the pageSize parameter).<p>**Note**:The page Index starts from 1.</p>";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field name for sorting. **For example**: IsActive. <p>**Note**: The sort field (in this case, IsActive) should be indexed or sortable.</p>";
                };
                readonly sortDirection: {
                    readonly enum: readonly ["Ascending", "Descending"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction for the data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be shared. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
                readonly trackingId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique tracking ID returned during the sharing of a record.";
                };
            };
            readonly required: readonly ["objectName", "recordId", "trackingId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly Id: {
                            readonly type: "string";
                        };
                        readonly Name: {
                            readonly type: "string";
                        };
                        readonly CreatedBy: {
                            readonly type: "object";
                            readonly properties: {
                                readonly Id: {
                                    readonly type: "string";
                                };
                                readonly Name: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly CreatedDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly ModifiedBy: {
                            readonly type: "object";
                            readonly properties: {
                                readonly Id: {
                                    readonly type: "string";
                                };
                                readonly Name: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly ModifiedDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly ExternalId: {
                            readonly type: "string";
                        };
                        readonly ETag: {
                            readonly type: "string";
                        };
                        readonly ObjectName: {
                            readonly type: "string";
                        };
                        readonly RecordId: {
                            readonly type: "string";
                        };
                        readonly TrackingId: {
                            readonly type: "string";
                        };
                        readonly Status: {
                            readonly type: "string";
                        };
                        readonly MemberId: {
                            readonly type: "string";
                        };
                        readonly MemberType: {
                            readonly type: "string";
                        };
                        readonly ShouldSendEmail: {
                            readonly type: "boolean";
                        };
                        readonly EmailMessage: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevel: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be checked. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the user whose access details are being retrieved.";
                };
            };
            readonly required: readonly ["objectName", "recordId", "userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly IsSharingEnabled: {
                            readonly type: "boolean";
                        };
                        readonly IsRecordShared: {
                            readonly type: "boolean";
                        };
                        readonly RecordAccessDetail: {
                            readonly type: "object";
                            readonly properties: {
                                readonly View: {
                                    readonly type: "boolean";
                                };
                                readonly Edit: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1Opportunity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly criteria: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search criteria for the users. **For example**: IsActive = 'true'. <p>**Note**: The criteria field (in this case, IsActive) should be indexed.</p>";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of records in each page. **For example**: 5, It will display 5 records on each page.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pages to be fetched. **For example**: 2, It will fetch the second page with the number of records (mentioned in the pageSize parameter).<p>**Note**:The page Index starts from 1.</p>";
                };
                readonly sortField: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field name for sorting. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                };
                readonly sortDirection: {
                    readonly enum: readonly ["Ascending", "Descending"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction for the data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1OpportunityByExternalidExternalid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1OpportunityId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1OpportunityRecordtypes: {
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApiDataV1OpportunitySummary: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchApiDataV1AccountBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to enforce optimistic locking. <p>**Note**: Default value set to false.</p>";
                };
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to Id.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchApiDataV1ContactBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to enforce optimistic locking. <p>**Note**: Default value set to false.</p>";
                };
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to Id.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchApiDataV1CustomObjectsObjectnameBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object in which the record is to be inserted. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to enforce optimistic locking. <p>**Note**: Default value set to false.</p>";
                };
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to Id.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchApiDataV1OpportunityBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to enforce optimistic locking. <p>**Note**: Default value set to false.</p>";
                };
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to Id.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1Account: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record.";
            };
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Account number";
            };
            readonly AccountSource: {
                readonly type: "string";
                readonly description: "Account source";
            };
            readonly BillingAddress: {
                readonly type: "string";
                readonly description: "Billing address";
            };
            readonly BillingCity: {
                readonly type: "string";
                readonly description: "Billing city";
            };
            readonly ChannelProgramName: {
                readonly type: "string";
                readonly description: "Channel program name";
            };
            readonly Industry: {
                readonly type: "string";
                readonly description: "Industry";
            };
            readonly IsCustomerPortal: {
                readonly type: "string";
                readonly description: "Is customer portal";
            };
            readonly IsPartner: {
                readonly type: "boolean";
                readonly description: "Is partner";
            };
            readonly AnnualRevenue: {
                readonly type: "integer";
                readonly description: "Annual revenue";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly BillingCountry: {
                readonly type: "string";
                readonly description: "Billing country";
            };
            readonly BillingCountryCode: {
                readonly type: "string";
                readonly description: "Billing country code";
            };
            readonly BillingPostalCode: {
                readonly type: "string";
                readonly description: "Billing postal code";
            };
            readonly BillingState: {
                readonly type: "string";
                readonly description: "Billing state";
            };
            readonly BillingStreet: {
                readonly type: "string";
                readonly description: "Billing street";
            };
            readonly ChannelProgramLevelName: {
                readonly type: "string";
                readonly description: "Channel program level name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Ownership: {
                readonly type: "string";
                readonly description: "Ownership";
            };
            readonly Parent: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Parent";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Rating: {
                readonly type: "string";
                readonly description: "Rating";
            };
            readonly ShippingAddress: {
                readonly type: "string";
                readonly description: "Shipping address";
            };
            readonly ShippingCity: {
                readonly type: "string";
                readonly description: "Shipping city";
            };
            readonly ShippingCountry: {
                readonly type: "string";
                readonly description: "Shipping country";
            };
            readonly ShippingCountryCode: {
                readonly type: "string";
                readonly description: "Shipping country code";
            };
            readonly ShippingPostalCode: {
                readonly type: "string";
                readonly description: "Shipping postal code";
            };
            readonly ShippingState: {
                readonly type: "string";
                readonly description: "Shipping state";
            };
            readonly ShippingStreet: {
                readonly type: "string";
                readonly description: "Shipping street";
            };
            readonly Site: {
                readonly type: "string";
                readonly description: "Site";
            };
            readonly Type: {
                readonly type: "string";
                readonly description: "Type";
            };
            readonly Website: {
                readonly type: "string";
                readonly description: "Website";
            };
            readonly PriceList: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "PriceList Id and Name associated with record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Account Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1AccountBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record.";
            };
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Account number";
            };
            readonly AccountSource: {
                readonly type: "string";
                readonly description: "Account source";
            };
            readonly BillingAddress: {
                readonly type: "string";
                readonly description: "Billing address";
            };
            readonly BillingCity: {
                readonly type: "string";
                readonly description: "Billing city";
            };
            readonly ChannelProgramName: {
                readonly type: "string";
                readonly description: "Channel program name";
            };
            readonly Industry: {
                readonly type: "string";
                readonly description: "Industry";
            };
            readonly IsCustomerPortal: {
                readonly type: "string";
                readonly description: "Is customer portal";
            };
            readonly IsPartner: {
                readonly type: "boolean";
                readonly description: "Is partner";
            };
            readonly AnnualRevenue: {
                readonly type: "integer";
                readonly description: "Annual revenue";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly BillingCountry: {
                readonly type: "string";
                readonly description: "Billing country";
            };
            readonly BillingCountryCode: {
                readonly type: "string";
                readonly description: "Billing country code";
            };
            readonly BillingPostalCode: {
                readonly type: "string";
                readonly description: "Billing postal code";
            };
            readonly BillingState: {
                readonly type: "string";
                readonly description: "Billing state";
            };
            readonly BillingStreet: {
                readonly type: "string";
                readonly description: "Billing street";
            };
            readonly ChannelProgramLevelName: {
                readonly type: "string";
                readonly description: "Channel program level name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Ownership: {
                readonly type: "string";
                readonly description: "Ownership";
            };
            readonly Parent: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Parent";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Rating: {
                readonly type: "string";
                readonly description: "Rating";
            };
            readonly ShippingAddress: {
                readonly type: "string";
                readonly description: "Shipping address";
            };
            readonly ShippingCity: {
                readonly type: "string";
                readonly description: "Shipping city";
            };
            readonly ShippingCountry: {
                readonly type: "string";
                readonly description: "Shipping country";
            };
            readonly ShippingCountryCode: {
                readonly type: "string";
                readonly description: "Shipping country code";
            };
            readonly ShippingPostalCode: {
                readonly type: "string";
                readonly description: "Shipping postal code";
            };
            readonly ShippingState: {
                readonly type: "string";
                readonly description: "Shipping state";
            };
            readonly ShippingStreet: {
                readonly type: "string";
                readonly description: "Shipping street";
            };
            readonly Site: {
                readonly type: "string";
                readonly description: "Site";
            };
            readonly Type: {
                readonly type: "string";
                readonly description: "Type";
            };
            readonly Website: {
                readonly type: "string";
                readonly description: "Website";
            };
            readonly PriceList: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "PriceList Id and Name associated with record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Account Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1AccountQuery: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Name of object on which querying needs to be done.";
            };
            readonly Criteria: {
                readonly type: "string";
            };
            readonly Select: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The fields which are to be displayed.";
            };
            readonly Distinct: {
                readonly type: "boolean";
                readonly description: "Select true to get distinct records";
            };
            readonly Limit: {
                readonly type: "integer";
                readonly description: "Limit set for records to be fetched. **For example**: Limit = 100, This will fetch 100 records matching the criteria.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Skip: {
                readonly type: "integer";
                readonly description: "Number of records to be skipped.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Sort: {
                readonly type: "object";
                readonly properties: {
                    readonly FieldName: {
                        readonly type: "string";
                        readonly description: "Field name for sort. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                    };
                    readonly OrderBy: {
                        readonly enum: readonly ["Ascending", "Descending"];
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
                readonly description: "Sort information for records.";
            };
            readonly GroupBy: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "List of field names which are to be grouped.";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Schema Model for Query";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeTotalCount: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the total count of records in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1Contact: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for record";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "First name for record";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Last name for record";
            };
            readonly AssistantName: {
                readonly type: "string";
                readonly description: "Name of assistant";
            };
            readonly Department: {
                readonly type: "string";
                readonly description: "Department name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly DoNotCall: {
                readonly type: "string";
                readonly description: "Call options.";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Email Id";
            };
            readonly IsEmailBounced: {
                readonly type: "boolean";
                readonly description: "Is Email bounced";
            };
            readonly EmailBouncedDate: {
                readonly type: "string";
                readonly description: "Email bounced date";
            };
            readonly EmailBouncedReason: {
                readonly type: "string";
                readonly description: "Email bounced reason";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source";
            };
            readonly AssistantPhone: {
                readonly type: "string";
                readonly description: "Assistant phone number";
            };
            readonly Birthdate: {
                readonly type: "string";
                readonly description: "Birthdate";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax number";
            };
            readonly HasOptedOutOfEmail: {
                readonly type: "string";
                readonly description: "Email settings";
            };
            readonly HasOptedOutOfFax: {
                readonly type: "string";
                readonly description: "Fax settings";
            };
            readonly HomePhone: {
                readonly type: "string";
                readonly description: "Home phone number";
            };
            readonly MailingAddress: {
                readonly type: "string";
                readonly description: "Mailing address";
            };
            readonly MailingCity: {
                readonly type: "string";
                readonly description: "Mailing city";
            };
            readonly MailingCountry: {
                readonly type: "string";
                readonly description: "Mailing country";
            };
            readonly MailingCountryCode: {
                readonly type: "string";
                readonly description: "Mailing country code";
            };
            readonly MailingPostalCode: {
                readonly type: "string";
                readonly description: "Mailing postal code";
            };
            readonly MailingState: {
                readonly type: "string";
                readonly description: "Mailing state";
            };
            readonly MailingStreet: {
                readonly type: "string";
                readonly description: "Mailing street";
            };
            readonly MobilePhone: {
                readonly type: "string";
                readonly description: "Mobile phone number";
            };
            readonly OtherAddress: {
                readonly type: "string";
                readonly description: "Alternate address";
            };
            readonly OtherCity: {
                readonly type: "string";
                readonly description: "Alternate city";
            };
            readonly OtherCountry: {
                readonly type: "string";
                readonly description: "Alternate country";
            };
            readonly OtherCountryCode: {
                readonly type: "string";
                readonly description: "Alternate country code";
            };
            readonly OtherPhone: {
                readonly type: "string";
                readonly description: "Alternate phone number";
            };
            readonly OtherPostalCode: {
                readonly type: "string";
                readonly description: "Alternate postal code";
            };
            readonly OtherState: {
                readonly type: "string";
                readonly description: "Alternate state";
            };
            readonly OtherStreet: {
                readonly type: "string";
                readonly description: "Alternate street";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone Number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Salutation: {
                readonly type: "string";
                readonly description: "Salutation";
            };
            readonly Title: {
                readonly type: "string";
                readonly description: "Title";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Contact Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1ContactBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for record";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "First name for record";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Last name for record";
            };
            readonly AssistantName: {
                readonly type: "string";
                readonly description: "Name of assistant";
            };
            readonly Department: {
                readonly type: "string";
                readonly description: "Department name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly DoNotCall: {
                readonly type: "string";
                readonly description: "Call options.";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Email Id";
            };
            readonly IsEmailBounced: {
                readonly type: "boolean";
                readonly description: "Is Email bounced";
            };
            readonly EmailBouncedDate: {
                readonly type: "string";
                readonly description: "Email bounced date";
            };
            readonly EmailBouncedReason: {
                readonly type: "string";
                readonly description: "Email bounced reason";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source";
            };
            readonly AssistantPhone: {
                readonly type: "string";
                readonly description: "Assistant phone number";
            };
            readonly Birthdate: {
                readonly type: "string";
                readonly description: "Birthdate";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax number";
            };
            readonly HasOptedOutOfEmail: {
                readonly type: "string";
                readonly description: "Email settings";
            };
            readonly HasOptedOutOfFax: {
                readonly type: "string";
                readonly description: "Fax settings";
            };
            readonly HomePhone: {
                readonly type: "string";
                readonly description: "Home phone number";
            };
            readonly MailingAddress: {
                readonly type: "string";
                readonly description: "Mailing address";
            };
            readonly MailingCity: {
                readonly type: "string";
                readonly description: "Mailing city";
            };
            readonly MailingCountry: {
                readonly type: "string";
                readonly description: "Mailing country";
            };
            readonly MailingCountryCode: {
                readonly type: "string";
                readonly description: "Mailing country code";
            };
            readonly MailingPostalCode: {
                readonly type: "string";
                readonly description: "Mailing postal code";
            };
            readonly MailingState: {
                readonly type: "string";
                readonly description: "Mailing state";
            };
            readonly MailingStreet: {
                readonly type: "string";
                readonly description: "Mailing street";
            };
            readonly MobilePhone: {
                readonly type: "string";
                readonly description: "Mobile phone number";
            };
            readonly OtherAddress: {
                readonly type: "string";
                readonly description: "Alternate address";
            };
            readonly OtherCity: {
                readonly type: "string";
                readonly description: "Alternate city";
            };
            readonly OtherCountry: {
                readonly type: "string";
                readonly description: "Alternate country";
            };
            readonly OtherCountryCode: {
                readonly type: "string";
                readonly description: "Alternate country code";
            };
            readonly OtherPhone: {
                readonly type: "string";
                readonly description: "Alternate phone number";
            };
            readonly OtherPostalCode: {
                readonly type: "string";
                readonly description: "Alternate postal code";
            };
            readonly OtherState: {
                readonly type: "string";
                readonly description: "Alternate state";
            };
            readonly OtherStreet: {
                readonly type: "string";
                readonly description: "Alternate street";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone Number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Salutation: {
                readonly type: "string";
                readonly description: "Salutation";
            };
            readonly Title: {
                readonly type: "string";
                readonly description: "Title";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Contact Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1ContactQuery: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Name of object on which querying needs to be done.";
            };
            readonly Criteria: {
                readonly type: "string";
            };
            readonly Select: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The fields which are to be displayed.";
            };
            readonly Distinct: {
                readonly type: "boolean";
                readonly description: "Select true to get distinct records";
            };
            readonly Limit: {
                readonly type: "integer";
                readonly description: "Limit set for records to be fetched. **For example**: Limit = 100, This will fetch 100 records matching the criteria.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Skip: {
                readonly type: "integer";
                readonly description: "Number of records to be skipped.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Sort: {
                readonly type: "object";
                readonly properties: {
                    readonly FieldName: {
                        readonly type: "string";
                        readonly description: "Field name for sort. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                    };
                    readonly OrderBy: {
                        readonly enum: readonly ["Ascending", "Descending"];
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
                readonly description: "Sort information for records.";
            };
            readonly GroupBy: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "List of field names which are to be grouped.";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Schema Model for Query";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeTotalCount: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the total count of records in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1CustomObjectsObjectname: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object in which the record is to be inserted. It can only contain alphanumeric characters and underscores, and must contain \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1CustomObjectsObjectnameBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1CustomObjectsQueryObjectname: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Name of object on which querying needs to be done.";
            };
            readonly Criteria: {
                readonly type: "string";
            };
            readonly Select: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The fields which are to be displayed.";
            };
            readonly Distinct: {
                readonly type: "boolean";
                readonly description: "Select true to get distinct records";
            };
            readonly Limit: {
                readonly type: "integer";
                readonly description: "Limit set for records to be fetched. **For example**: Limit = 100, This will fetch 100 records matching the criteria.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Skip: {
                readonly type: "integer";
                readonly description: "Number of records to be skipped.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Sort: {
                readonly type: "object";
                readonly properties: {
                    readonly FieldName: {
                        readonly type: "string";
                        readonly description: "Field name for sort. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                    };
                    readonly OrderBy: {
                        readonly enum: readonly ["Ascending", "Descending"];
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
                readonly description: "Sort information for records.";
            };
            readonly GroupBy: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "List of field names which are to be grouped.";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Schema Model for Query";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object to which query needs to be processed.It can only contain underscores and alphanumeric characters and \"_c\" in the sufix. **For example**: CustomObject_c.";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeTotalCount: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the total count of records in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1CustomObjectsQueryParallel: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly properties: {
                readonly ObjectName: {
                    readonly type: "string";
                    readonly description: "Name of object on which querying needs to be done.";
                };
                readonly Criteria: {
                    readonly type: "string";
                };
                readonly Select: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "The fields which are to be displayed.";
                };
                readonly Distinct: {
                    readonly type: "boolean";
                    readonly description: "Select true to get distinct records";
                };
                readonly Limit: {
                    readonly type: "integer";
                    readonly description: "Limit set for records to be fetched. **For example**: Limit = 100, This will fetch 100 records matching the criteria.";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly Skip: {
                    readonly type: "integer";
                    readonly description: "Number of records to be skipped.";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly Sort: {
                    readonly type: "object";
                    readonly properties: {
                        readonly FieldName: {
                            readonly type: "string";
                            readonly description: "Field name for sort. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                        };
                        readonly OrderBy: {
                            readonly enum: readonly ["Ascending", "Descending"];
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Sort information for records.";
                };
                readonly GroupBy: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "List of field names which are to be grouped.";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Schema Model for Query";
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1ObjectsObjectnameRecordidShare: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RecordShareInfo: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly RecordShareType: {
                            readonly enum: readonly ["User", "UserGroup"];
                            readonly type: "string";
                        };
                        readonly UserId: {
                            readonly type: "string";
                        };
                        readonly UserGroupId: {
                            readonly type: "string";
                        };
                        readonly AccessLevel: {
                            readonly enum: readonly ["View", "Edit"];
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly IsSendEmailNotification: {
                readonly type: "boolean";
                readonly description: "Should we send an email to the user/usergroup the record is shared with.";
            };
            readonly EmailMessage: {
                readonly type: "string";
                readonly description: "Email message body to be sent to the user/usergroup when the record is shared.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be shared. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
            };
            readonly required: readonly ["objectName", "recordId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Id: {
                                readonly type: "string";
                            };
                            readonly Name: {
                                readonly type: "string";
                            };
                            readonly CreatedBy: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly Id: {
                                        readonly type: "string";
                                    };
                                    readonly Name: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly CreatedDate: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly ModifiedBy: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly Id: {
                                        readonly type: "string";
                                    };
                                    readonly Name: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly ModifiedDate: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly ExternalId: {
                                readonly type: "string";
                            };
                            readonly ETag: {
                                readonly type: "string";
                            };
                            readonly ObjectName: {
                                readonly type: "string";
                            };
                            readonly RecordId: {
                                readonly type: "string";
                            };
                            readonly TrackingId: {
                                readonly type: "string";
                            };
                            readonly Status: {
                                readonly type: "string";
                            };
                            readonly MemberId: {
                                readonly type: "string";
                            };
                            readonly MemberType: {
                                readonly type: "string";
                            };
                            readonly ShouldSendEmail: {
                                readonly type: "boolean";
                            };
                            readonly EmailMessage: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1Opportunity: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record";
            };
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Contact: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Contact Id and Name associated with record";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly FiscalYear: {
                readonly type: "string";
                readonly description: "Financial reporting year";
            };
            readonly ForecastCategory: {
                readonly type: "string";
                readonly description: "Forcast category for record";
            };
            readonly ForecastCategoryName: {
                readonly type: "string";
                readonly description: "Name of forcast category for record";
            };
            readonly HasOpportunityLineItem: {
                readonly type: "string";
                readonly description: "Has opportunity lineitem";
            };
            readonly HasOpenActivity: {
                readonly type: "boolean";
                readonly description: "Has open activity";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source for record";
            };
            readonly StageName: {
                readonly type: "string";
                readonly description: "Stage Name for record";
            };
            readonly TotalOpportunityQuantity: {
                readonly type: "string";
                readonly description: "Total opportuninty qunatity for record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Opportunity Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1OpportunityBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record";
            };
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Contact: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Contact Id and Name associated with record";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly FiscalYear: {
                readonly type: "string";
                readonly description: "Financial reporting year";
            };
            readonly ForecastCategory: {
                readonly type: "string";
                readonly description: "Forcast category for record";
            };
            readonly ForecastCategoryName: {
                readonly type: "string";
                readonly description: "Name of forcast category for record";
            };
            readonly HasOpportunityLineItem: {
                readonly type: "string";
                readonly description: "Has opportunity lineitem";
            };
            readonly HasOpenActivity: {
                readonly type: "boolean";
                readonly description: "Has open activity";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source for record";
            };
            readonly StageName: {
                readonly type: "string";
                readonly description: "Stage Name for record";
            };
            readonly TotalOpportunityQuantity: {
                readonly type: "string";
                readonly description: "Total opportuninty qunatity for record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Opportunity Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApiDataV1OpportunityQuery: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Name of object on which querying needs to be done.";
            };
            readonly Criteria: {
                readonly type: "string";
            };
            readonly Select: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The fields which are to be displayed.";
            };
            readonly Distinct: {
                readonly type: "boolean";
                readonly description: "Select true to get distinct records";
            };
            readonly Limit: {
                readonly type: "integer";
                readonly description: "Limit set for records to be fetched. **For example**: Limit = 100, This will fetch 100 records matching the criteria.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Skip: {
                readonly type: "integer";
                readonly description: "Number of records to be skipped.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Sort: {
                readonly type: "object";
                readonly properties: {
                    readonly FieldName: {
                        readonly type: "string";
                        readonly description: "Field name for sort. **For example**: FirstName. <p>**Note**: The sort field (in this case, FirstName) should be indexed or sortable.</p>";
                    };
                    readonly OrderBy: {
                        readonly enum: readonly ["Ascending", "Descending"];
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
                readonly description: "Sort information for records.";
            };
            readonly GroupBy: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "List of field names which are to be grouped.";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Schema Model for Query";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly IncludeTotalCount: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the total count of records in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1AccountBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record.";
            };
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Account number";
            };
            readonly AccountSource: {
                readonly type: "string";
                readonly description: "Account source";
            };
            readonly BillingAddress: {
                readonly type: "string";
                readonly description: "Billing address";
            };
            readonly BillingCity: {
                readonly type: "string";
                readonly description: "Billing city";
            };
            readonly ChannelProgramName: {
                readonly type: "string";
                readonly description: "Channel program name";
            };
            readonly Industry: {
                readonly type: "string";
                readonly description: "Industry";
            };
            readonly IsCustomerPortal: {
                readonly type: "string";
                readonly description: "Is customer portal";
            };
            readonly IsPartner: {
                readonly type: "boolean";
                readonly description: "Is partner";
            };
            readonly AnnualRevenue: {
                readonly type: "integer";
                readonly description: "Annual revenue";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly BillingCountry: {
                readonly type: "string";
                readonly description: "Billing country";
            };
            readonly BillingCountryCode: {
                readonly type: "string";
                readonly description: "Billing country code";
            };
            readonly BillingPostalCode: {
                readonly type: "string";
                readonly description: "Billing postal code";
            };
            readonly BillingState: {
                readonly type: "string";
                readonly description: "Billing state";
            };
            readonly BillingStreet: {
                readonly type: "string";
                readonly description: "Billing street";
            };
            readonly ChannelProgramLevelName: {
                readonly type: "string";
                readonly description: "Channel program level name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Ownership: {
                readonly type: "string";
                readonly description: "Ownership";
            };
            readonly Parent: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Parent";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Rating: {
                readonly type: "string";
                readonly description: "Rating";
            };
            readonly ShippingAddress: {
                readonly type: "string";
                readonly description: "Shipping address";
            };
            readonly ShippingCity: {
                readonly type: "string";
                readonly description: "Shipping city";
            };
            readonly ShippingCountry: {
                readonly type: "string";
                readonly description: "Shipping country";
            };
            readonly ShippingCountryCode: {
                readonly type: "string";
                readonly description: "Shipping country code";
            };
            readonly ShippingPostalCode: {
                readonly type: "string";
                readonly description: "Shipping postal code";
            };
            readonly ShippingState: {
                readonly type: "string";
                readonly description: "Shipping state";
            };
            readonly ShippingStreet: {
                readonly type: "string";
                readonly description: "Shipping street";
            };
            readonly Site: {
                readonly type: "string";
                readonly description: "Site";
            };
            readonly Type: {
                readonly type: "string";
                readonly description: "Type";
            };
            readonly Website: {
                readonly type: "string";
                readonly description: "Website";
            };
            readonly PriceList: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "PriceList Id and Name associated with record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Account Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to ID.</p>";
                };
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1AccountByExternalidExternalid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record.";
            };
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Account number";
            };
            readonly AccountSource: {
                readonly type: "string";
                readonly description: "Account source";
            };
            readonly BillingAddress: {
                readonly type: "string";
                readonly description: "Billing address";
            };
            readonly BillingCity: {
                readonly type: "string";
                readonly description: "Billing city";
            };
            readonly ChannelProgramName: {
                readonly type: "string";
                readonly description: "Channel program name";
            };
            readonly Industry: {
                readonly type: "string";
                readonly description: "Industry";
            };
            readonly IsCustomerPortal: {
                readonly type: "string";
                readonly description: "Is customer portal";
            };
            readonly IsPartner: {
                readonly type: "boolean";
                readonly description: "Is partner";
            };
            readonly AnnualRevenue: {
                readonly type: "integer";
                readonly description: "Annual revenue";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly BillingCountry: {
                readonly type: "string";
                readonly description: "Billing country";
            };
            readonly BillingCountryCode: {
                readonly type: "string";
                readonly description: "Billing country code";
            };
            readonly BillingPostalCode: {
                readonly type: "string";
                readonly description: "Billing postal code";
            };
            readonly BillingState: {
                readonly type: "string";
                readonly description: "Billing state";
            };
            readonly BillingStreet: {
                readonly type: "string";
                readonly description: "Billing street";
            };
            readonly ChannelProgramLevelName: {
                readonly type: "string";
                readonly description: "Channel program level name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Ownership: {
                readonly type: "string";
                readonly description: "Ownership";
            };
            readonly Parent: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Parent";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Rating: {
                readonly type: "string";
                readonly description: "Rating";
            };
            readonly ShippingAddress: {
                readonly type: "string";
                readonly description: "Shipping address";
            };
            readonly ShippingCity: {
                readonly type: "string";
                readonly description: "Shipping city";
            };
            readonly ShippingCountry: {
                readonly type: "string";
                readonly description: "Shipping country";
            };
            readonly ShippingCountryCode: {
                readonly type: "string";
                readonly description: "Shipping country code";
            };
            readonly ShippingPostalCode: {
                readonly type: "string";
                readonly description: "Shipping postal code";
            };
            readonly ShippingState: {
                readonly type: "string";
                readonly description: "Shipping state";
            };
            readonly ShippingStreet: {
                readonly type: "string";
                readonly description: "Shipping street";
            };
            readonly Site: {
                readonly type: "string";
                readonly description: "Site";
            };
            readonly Type: {
                readonly type: "string";
                readonly description: "Type";
            };
            readonly Website: {
                readonly type: "string";
                readonly description: "Website";
            };
            readonly PriceList: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "PriceList Id and Name associated with record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Account Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1AccountId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record.";
            };
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Account number";
            };
            readonly AccountSource: {
                readonly type: "string";
                readonly description: "Account source";
            };
            readonly BillingAddress: {
                readonly type: "string";
                readonly description: "Billing address";
            };
            readonly BillingCity: {
                readonly type: "string";
                readonly description: "Billing city";
            };
            readonly ChannelProgramName: {
                readonly type: "string";
                readonly description: "Channel program name";
            };
            readonly Industry: {
                readonly type: "string";
                readonly description: "Industry";
            };
            readonly IsCustomerPortal: {
                readonly type: "string";
                readonly description: "Is customer portal";
            };
            readonly IsPartner: {
                readonly type: "boolean";
                readonly description: "Is partner";
            };
            readonly AnnualRevenue: {
                readonly type: "integer";
                readonly description: "Annual revenue";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly BillingCountry: {
                readonly type: "string";
                readonly description: "Billing country";
            };
            readonly BillingCountryCode: {
                readonly type: "string";
                readonly description: "Billing country code";
            };
            readonly BillingPostalCode: {
                readonly type: "string";
                readonly description: "Billing postal code";
            };
            readonly BillingState: {
                readonly type: "string";
                readonly description: "Billing state";
            };
            readonly BillingStreet: {
                readonly type: "string";
                readonly description: "Billing street";
            };
            readonly ChannelProgramLevelName: {
                readonly type: "string";
                readonly description: "Channel program level name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Ownership: {
                readonly type: "string";
                readonly description: "Ownership";
            };
            readonly Parent: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Parent";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Rating: {
                readonly type: "string";
                readonly description: "Rating";
            };
            readonly ShippingAddress: {
                readonly type: "string";
                readonly description: "Shipping address";
            };
            readonly ShippingCity: {
                readonly type: "string";
                readonly description: "Shipping city";
            };
            readonly ShippingCountry: {
                readonly type: "string";
                readonly description: "Shipping country";
            };
            readonly ShippingCountryCode: {
                readonly type: "string";
                readonly description: "Shipping country code";
            };
            readonly ShippingPostalCode: {
                readonly type: "string";
                readonly description: "Shipping postal code";
            };
            readonly ShippingState: {
                readonly type: "string";
                readonly description: "Shipping state";
            };
            readonly ShippingStreet: {
                readonly type: "string";
                readonly description: "Shipping street";
            };
            readonly Site: {
                readonly type: "string";
                readonly description: "Site";
            };
            readonly Type: {
                readonly type: "string";
                readonly description: "Type";
            };
            readonly Website: {
                readonly type: "string";
                readonly description: "Website";
            };
            readonly PriceList: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "PriceList Id and Name associated with record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Account Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1ContactBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for record";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "First name for record";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Last name for record";
            };
            readonly AssistantName: {
                readonly type: "string";
                readonly description: "Name of assistant";
            };
            readonly Department: {
                readonly type: "string";
                readonly description: "Department name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly DoNotCall: {
                readonly type: "string";
                readonly description: "Call options.";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Email Id";
            };
            readonly IsEmailBounced: {
                readonly type: "boolean";
                readonly description: "Is Email bounced";
            };
            readonly EmailBouncedDate: {
                readonly type: "string";
                readonly description: "Email bounced date";
            };
            readonly EmailBouncedReason: {
                readonly type: "string";
                readonly description: "Email bounced reason";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source";
            };
            readonly AssistantPhone: {
                readonly type: "string";
                readonly description: "Assistant phone number";
            };
            readonly Birthdate: {
                readonly type: "string";
                readonly description: "Birthdate";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax number";
            };
            readonly HasOptedOutOfEmail: {
                readonly type: "string";
                readonly description: "Email settings";
            };
            readonly HasOptedOutOfFax: {
                readonly type: "string";
                readonly description: "Fax settings";
            };
            readonly HomePhone: {
                readonly type: "string";
                readonly description: "Home phone number";
            };
            readonly MailingAddress: {
                readonly type: "string";
                readonly description: "Mailing address";
            };
            readonly MailingCity: {
                readonly type: "string";
                readonly description: "Mailing city";
            };
            readonly MailingCountry: {
                readonly type: "string";
                readonly description: "Mailing country";
            };
            readonly MailingCountryCode: {
                readonly type: "string";
                readonly description: "Mailing country code";
            };
            readonly MailingPostalCode: {
                readonly type: "string";
                readonly description: "Mailing postal code";
            };
            readonly MailingState: {
                readonly type: "string";
                readonly description: "Mailing state";
            };
            readonly MailingStreet: {
                readonly type: "string";
                readonly description: "Mailing street";
            };
            readonly MobilePhone: {
                readonly type: "string";
                readonly description: "Mobile phone number";
            };
            readonly OtherAddress: {
                readonly type: "string";
                readonly description: "Alternate address";
            };
            readonly OtherCity: {
                readonly type: "string";
                readonly description: "Alternate city";
            };
            readonly OtherCountry: {
                readonly type: "string";
                readonly description: "Alternate country";
            };
            readonly OtherCountryCode: {
                readonly type: "string";
                readonly description: "Alternate country code";
            };
            readonly OtherPhone: {
                readonly type: "string";
                readonly description: "Alternate phone number";
            };
            readonly OtherPostalCode: {
                readonly type: "string";
                readonly description: "Alternate postal code";
            };
            readonly OtherState: {
                readonly type: "string";
                readonly description: "Alternate state";
            };
            readonly OtherStreet: {
                readonly type: "string";
                readonly description: "Alternate street";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone Number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Salutation: {
                readonly type: "string";
                readonly description: "Salutation";
            };
            readonly Title: {
                readonly type: "string";
                readonly description: "Title";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Contact Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to ID.</p>";
                };
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1ContactByExternalidExternalid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for record";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "First name for record";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Last name for record";
            };
            readonly AssistantName: {
                readonly type: "string";
                readonly description: "Name of assistant";
            };
            readonly Department: {
                readonly type: "string";
                readonly description: "Department name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly DoNotCall: {
                readonly type: "string";
                readonly description: "Call options.";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Email Id";
            };
            readonly IsEmailBounced: {
                readonly type: "boolean";
                readonly description: "Is Email bounced";
            };
            readonly EmailBouncedDate: {
                readonly type: "string";
                readonly description: "Email bounced date";
            };
            readonly EmailBouncedReason: {
                readonly type: "string";
                readonly description: "Email bounced reason";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source";
            };
            readonly AssistantPhone: {
                readonly type: "string";
                readonly description: "Assistant phone number";
            };
            readonly Birthdate: {
                readonly type: "string";
                readonly description: "Birthdate";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax number";
            };
            readonly HasOptedOutOfEmail: {
                readonly type: "string";
                readonly description: "Email settings";
            };
            readonly HasOptedOutOfFax: {
                readonly type: "string";
                readonly description: "Fax settings";
            };
            readonly HomePhone: {
                readonly type: "string";
                readonly description: "Home phone number";
            };
            readonly MailingAddress: {
                readonly type: "string";
                readonly description: "Mailing address";
            };
            readonly MailingCity: {
                readonly type: "string";
                readonly description: "Mailing city";
            };
            readonly MailingCountry: {
                readonly type: "string";
                readonly description: "Mailing country";
            };
            readonly MailingCountryCode: {
                readonly type: "string";
                readonly description: "Mailing country code";
            };
            readonly MailingPostalCode: {
                readonly type: "string";
                readonly description: "Mailing postal code";
            };
            readonly MailingState: {
                readonly type: "string";
                readonly description: "Mailing state";
            };
            readonly MailingStreet: {
                readonly type: "string";
                readonly description: "Mailing street";
            };
            readonly MobilePhone: {
                readonly type: "string";
                readonly description: "Mobile phone number";
            };
            readonly OtherAddress: {
                readonly type: "string";
                readonly description: "Alternate address";
            };
            readonly OtherCity: {
                readonly type: "string";
                readonly description: "Alternate city";
            };
            readonly OtherCountry: {
                readonly type: "string";
                readonly description: "Alternate country";
            };
            readonly OtherCountryCode: {
                readonly type: "string";
                readonly description: "Alternate country code";
            };
            readonly OtherPhone: {
                readonly type: "string";
                readonly description: "Alternate phone number";
            };
            readonly OtherPostalCode: {
                readonly type: "string";
                readonly description: "Alternate postal code";
            };
            readonly OtherState: {
                readonly type: "string";
                readonly description: "Alternate state";
            };
            readonly OtherStreet: {
                readonly type: "string";
                readonly description: "Alternate street";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone Number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Salutation: {
                readonly type: "string";
                readonly description: "Salutation";
            };
            readonly Title: {
                readonly type: "string";
                readonly description: "Title";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Contact Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1ContactId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for record";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "First name for record";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Last name for record";
            };
            readonly AssistantName: {
                readonly type: "string";
                readonly description: "Name of assistant";
            };
            readonly Department: {
                readonly type: "string";
                readonly description: "Department name";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly DoNotCall: {
                readonly type: "string";
                readonly description: "Call options.";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Email Id";
            };
            readonly IsEmailBounced: {
                readonly type: "boolean";
                readonly description: "Is Email bounced";
            };
            readonly EmailBouncedDate: {
                readonly type: "string";
                readonly description: "Email bounced date";
            };
            readonly EmailBouncedReason: {
                readonly type: "string";
                readonly description: "Email bounced reason";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source";
            };
            readonly AssistantPhone: {
                readonly type: "string";
                readonly description: "Assistant phone number";
            };
            readonly Birthdate: {
                readonly type: "string";
                readonly description: "Birthdate";
            };
            readonly Fax: {
                readonly type: "string";
                readonly description: "Fax number";
            };
            readonly HasOptedOutOfEmail: {
                readonly type: "string";
                readonly description: "Email settings";
            };
            readonly HasOptedOutOfFax: {
                readonly type: "string";
                readonly description: "Fax settings";
            };
            readonly HomePhone: {
                readonly type: "string";
                readonly description: "Home phone number";
            };
            readonly MailingAddress: {
                readonly type: "string";
                readonly description: "Mailing address";
            };
            readonly MailingCity: {
                readonly type: "string";
                readonly description: "Mailing city";
            };
            readonly MailingCountry: {
                readonly type: "string";
                readonly description: "Mailing country";
            };
            readonly MailingCountryCode: {
                readonly type: "string";
                readonly description: "Mailing country code";
            };
            readonly MailingPostalCode: {
                readonly type: "string";
                readonly description: "Mailing postal code";
            };
            readonly MailingState: {
                readonly type: "string";
                readonly description: "Mailing state";
            };
            readonly MailingStreet: {
                readonly type: "string";
                readonly description: "Mailing street";
            };
            readonly MobilePhone: {
                readonly type: "string";
                readonly description: "Mobile phone number";
            };
            readonly OtherAddress: {
                readonly type: "string";
                readonly description: "Alternate address";
            };
            readonly OtherCity: {
                readonly type: "string";
                readonly description: "Alternate city";
            };
            readonly OtherCountry: {
                readonly type: "string";
                readonly description: "Alternate country";
            };
            readonly OtherCountryCode: {
                readonly type: "string";
                readonly description: "Alternate country code";
            };
            readonly OtherPhone: {
                readonly type: "string";
                readonly description: "Alternate phone number";
            };
            readonly OtherPostalCode: {
                readonly type: "string";
                readonly description: "Alternate postal code";
            };
            readonly OtherState: {
                readonly type: "string";
                readonly description: "Alternate state";
            };
            readonly OtherStreet: {
                readonly type: "string";
                readonly description: "Alternate street";
            };
            readonly Owner: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Owner Id and Name associated with record";
            };
            readonly Phone: {
                readonly type: "string";
                readonly description: "Phone Number";
            };
            readonly PhotoUrl: {
                readonly type: "string";
                readonly description: "Photo Url";
            };
            readonly Salutation: {
                readonly type: "string";
                readonly description: "Salutation";
            };
            readonly Title: {
                readonly type: "string";
                readonly description: "Title";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Contact Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1CustomObjectsObjectnameBulk: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly additionalProperties: true;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must contain \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to ID.</p>";
                };
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1CustomObjectsObjectnameByExternalidExternalid: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the object. It can only contain underscores and alphanumeric characters. **For example**: PaymentTool, PaymentToolHistory.";
                };
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2618d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["objectName", "externalId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1CustomObjectsObjectnameCriteriaBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ObjectName: {
                readonly type: "string";
                readonly description: "Object from which the records need to be updated.";
            };
            readonly ValuesToUpdate: {
                readonly type: "object";
                readonly additionalProperties: true;
                readonly description: "Tha values which needs to be updated **For example**: Name = \"Mark\"";
            };
            readonly Criteria: {
                readonly type: "string";
                readonly description: "Update criteria for the Records. **For example**: IsActive = 'true'. <p>**Note**: The criteria field (in this case, IsActive) should be indexed.</p>";
            };
            readonly PageNumber: {
                readonly type: "integer";
                readonly description: "The page number of the result set to view.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly PageSize: {
                readonly type: "integer";
                readonly description: "The number of records to display on each page.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly additionalProperties: false;
        readonly description: "Criteria based request for bulk updating records.";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object in which the record is to be updated. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
            };
            readonly required: readonly ["objectName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly after: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1CustomObjectsObjectnameId: {
    readonly body: {
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the custom object. It can only contain alphanumeric characters and underscores, and must have \"_c\" in the suffix. <p>**For example**: `CustomObject_c`.</p>";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. For example, `2614d72c-edfc-4dc5-b72f-45104fe5ef43`.";
                };
            };
            readonly required: readonly ["objectName", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1ObjectsObjectnameRecordidAccessLevel: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RecordShareType: {
                readonly enum: readonly ["User", "UserGroup"];
                readonly type: "string";
            };
            readonly UserId: {
                readonly type: "string";
            };
            readonly UserGroupId: {
                readonly type: "string";
            };
            readonly AccessLevel: {
                readonly enum: readonly ["View", "Edit"];
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly objectName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the business object the record belongs to. For example, `Agreement`.";
                };
                readonly recordId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique ID of the record to be shared. For example, `6a2f9e0d-aef6-432f-998b-66cbc673c793`.";
                };
            };
            readonly required: readonly ["objectName", "recordId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1OpportunityBulk: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record";
            };
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Contact: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Contact Id and Name associated with record";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly FiscalYear: {
                readonly type: "string";
                readonly description: "Financial reporting year";
            };
            readonly ForecastCategory: {
                readonly type: "string";
                readonly description: "Forcast category for record";
            };
            readonly ForecastCategoryName: {
                readonly type: "string";
                readonly description: "Name of forcast category for record";
            };
            readonly HasOpportunityLineItem: {
                readonly type: "string";
                readonly description: "Has opportunity lineitem";
            };
            readonly HasOpenActivity: {
                readonly type: "boolean";
                readonly description: "Has open activity";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source for record";
            };
            readonly StageName: {
                readonly type: "string";
                readonly description: "Stage Name for record";
            };
            readonly TotalOpportunityQuantity: {
                readonly type: "string";
                readonly description: "Total opportuninty qunatity for record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Opportunity Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly UpdateByField: {
                    readonly enum: readonly ["Id", "ExternalId"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to use for updating the record. <p>**Note**: Default value set to ID.</p>";
                };
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1OpportunityByExternalidExternalid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record";
            };
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Contact: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Contact Id and Name associated with record";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly FiscalYear: {
                readonly type: "string";
                readonly description: "Financial reporting year";
            };
            readonly ForecastCategory: {
                readonly type: "string";
                readonly description: "Forcast category for record";
            };
            readonly ForecastCategoryName: {
                readonly type: "string";
                readonly description: "Name of forcast category for record";
            };
            readonly HasOpportunityLineItem: {
                readonly type: "string";
                readonly description: "Has opportunity lineitem";
            };
            readonly HasOpenActivity: {
                readonly type: "boolean";
                readonly description: "Has open activity";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source for record";
            };
            readonly StageName: {
                readonly type: "string";
                readonly description: "Stage Name for record";
            };
            readonly TotalOpportunityQuantity: {
                readonly type: "string";
                readonly description: "Total opportuninty qunatity for record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Opportunity Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly externalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "External ID of the record. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["externalId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiDataV1OpportunityId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly Name: {
                readonly type: "string";
                readonly description: "Name for the record";
            };
            readonly Account: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Account Id and Name associated with record";
            };
            readonly Contact: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                };
                readonly description: "Contact Id and Name associated with record";
            };
            readonly Description: {
                readonly type: "string";
                readonly description: "Description for the record";
            };
            readonly FiscalYear: {
                readonly type: "string";
                readonly description: "Financial reporting year";
            };
            readonly ForecastCategory: {
                readonly type: "string";
                readonly description: "Forcast category for record";
            };
            readonly ForecastCategoryName: {
                readonly type: "string";
                readonly description: "Name of forcast category for record";
            };
            readonly HasOpportunityLineItem: {
                readonly type: "string";
                readonly description: "Has opportunity lineitem";
            };
            readonly HasOpenActivity: {
                readonly type: "boolean";
                readonly description: "Has open activity";
            };
            readonly LeadSource: {
                readonly type: "string";
                readonly description: "Lead source for record";
            };
            readonly StageName: {
                readonly type: "string";
                readonly description: "Stage Name for record";
            };
            readonly TotalOpportunityQuantity: {
                readonly type: "string";
                readonly description: "Total opportuninty qunatity for record";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Opportunity Request Example";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actual record ID. **For example**: 2614d72c-edfc-4dc5-b72f-45104fe5ef43.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly IncludeRecordPayloadInResponse: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to get the payload in response. <p>**Note**: Default value set to false.</p>";
                };
                readonly EnforceOptimisticLocking: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly Success: {
                    readonly type: "boolean";
                };
                readonly RecordCount: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly Data: {
                    readonly type: "string";
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly Profile: {
                    readonly type: "string";
                };
                readonly TotalTime: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly StatusCode: {
                    readonly enum: readonly ["Continue", "SwitchingProtocols", "Processing", "EarlyHints", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultiStatus", "AlreadyReported", "IMUsed", "MultipleChoices", "MovedPermanently", "Found", "SeeOther", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "PermanentRedirect", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "MisdirectedRequest", "UnprocessableEntity", "Locked", "FailedDependency", "UpgradeRequired", "PreconditionRequired", "TooManyRequests", "RequestHeaderFieldsTooLarge", "UnavailableForLegalReasons", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported", "VariantAlsoNegotiates", "InsufficientStorage", "LoopDetected", "NotExtended", "NetworkAuthenticationRequired"];
                    readonly type: "string";
                    readonly description: "`Continue` `SwitchingProtocols` `Processing` `EarlyHints` `OK` `Created` `Accepted` `NonAuthoritativeInformation` `NoContent` `ResetContent` `PartialContent` `MultiStatus` `AlreadyReported` `IMUsed` `MultipleChoices` `MovedPermanently` `Found` `SeeOther` `NotModified` `UseProxy` `Unused` `TemporaryRedirect` `PermanentRedirect` `BadRequest` `Unauthorized` `PaymentRequired` `Forbidden` `NotFound` `MethodNotAllowed` `NotAcceptable` `ProxyAuthenticationRequired` `RequestTimeout` `Conflict` `Gone` `LengthRequired` `PreconditionFailed` `RequestEntityTooLarge` `RequestUriTooLong` `UnsupportedMediaType` `RequestedRangeNotSatisfiable` `ExpectationFailed` `MisdirectedRequest` `UnprocessableEntity` `Locked` `FailedDependency` `UpgradeRequired` `PreconditionRequired` `TooManyRequests` `RequestHeaderFieldsTooLarge` `UnavailableForLegalReasons` `InternalServerError` `NotImplemented` `BadGateway` `ServiceUnavailable` `GatewayTimeout` `HttpVersionNotSupported` `VariantAlsoNegotiates` `InsufficientStorage` `LoopDetected` `NotExtended` `NetworkAuthenticationRequired`";
                };
                readonly HasMoreRecords: {
                    readonly type: "boolean";
                };
                readonly NextCursor: {
                    readonly type: "string";
                };
                readonly Warnings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly Message: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteApiDataV1AccountBulk, DeleteApiDataV1AccountByExternalidExternalid, DeleteApiDataV1AccountId, DeleteApiDataV1ContactBulk, DeleteApiDataV1ContactByExternalidExternalid, DeleteApiDataV1ContactId, DeleteApiDataV1CustomObjectsObjectnameBulk, DeleteApiDataV1CustomObjectsObjectnameByExternalidExternalid, DeleteApiDataV1CustomObjectsObjectnameCriteriaBulk, DeleteApiDataV1CustomObjectsObjectnameId, DeleteApiDataV1ObjectsObjectnameRecordidUnShare, DeleteApiDataV1OpportunityBulk, DeleteApiDataV1OpportunityByExternalidExternalid, DeleteApiDataV1OpportunityId, GetApiDataV1Account, GetApiDataV1AccountByExternalidExternalid, GetApiDataV1AccountId, GetApiDataV1AccountRecordtypes, GetApiDataV1AccountSummary, GetApiDataV1Contact, GetApiDataV1ContactByExternalidExternalid, GetApiDataV1ContactId, GetApiDataV1ContactRecordtypes, GetApiDataV1ContactSummary, GetApiDataV1Currencies, GetApiDataV1CustomObjectsObjectname, GetApiDataV1CustomObjectsObjectnameByExternalidExternalid, GetApiDataV1CustomObjectsObjectnameId, GetApiDataV1CustomObjectsObjectnameRecordtypes, GetApiDataV1CustomObjectsObjectnameSummary, GetApiDataV1ObjectsObjectnameRecordidSharingInfo, GetApiDataV1ObjectsObjectnameRecordidTrackingidSharingStatus, GetApiDataV1ObjectsObjectnameRecordidUseridAccessLevel, GetApiDataV1Opportunity, GetApiDataV1OpportunityByExternalidExternalid, GetApiDataV1OpportunityId, GetApiDataV1OpportunityRecordtypes, GetApiDataV1OpportunitySummary, PatchApiDataV1AccountBulk, PatchApiDataV1ContactBulk, PatchApiDataV1CustomObjectsObjectnameBulk, PatchApiDataV1OpportunityBulk, PostApiDataV1Account, PostApiDataV1AccountBulk, PostApiDataV1AccountQuery, PostApiDataV1Contact, PostApiDataV1ContactBulk, PostApiDataV1ContactQuery, PostApiDataV1CustomObjectsObjectname, PostApiDataV1CustomObjectsObjectnameBulk, PostApiDataV1CustomObjectsQueryObjectname, PostApiDataV1CustomObjectsQueryParallel, PostApiDataV1ObjectsObjectnameRecordidShare, PostApiDataV1Opportunity, PostApiDataV1OpportunityBulk, PostApiDataV1OpportunityQuery, PutApiDataV1AccountBulk, PutApiDataV1AccountByExternalidExternalid, PutApiDataV1AccountId, PutApiDataV1ContactBulk, PutApiDataV1ContactByExternalidExternalid, PutApiDataV1ContactId, PutApiDataV1CustomObjectsObjectnameBulk, PutApiDataV1CustomObjectsObjectnameByExternalidExternalid, PutApiDataV1CustomObjectsObjectnameCriteriaBulk, PutApiDataV1CustomObjectsObjectnameId, PutApiDataV1ObjectsObjectnameRecordidAccessLevel, PutApiDataV1OpportunityBulk, PutApiDataV1OpportunityByExternalidExternalid, PutApiDataV1OpportunityId };
