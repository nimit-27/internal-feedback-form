package com.feedback.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public class FeedbackSubmissionRequest {

    @NotBlank(message = "Division is required")
    private String division;

    @NotBlank(message = "Depot is required")
    private String depot;

    @NotBlank(message = "Submitted by is required")
    private String submittedBy;

    @NotBlank(message = "Contact number is required")
    private String contactNumber;

    @NotNull(message = "Date of observation is required")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dateOfObservation;

    @NotBlank(message = "Module is required")
    private String module;

    @NotBlank(message = "Describe observation is required")
    private String describeObservation;

    private String testId;

    private String scenario;

    private String expectedResult;

    private String actualResult;

    private MultipartFile attachment;

    private String remark;

    private String suggestions;

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

    public MultipartFile getAttachment() {
        return attachment;
    }

    public void setAttachment(MultipartFile attachment) {
        this.attachment = attachment;
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
