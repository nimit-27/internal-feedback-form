package com.feedback.api.feedback.dto;

import lombok.Builder;
import lombok.Value;

import java.time.LocalDateTime;

@Value
@Builder
public class FeedbackResponse {
    Long id;
    String name;
    String message;
    LocalDateTime createdAt;
}
