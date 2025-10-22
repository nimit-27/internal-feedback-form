package com.feedback.api.service;

import com.feedback.api.dto.FeedbackResponse;
import com.feedback.api.dto.FeedbackSubmissionRequest;
import com.feedback.api.model.FeedbackEntry;
import com.feedback.api.repository.FeedbackRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.IOException;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Transactional
    public FeedbackResponse submitFeedback(FeedbackSubmissionRequest request) {
        FeedbackEntry entry = mapToEntity(request);
        FeedbackEntry saved = feedbackRepository.save(entry);

        if (!StringUtils.hasText(saved.getSerialNo())) {
            saved.setSerialNo(generateSerialNumber(saved.getId()));
            saved = feedbackRepository.save(saved);
        }

        return mapToResponse(saved);
    }

    private FeedbackEntry mapToEntity(FeedbackSubmissionRequest request) {
        FeedbackEntry entry = new FeedbackEntry();
        entry.setDivision(request.getDivision());
        entry.setDepot(request.getDepot());
        entry.setSubmittedBy(request.getSubmittedBy());
        entry.setContactNumber(request.getContactNumber());
        entry.setDateOfObservation(request.getDateOfObservation());
        entry.setModule(request.getModule());
        entry.setDescribeObservation(request.getDescribeObservation());
        entry.setTestId(request.getTestId());
        entry.setScenario(request.getScenario());
        entry.setExpectedResult(request.getExpectedResult());
        entry.setActualResult(request.getActualResult());
        entry.setRemark(request.getRemark());
        entry.setSuggestions(request.getSuggestions());

        if (request.getAttachment() != null && !request.getAttachment().isEmpty()) {
            try {
                entry.setAttachmentData(request.getAttachment().getBytes());
                entry.setAttachmentName(request.getAttachment().getOriginalFilename());
                entry.setAttachmentType(request.getAttachment().getContentType());
            } catch (IOException ex) {
                throw new IllegalStateException("Unable to read uploaded file", ex);
            }
        }

        return entry;
    }

    private FeedbackResponse mapToResponse(FeedbackEntry entry) {
        FeedbackResponse response = new FeedbackResponse();
        response.setSerialNo(entry.getSerialNo() != null ? entry.getSerialNo() : String.valueOf(entry.getId()));
        response.setDivision(entry.getDivision());
        response.setDepot(entry.getDepot());
        response.setSubmittedBy(entry.getSubmittedBy());
        response.setContactNumber(entry.getContactNumber());
        response.setDateOfObservation(entry.getDateOfObservation());
        response.setModule(entry.getModule());
        response.setDescribeObservation(entry.getDescribeObservation());
        response.setTestId(entry.getTestId());
        response.setScenario(entry.getScenario());
        response.setExpectedResult(entry.getExpectedResult());
        response.setActualResult(entry.getActualResult());
        response.setAttachmentName(entry.getAttachmentName());
        response.setAttachmentType(entry.getAttachmentType());
        response.setAttachmentIncluded(entry.getAttachmentData() != null && entry.getAttachmentData().length > 0);
        response.setRemark(entry.getRemark());
        response.setSuggestions(entry.getSuggestions());
        return response;
    }

    private String generateSerialNumber(Long id) {
        if (id == null) {
            return null;
        }
        return String.format("FB-%06d", id);
    }
}
