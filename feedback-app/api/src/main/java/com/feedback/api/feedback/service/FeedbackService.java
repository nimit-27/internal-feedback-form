package com.feedback.api.feedback.service;

import com.feedback.api.feedback.dto.FeedbackRequest;
import com.feedback.api.feedback.dto.FeedbackResponse;

public interface FeedbackService {

    FeedbackResponse submitFeedback(FeedbackRequest request);
}
