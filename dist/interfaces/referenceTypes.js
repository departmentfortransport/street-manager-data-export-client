"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FPNStatus;
(function (FPNStatus) {
    FPNStatus["issued"] = "issued";
    FPNStatus["accepted"] = "accepted";
    FPNStatus["paid"] = "paid";
    FPNStatus["paid_discounted"] = "paid_discounted";
    FPNStatus["disputed"] = "disputed";
    FPNStatus["withdrawn"] = "withdrawn";
})(FPNStatus = exports.FPNStatus || (exports.FPNStatus = {}));
var Section81Status;
(function (Section81Status) {
    Section81Status["issued"] = "issued";
    Section81Status["acknowledged"] = "acknowledged";
    Section81Status["accepted"] = "accepted";
    Section81Status["accepted_fixed"] = "accepted_fixed";
    Section81Status["rejected"] = "rejected";
    Section81Status["resolved_by_ha"] = "resolved_by_ha";
    Section81Status["cancelled"] = "cancelled";
})(Section81Status = exports.Section81Status || (exports.Section81Status = {}));
var ForwardPlanStatus;
(function (ForwardPlanStatus) {
    ForwardPlanStatus["raised"] = "raised";
    ForwardPlanStatus["cancelled"] = "cancelled";
    ForwardPlanStatus["progressed"] = "progressed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var ReinstatementStatus;
(function (ReinstatementStatus) {
    ReinstatementStatus["interim"] = "interim";
    ReinstatementStatus["permanent"] = "permanent";
})(ReinstatementStatus = exports.ReinstatementStatus || (exports.ReinstatementStatus = {}));
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted"] = "granted";
    PermitStatus["permit_modification_request"] = "permit_modification_request";
    PermitStatus["refused"] = "refused";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked"] = "revoked";
    PermitStatus["progressed"] = "progressed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
var InspectionResponseType;
(function (InspectionResponseType) {
    InspectionResponseType["inspection"] = "inspection";
    InspectionResponseType["reinspection"] = "reinspection";
})(InspectionResponseType = exports.InspectionResponseType || (exports.InspectionResponseType = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
    WorkCategory["paa"] = "paa";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["planned"] = "planned";
    WorkStatus["in_progress"] = "in_progress";
    WorkStatus["completed"] = "completed";
    WorkStatus["cancelled"] = "cancelled";
    WorkStatus["unattributable"] = "unattributable";
    WorkStatus["historical"] = "historical";
    WorkStatus["non_notifiable"] = "non_notifiable";
    WorkStatus["section_81"] = "section_81";
})(WorkStatus = exports.WorkStatus || (exports.WorkStatus = {}));
var PermitCsvExportPrefix;
(function (PermitCsvExportPrefix) {
    PermitCsvExportPrefix["PA"] = "PA";
    PermitCsvExportPrefix["WR"] = "WR";
    PermitCsvExportPrefix["PAA"] = "PAA";
})(PermitCsvExportPrefix = exports.PermitCsvExportPrefix || (exports.PermitCsvExportPrefix = {}));
var LaneRentalAssessmentOutcome;
(function (LaneRentalAssessmentOutcome) {
    LaneRentalAssessmentOutcome["chargeable"] = "chargeable";
    LaneRentalAssessmentOutcome["potentially_chargeable"] = "potentially_chargeable";
    LaneRentalAssessmentOutcome["charges_waived"] = "charges_waived";
    LaneRentalAssessmentOutcome["exempt"] = "exempt";
    LaneRentalAssessmentOutcome["charges_not_applicable"] = "charges_not_applicable";
})(LaneRentalAssessmentOutcome = exports.LaneRentalAssessmentOutcome || (exports.LaneRentalAssessmentOutcome = {}));
var Section81Severity;
(function (Section81Severity) {
    Section81Severity["high"] = "high";
    Section81Severity["low"] = "low";
})(Section81Severity = exports.Section81Severity || (exports.Section81Severity = {}));
var Role;
(function (Role) {
    Role["Planner"] = "Planner";
    Role["HighwayAuthority"] = "HighwayAuthority";
    Role["Admin"] = "Admin";
    Role["Contractor"] = "Contractor";
    Role["API"] = "API";
    Role["UI"] = "UI";
    Role["DataExport"] = "DataExport";
})(Role = exports.Role || (exports.Role = {}));
