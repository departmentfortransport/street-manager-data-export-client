export declare enum FPNStatus {
    issued = "issued",
    accepted = "accepted",
    paid = "paid",
    paid_discounted = "paid_discounted",
    disputed = "disputed",
    withdrawn = "withdrawn"
}
export declare enum Section81Status {
    issued = "issued",
    acknowledged = "acknowledged",
    accepted = "accepted",
    accepted_fixed = "accepted_fixed",
    rejected = "rejected",
    resolved_by_ha = "resolved_by_ha",
    cancelled = "cancelled"
}
export declare enum ForwardPlanStatus {
    raised = "raised",
    cancelled = "cancelled",
    progressed = "progressed"
}
export declare enum ReinstatementStatus {
    interim = "interim",
    permanent = "permanent"
}
export declare enum PermitStatus {
    submitted = "submitted",
    granted = "granted",
    permit_modification_request = "permit_modification_request",
    refused = "refused",
    closed = "closed",
    cancelled = "cancelled",
    revoked = "revoked",
    progressed = "progressed"
}
export declare enum InspectionResponseType {
    inspection = "inspection",
    reinspection = "reinspection"
}
export declare enum WorkCategory {
    minor = "minor",
    standard = "standard",
    major = "major",
    immediate_urgent = "immediate_urgent",
    immediate_emergency = "immediate_emergency",
    paa = "paa",
    hs2_highway = "hs2_highway"
}
export declare enum WorkStatus {
    planned = "planned",
    in_progress = "in_progress",
    completed = "completed",
    cancelled = "cancelled",
    unattributable = "unattributable",
    historical = "historical",
    non_notifiable = "non_notifiable",
    section_81 = "section_81"
}
export declare enum PermitCsvExportPrefix {
    PA = "PA",
    WR = "WR",
    PAA = "PAA"
}
export declare enum LaneRentalAssessmentOutcome {
    chargeable = "chargeable",
    potentially_chargeable = "potentially_chargeable",
    charges_waived = "charges_waived",
    exempt = "exempt",
    charges_not_applicable = "charges_not_applicable"
}
export declare enum Section81Severity {
    high = "high",
    low = "low"
}
export declare enum AlterationStatus {
    submitted = "submitted",
    granted = "granted",
    granted_with_duration_challenge = "granted_with_duration_challenge",
    refused = "refused",
    deemed = "deemed",
    cancelled = "cancelled",
    revoked = "revoked",
    auto_applied = "auto_applied"
}
export declare enum AlterationType {
    PROMOTER_IMPOSED_CHANGE = "PROMOTER_IMPOSED_CHANGE",
    PROMOTER_CHANGE_REQUEST = "PROMOTER_CHANGE_REQUEST",
    HA_CHANGE_REQUEST = "HA_CHANGE_REQUEST",
    HA_IMPOSED_CHANGE = "HA_IMPOSED_CHANGE",
    WORK_EXTENSION = "WORK_EXTENSION",
    DURATION_CHALLENGE = "DURATION_CHALLENGE",
    MODIFIED_PERMIT = "MODIFIED_PERMIT"
}
export declare enum CommentTopic {
    GENERAL = "GENERAL",
    SECTION_74 = "SECTION_74",
    INSPECTION = "INSPECTION",
    FPN = "FPN",
    OVERRUN = "OVERRUN",
    FORWARD_PLAN = "FORWARD_PLAN",
    CHANGE_REQUEST = "CHANGE_REQUEST",
    IMPOSED_VARIATION = "IMPOSED_VARIATION",
    DURATION_CHALLENGE = "DURATION_CHALLENGE",
    SECTION_81 = "SECTION_81"
}
export declare enum InspectionType {
    live_site = "live_site",
    reinstatement = "reinstatement",
    non_compliance_follow_up = "non_compliance_follow_up",
    section_81 = "section_81"
}
export declare enum InspectionOutcome {
    passed = "passed",
    unable_to_complete_inspection = "unable_to_complete_inspection",
    failed_low = "failed_low",
    failed_high = "failed_high",
    further_inspections_required = "further_inspections_required",
    agreed_site_compliance = "agreed_site_compliance",
    non_compliant_with_conditions = "non_compliant_with_conditions",
    works_stopped_apparatus_remaining = "works_stopped_apparatus_remaining",
    works_in_progress_no_carriageway_incursion = "works_in_progress_no_carriageway_incursion",
    works_in_progress = "works_in_progress",
    works_stopped = "works_stopped"
}
export declare enum OffenceCode {
    offence_code_05 = "offence_code_05",
    offence_code_06 = "offence_code_06",
    offence_code_08 = "offence_code_08",
    offence_code_09 = "offence_code_09"
}
