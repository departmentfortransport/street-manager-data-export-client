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
var FPNStatusResponse;
(function (FPNStatusResponse) {
    FPNStatusResponse["issued"] = "issued";
    FPNStatusResponse["accepted"] = "accepted";
    FPNStatusResponse["paid"] = "paid";
    FPNStatusResponse["paid_discounted"] = "paid_discounted";
    FPNStatusResponse["disputed"] = "disputed";
    FPNStatusResponse["withdrawn"] = "withdrawn";
    FPNStatusResponse["upcoming_enum"] = "upcoming_enum";
})(FPNStatusResponse = exports.FPNStatusResponse || (exports.FPNStatusResponse = {}));
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
var Section81StatusResponse;
(function (Section81StatusResponse) {
    Section81StatusResponse["issued"] = "issued";
    Section81StatusResponse["acknowledged"] = "acknowledged";
    Section81StatusResponse["accepted"] = "accepted";
    Section81StatusResponse["accepted_fixed"] = "accepted_fixed";
    Section81StatusResponse["rejected"] = "rejected";
    Section81StatusResponse["resolved_by_ha"] = "resolved_by_ha";
    Section81StatusResponse["cancelled"] = "cancelled";
    Section81StatusResponse["upcoming_enum"] = "upcoming_enum";
})(Section81StatusResponse = exports.Section81StatusResponse || (exports.Section81StatusResponse = {}));
var ForwardPlanStatus;
(function (ForwardPlanStatus) {
    ForwardPlanStatus["raised"] = "raised";
    ForwardPlanStatus["cancelled"] = "cancelled";
    ForwardPlanStatus["progressed"] = "progressed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var ForwardPlanStatusResponse;
(function (ForwardPlanStatusResponse) {
    ForwardPlanStatusResponse["raised"] = "raised";
    ForwardPlanStatusResponse["cancelled"] = "cancelled";
    ForwardPlanStatusResponse["progressed"] = "progressed";
    ForwardPlanStatusResponse["upcoming_enum"] = "upcoming_enum";
})(ForwardPlanStatusResponse = exports.ForwardPlanStatusResponse || (exports.ForwardPlanStatusResponse = {}));
var ReinstatementStatus;
(function (ReinstatementStatus) {
    ReinstatementStatus["interim"] = "interim";
    ReinstatementStatus["permanent"] = "permanent";
})(ReinstatementStatus = exports.ReinstatementStatus || (exports.ReinstatementStatus = {}));
var ReinstatementStatusResponse;
(function (ReinstatementStatusResponse) {
    ReinstatementStatusResponse["interim"] = "interim";
    ReinstatementStatusResponse["permanent"] = "permanent";
    ReinstatementStatusResponse["upcoming_enum"] = "upcoming_enum";
})(ReinstatementStatusResponse = exports.ReinstatementStatusResponse || (exports.ReinstatementStatusResponse = {}));
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
var PermitStatusResponse;
(function (PermitStatusResponse) {
    PermitStatusResponse["submitted"] = "submitted";
    PermitStatusResponse["granted"] = "granted";
    PermitStatusResponse["permit_modification_request"] = "permit_modification_request";
    PermitStatusResponse["refused"] = "refused";
    PermitStatusResponse["closed"] = "closed";
    PermitStatusResponse["cancelled"] = "cancelled";
    PermitStatusResponse["revoked"] = "revoked";
    PermitStatusResponse["progressed"] = "progressed";
    PermitStatusResponse["upcoming_enum"] = "upcoming_enum";
})(PermitStatusResponse = exports.PermitStatusResponse || (exports.PermitStatusResponse = {}));
var InspectionResponseType;
(function (InspectionResponseType) {
    InspectionResponseType["inspection"] = "inspection";
    InspectionResponseType["reinspection"] = "reinspection";
})(InspectionResponseType = exports.InspectionResponseType || (exports.InspectionResponseType = {}));
var InspectionResponseTypeResponse;
(function (InspectionResponseTypeResponse) {
    InspectionResponseTypeResponse["inspection"] = "inspection";
    InspectionResponseTypeResponse["reinspection"] = "reinspection";
    InspectionResponseTypeResponse["upcoming_enum"] = "upcoming_enum";
})(InspectionResponseTypeResponse = exports.InspectionResponseTypeResponse || (exports.InspectionResponseTypeResponse = {}));
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
var WorkCategoryResponse;
(function (WorkCategoryResponse) {
    WorkCategoryResponse["minor"] = "minor";
    WorkCategoryResponse["standard"] = "standard";
    WorkCategoryResponse["major"] = "major";
    WorkCategoryResponse["immediate_urgent"] = "immediate_urgent";
    WorkCategoryResponse["immediate_emergency"] = "immediate_emergency";
    WorkCategoryResponse["paa"] = "paa";
    WorkCategoryResponse["hs2_highway"] = "hs2_highway";
    WorkCategoryResponse["upcoming_enum"] = "upcoming_enum";
})(WorkCategoryResponse = exports.WorkCategoryResponse || (exports.WorkCategoryResponse = {}));
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
var WorkStatusResponse;
(function (WorkStatusResponse) {
    WorkStatusResponse["planned"] = "planned";
    WorkStatusResponse["in_progress"] = "in_progress";
    WorkStatusResponse["completed"] = "completed";
    WorkStatusResponse["cancelled"] = "cancelled";
    WorkStatusResponse["unattributable"] = "unattributable";
    WorkStatusResponse["historical"] = "historical";
    WorkStatusResponse["non_notifiable"] = "non_notifiable";
    WorkStatusResponse["section_81"] = "section_81";
    WorkStatusResponse["upcoming_enum"] = "upcoming_enum";
})(WorkStatusResponse = exports.WorkStatusResponse || (exports.WorkStatusResponse = {}));
var PermitCsvExportPrefix;
(function (PermitCsvExportPrefix) {
    PermitCsvExportPrefix["PA"] = "PA";
    PermitCsvExportPrefix["WR"] = "WR";
    PermitCsvExportPrefix["PAA"] = "PAA";
})(PermitCsvExportPrefix = exports.PermitCsvExportPrefix || (exports.PermitCsvExportPrefix = {}));
var PermitCsvExportPrefixResponse;
(function (PermitCsvExportPrefixResponse) {
    PermitCsvExportPrefixResponse["PA"] = "PA";
    PermitCsvExportPrefixResponse["WR"] = "WR";
    PermitCsvExportPrefixResponse["PAA"] = "PAA";
    PermitCsvExportPrefixResponse["upcoming_enum"] = "upcoming_enum";
})(PermitCsvExportPrefixResponse = exports.PermitCsvExportPrefixResponse || (exports.PermitCsvExportPrefixResponse = {}));
var LaneRentalAssessmentOutcome;
(function (LaneRentalAssessmentOutcome) {
    LaneRentalAssessmentOutcome["chargeable"] = "chargeable";
    LaneRentalAssessmentOutcome["potentially_chargeable"] = "potentially_chargeable";
    LaneRentalAssessmentOutcome["charges_waived"] = "charges_waived";
    LaneRentalAssessmentOutcome["exempt"] = "exempt";
    LaneRentalAssessmentOutcome["charges_not_applicable"] = "charges_not_applicable";
})(LaneRentalAssessmentOutcome = exports.LaneRentalAssessmentOutcome || (exports.LaneRentalAssessmentOutcome = {}));
var LaneRentalAssessmentOutcomeResponse;
(function (LaneRentalAssessmentOutcomeResponse) {
    LaneRentalAssessmentOutcomeResponse["chargeable"] = "chargeable";
    LaneRentalAssessmentOutcomeResponse["potentially_chargeable"] = "potentially_chargeable";
    LaneRentalAssessmentOutcomeResponse["charges_waived"] = "charges_waived";
    LaneRentalAssessmentOutcomeResponse["exempt"] = "exempt";
    LaneRentalAssessmentOutcomeResponse["charges_not_applicable"] = "charges_not_applicable";
    LaneRentalAssessmentOutcomeResponse["upcoming_enum"] = "upcoming_enum";
})(LaneRentalAssessmentOutcomeResponse = exports.LaneRentalAssessmentOutcomeResponse || (exports.LaneRentalAssessmentOutcomeResponse = {}));
var Section81Severity;
(function (Section81Severity) {
    Section81Severity["high"] = "high";
    Section81Severity["low"] = "low";
})(Section81Severity = exports.Section81Severity || (exports.Section81Severity = {}));
var Section81SeverityResponse;
(function (Section81SeverityResponse) {
    Section81SeverityResponse["high"] = "high";
    Section81SeverityResponse["low"] = "low";
    Section81SeverityResponse["upcoming_enum"] = "upcoming_enum";
})(Section81SeverityResponse = exports.Section81SeverityResponse || (exports.Section81SeverityResponse = {}));
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
var AlterationStatusResponse;
(function (AlterationStatusResponse) {
    AlterationStatusResponse["submitted"] = "submitted";
    AlterationStatusResponse["granted"] = "granted";
    AlterationStatusResponse["granted_with_duration_challenge"] = "granted_with_duration_challenge";
    AlterationStatusResponse["refused"] = "refused";
    AlterationStatusResponse["deemed"] = "deemed";
    AlterationStatusResponse["cancelled"] = "cancelled";
    AlterationStatusResponse["revoked"] = "revoked";
    AlterationStatusResponse["auto_applied"] = "auto_applied";
    AlterationStatusResponse["upcoming_enum"] = "upcoming_enum";
})(AlterationStatusResponse = exports.AlterationStatusResponse || (exports.AlterationStatusResponse = {}));
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
var AlterationTypeResponse;
(function (AlterationTypeResponse) {
    AlterationTypeResponse["PROMOTER_IMPOSED_CHANGE"] = "PROMOTER_IMPOSED_CHANGE";
    AlterationTypeResponse["PROMOTER_CHANGE_REQUEST"] = "PROMOTER_CHANGE_REQUEST";
    AlterationTypeResponse["HA_CHANGE_REQUEST"] = "HA_CHANGE_REQUEST";
    AlterationTypeResponse["HA_IMPOSED_CHANGE"] = "HA_IMPOSED_CHANGE";
    AlterationTypeResponse["WORK_EXTENSION"] = "WORK_EXTENSION";
    AlterationTypeResponse["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    AlterationTypeResponse["MODIFIED_PERMIT"] = "MODIFIED_PERMIT";
    AlterationTypeResponse["upcoming_enum"] = "upcoming_enum";
})(AlterationTypeResponse = exports.AlterationTypeResponse || (exports.AlterationTypeResponse = {}));
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
var CommentTopicResponse;
(function (CommentTopicResponse) {
    CommentTopicResponse["GENERAL"] = "GENERAL";
    CommentTopicResponse["SECTION_74"] = "SECTION_74";
    CommentTopicResponse["INSPECTION"] = "INSPECTION";
    CommentTopicResponse["FPN"] = "FPN";
    CommentTopicResponse["OVERRUN"] = "OVERRUN";
    CommentTopicResponse["FORWARD_PLAN"] = "FORWARD_PLAN";
    CommentTopicResponse["CHANGE_REQUEST"] = "CHANGE_REQUEST";
    CommentTopicResponse["IMPOSED_VARIATION"] = "IMPOSED_VARIATION";
    CommentTopicResponse["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    CommentTopicResponse["SECTION_81"] = "SECTION_81";
    CommentTopicResponse["upcoming_enum"] = "upcoming_enum";
})(CommentTopicResponse = exports.CommentTopicResponse || (exports.CommentTopicResponse = {}));
var InspectionType;
(function (InspectionType) {
    InspectionType["live_site"] = "live_site";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["non_compliance_follow_up"] = "non_compliance_follow_up";
    InspectionType["section_81"] = "section_81";
})(InspectionType = exports.InspectionType || (exports.InspectionType = {}));
var InspectionTypeResponse;
(function (InspectionTypeResponse) {
    InspectionTypeResponse["live_site"] = "live_site";
    InspectionTypeResponse["reinstatement"] = "reinstatement";
    InspectionTypeResponse["non_compliance_follow_up"] = "non_compliance_follow_up";
    InspectionTypeResponse["section_81"] = "section_81";
    InspectionTypeResponse["upcoming_enum"] = "upcoming_enum";
})(InspectionTypeResponse = exports.InspectionTypeResponse || (exports.InspectionTypeResponse = {}));
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
var InspectionOutcomeResponse;
(function (InspectionOutcomeResponse) {
    InspectionOutcomeResponse["passed"] = "passed";
    InspectionOutcomeResponse["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcomeResponse["failed_low"] = "failed_low";
    InspectionOutcomeResponse["failed_high"] = "failed_high";
    InspectionOutcomeResponse["further_inspections_required"] = "further_inspections_required";
    InspectionOutcomeResponse["agreed_site_compliance"] = "agreed_site_compliance";
    InspectionOutcomeResponse["non_compliant_with_conditions"] = "non_compliant_with_conditions";
    InspectionOutcomeResponse["works_stopped_apparatus_remaining"] = "works_stopped_apparatus_remaining";
    InspectionOutcomeResponse["works_in_progress_no_carriageway_incursion"] = "works_in_progress_no_carriageway_incursion";
    InspectionOutcomeResponse["works_in_progress"] = "works_in_progress";
    InspectionOutcomeResponse["works_stopped"] = "works_stopped";
    InspectionOutcomeResponse["upcoming_enum"] = "upcoming_enum";
})(InspectionOutcomeResponse = exports.InspectionOutcomeResponse || (exports.InspectionOutcomeResponse = {}));
var OffenceCode;
(function (OffenceCode) {
    OffenceCode["offence_code_05"] = "offence_code_05";
    OffenceCode["offence_code_06"] = "offence_code_06";
    OffenceCode["offence_code_08"] = "offence_code_08";
    OffenceCode["offence_code_09"] = "offence_code_09";
})(OffenceCode = exports.OffenceCode || (exports.OffenceCode = {}));
var OffenceCodeResponse;
(function (OffenceCodeResponse) {
    OffenceCodeResponse["offence_code_05"] = "offence_code_05";
    OffenceCodeResponse["offence_code_06"] = "offence_code_06";
    OffenceCodeResponse["offence_code_08"] = "offence_code_08";
    OffenceCodeResponse["offence_code_09"] = "offence_code_09";
    OffenceCodeResponse["upcoming_enum"] = "upcoming_enum";
})(OffenceCodeResponse = exports.OffenceCodeResponse || (exports.OffenceCodeResponse = {}));
