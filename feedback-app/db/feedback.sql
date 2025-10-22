CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    serial_no VARCHAR(20) UNIQUE,
    division VARCHAR(100) NOT NULL,
    depot VARCHAR(100) NOT NULL,
    submitted_by VARCHAR(150) NOT NULL,
    contact_number VARCHAR(50),
    date_of_observation DATE NOT NULL,
    module VARCHAR(150) NOT NULL,
    describe_observation TEXT NOT NULL,
    test_id VARCHAR(100),
    scenario TEXT,
    expected_result TEXT,
    actual_result TEXT,
    attachment_name VARCHAR(255),
    attachment_type VARCHAR(100),
    attachment_data BYTEA,
    remark TEXT,
    suggestions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO feedback (
    serial_no,
    division,
    depot,
    submitted_by,
    contact_number,
    date_of_observation,
    module,
    describe_observation,
    test_id,
    scenario,
    expected_result,
    actual_result,
    attachment_name,
    attachment_type,
    attachment_data,
    remark,
    suggestions
) VALUES
('FB-000001', 'Division A', 'Depot 1', 'QA Analyst', '1234567890', '2024-11-01', 'Module Alpha', 'Login button misaligned on the dashboard.', 'TC-101', 'User logs into the portal using valid credentials.', 'Dashboard should display with aligned controls.', 'Dashboard loads but login button overlaps navigation.', NULL, NULL, NULL, 'Requires UI polish', 'Adjust layout spacing for the login button');
