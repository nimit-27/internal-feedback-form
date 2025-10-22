package com.feedback.api.feedback.service;

import com.feedback.api.feedback.dto.FeedbackRequest;
import com.feedback.api.feedback.dto.FeedbackResponse;
import com.feedback.api.feedback.entity.Feedback;
import com.feedback.api.feedback.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;

    @Override
    public FeedbackResponse submitFeedback(FeedbackRequest request) {
        Feedback feedback = feedbackRepository.save(
                Feedback.builder()
                        .name(request.getName())
                        .message(request.getMessage())
                        .build()
        );

        return FeedbackResponse.builder()
                .id(feedback.getId())
                .name(feedback.getName())
                .message(feedback.getMessage())
                .createdAt(feedback.getCreatedAt())
                .build();
    }
}
