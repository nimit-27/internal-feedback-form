CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO feedback (name, message) VALUES
('John Doe', 'Great application!'),
('Jane Smith', 'I found a bug in the feedback form.'),
('Alice Johnson', 'Very user-friendly interface.');