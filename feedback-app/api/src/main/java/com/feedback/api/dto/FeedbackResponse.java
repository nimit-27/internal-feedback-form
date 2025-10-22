package com.feedback.api.dto;

import java.time.LocalDate;

public class FeedbackResponse {

    private String serialNo;
    private String division;
    private String depot;
    private String submittedBy;
    private String contactNumber;
    private LocalDate dateOfObservation;
    private String module;
    private String describeObservation;
    private String testId;
    private String scenario;
    private String expectedResult;
    private String actualResult;
    private String attachmentName;
    private String attachmentType;
    private boolean attachmentIncluded;
    private String remark;
    private String suggestions;

    public String getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(String serialNo) {
        this.serialNo = serialNo;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getDepot() {
        return depot;
    }

    public void setDepot(String depot) {
        this.depot = depot;
    }

    public String getSubmittedBy() {
        return submittedBy;
    }

    public void setSubmittedBy(String submittedBy) {
        this.submittedBy = submittedBy;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public LocalDate getDateOfObservation() {
        return dateOfObservation;
    }

    public void setDateOfObservation(LocalDate dateOfObservation) {
        this.dateOfObservation = dateOfObservation;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getDescribeObservation() {
        return describeObservation;
    }

    public void setDescribeObservation(String describeObservation) {
        this.describeObservation = describeObservation;
    }

    public String getTestId() {
        return testId;
    }

    public void setTestId(String testId) {
        this.testId = testId;
    }

    public String getScenario() {
        return scenario;
    }

    public void setScenario(String scenario) {
        this.scenario = scenario;
    }

    public String getExpectedResult() {
        return expectedResult;
    }

    public void setExpectedResult(String expectedResult) {
        this.expectedResult = expectedResult;
    }

    public String getActualResult() {
        return actualResult;
    }

    public void setActualResult(String actualResult) {
        this.actualResult = actualResult;
    }

    public String getAttachmentName() {
        return attachmentName;
    }

    public void setAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
    }

    public String getAttachmentType() {
        return attachmentType;
    }

    public void setAttachmentType(String attachmentType) {
        this.attachmentType = attachmentType;
    }

    public boolean isAttachmentIncluded() {
        return attachmentIncluded;
    }

    public void setAttachmentIncluded(boolean attachmentIncluded) {
        this.attachmentIncluded = attachmentIncluded;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(String suggestions) {
        this.suggestions = suggestions;
    }
}
