package com.feedback.api.repository;

import com.feedback.api.model.FeedbackEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedbackEntry, Long> {
}
