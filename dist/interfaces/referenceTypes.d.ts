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
    paa = "paa"
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
