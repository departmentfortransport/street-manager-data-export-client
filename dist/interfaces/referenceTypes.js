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
    WorkCategory["hs2_highway"] = "hs2_highway";
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
var AlterationStatus;
(function (AlterationStatus) {
    AlterationStatus["submitted"] = "submitted";
    AlterationStatus["granted"] = "granted";
    AlterationStatus["granted_with_duration_challenge"] = "granted_with_duration_challenge";
    AlterationStatus["refused"] = "refused";
    AlterationStatus["deemed"] = "deemed";
    AlterationStatus["cancelled"] = "cancelled";
    AlterationStatus["revoked"] = "revoked";
    AlterationStatus["auto_applied"] = "auto_applied";
})(AlterationStatus = exports.AlterationStatus || (exports.AlterationStatus = {}));
var AlterationType;
(function (AlterationType) {
    AlterationType["PROMOTER_IMPOSED_CHANGE"] = "PROMOTER_IMPOSED_CHANGE";
    AlterationType["PROMOTER_CHANGE_REQUEST"] = "PROMOTER_CHANGE_REQUEST";
    AlterationType["HA_CHANGE_REQUEST"] = "HA_CHANGE_REQUEST";
    AlterationType["HA_IMPOSED_CHANGE"] = "HA_IMPOSED_CHANGE";
    AlterationType["WORK_EXTENSION"] = "WORK_EXTENSION";
    AlterationType["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    AlterationType["MODIFIED_PERMIT"] = "MODIFIED_PERMIT";
})(AlterationType = exports.AlterationType || (exports.AlterationType = {}));
var CommentTopic;
(function (CommentTopic) {
    CommentTopic["GENERAL"] = "GENERAL";
    CommentTopic["SECTION_74"] = "SECTION_74";
    CommentTopic["INSPECTION"] = "INSPECTION";
    CommentTopic["FPN"] = "FPN";
    CommentTopic["OVERRUN"] = "OVERRUN";
    CommentTopic["FORWARD_PLAN"] = "FORWARD_PLAN";
    CommentTopic["CHANGE_REQUEST"] = "CHANGE_REQUEST";
    CommentTopic["IMPOSED_VARIATION"] = "IMPOSED_VARIATION";
    CommentTopic["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    CommentTopic["SECTION_81"] = "SECTION_81";
})(CommentTopic = exports.CommentTopic || (exports.CommentTopic = {}));
var InspectionType;
(function (InspectionType) {
    InspectionType["live_site"] = "live_site";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["non_compliance_follow_up"] = "non_compliance_follow_up";
    InspectionType["section_81"] = "section_81";
})(InspectionType = exports.InspectionType || (exports.InspectionType = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcome["failed_low"] = "failed_low";
    InspectionOutcome["failed_high"] = "failed_high";
    InspectionOutcome["further_inspections_required"] = "further_inspections_required";
    InspectionOutcome["agreed_site_compliance"] = "agreed_site_compliance";
    InspectionOutcome["non_compliant_with_conditions"] = "non_compliant_with_conditions";
    InspectionOutcome["works_stopped_apparatus_remaining"] = "works_stopped_apparatus_remaining";
    InspectionOutcome["works_in_progress_no_carriageway_incursion"] = "works_in_progress_no_carriageway_incursion";
    InspectionOutcome["works_in_progress"] = "works_in_progress";
    InspectionOutcome["works_stopped"] = "works_stopped";
})(InspectionOutcome = exports.InspectionOutcome || (exports.InspectionOutcome = {}));
var OffenceCode;
(function (OffenceCode) {
    OffenceCode["offence_code_05"] = "offence_code_05";
    OffenceCode["offence_code_06"] = "offence_code_06";
    OffenceCode["offence_code_08"] = "offence_code_08";
    OffenceCode["offence_code_09"] = "offence_code_09";
})(OffenceCode = exports.OffenceCode || (exports.OffenceCode = {}));
