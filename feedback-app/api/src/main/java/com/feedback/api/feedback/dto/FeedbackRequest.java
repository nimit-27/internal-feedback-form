package com.feedback.api.feedback.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class FeedbackRequest {

    @NotBlank(message = "Name is required")
    String name;

    @NotBlank(message = "Message is required")
    String message;
}
