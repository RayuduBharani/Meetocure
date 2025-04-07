-- Insert Users (30 records)
INSERT INTO "User" (id, full_name, phone, role, gender, dob, profile_image, is_verified, created_at) VALUES
('usr_1', 'John Patient', '+1111111111', 'PATIENT', 'Male', '1990-01-01', 'john.jpg', true, NOW()),
('usr_2', 'Alice Patient', '+1111111112', 'PATIENT', 'Female', '1985-05-05', 'alice.jpg', true, NOW()),
('usr_3', 'Bob Patient', '+1111111113', 'PATIENT', 'Male', '1978-07-07', NULL, false, NOW()),
('usr_4', 'Emma Patient', '+1111111114', 'PATIENT', 'Female', '2000-12-12', 'emma.jpg', true, NOW()),
('usr_5', 'Mike Patient', '+1111111115', 'PATIENT', 'Male', '1995-03-15', NULL, true, NOW()),
('usr_6', 'Dr. Smith', '+2222222221', 'DOCTOR', 'Male', '1980-04-20', 'smith.jpg', true, NOW()),
('usr_7', 'Dr. Wilson', '+2222222222', 'DOCTOR', 'Female', '1975-08-14', 'wilson.jpg', true, NOW()),
('usr_8', 'Dr. Brown', '+2222222223', 'DOCTOR', 'Male', '1992-11-30', NULL, true, NOW()),
('usr_9', 'Dr. Taylor', '+2222222224', 'DOCTOR', 'Female', '1988-06-25', 'taylor.jpg', true, NOW()),
('usr_10', 'Dr. Lee', '+2222222225', 'DOCTOR', 'Male', '1970-02-28', 'lee.jpg', true, NOW()),
('usr_11', 'Admin One', '+3333333331', 'ADMIN', 'Male', '1982-09-09', 'admin1.jpg', true, NOW());

-- Insert Patients (5 records)
INSERT INTO "Patient" (user_id, blood_group, chronic_conditions, emergency_contact, created_at) VALUES
('usr_1', 'O+', 'Diabetes', '+1999999999', NOW()),
('usr_2', 'A-', 'Hypertension', '+1888888888', NOW()),
('usr_3', 'B+', NULL, '+1777777777', NOW()),
('usr_4', 'AB+', 'Asthma', '+1666666666', NOW()),
('usr_5', 'O-', NULL, '+1555555555', NOW());

-- Insert Doctors (5 records)
INSERT INTO "Doctor" (user_id, license_number, specialization, experience_years, qualification, consultation_fee, available, location, created_at) VALUES
('usr_6', 'LIC-12345', 'Cardiology', 15, 'MD, PhD', 200.00, true, 'New York', NOW()),
('usr_7', 'LIC-67890', 'Dermatology', 10, 'MD', 150.00, true, 'Los Angeles', NOW()),
('usr_8', 'LIC-54321', 'Pediatrics', 8, 'MD', 120.00, true, 'Chicago', NOW()),
('usr_9', 'LIC-09876', 'Orthopedics', 20, 'MBBS, MS', 250.00, true, 'Houston', NOW()),
('usr_10', 'LIC-13579', 'Neurology', 12, 'MD, DM', 300.00, true, 'Miami', NOW());

-- Insert Hospitals (5 records)
INSERT INTO "Hospital" (name, about, contact_email, contact_phone, address_line, city, state, postal_code, registered_at) VALUES
('City General', 'Main city hospital', 'info@citygeneral.com', '+1123456789', '123 Main St', 'New York', 'NY', '10001', NOW()),
('Sunrise Clinic', 'Specialized care center', 'contact@sunrise.com', '+1098765432', '456 Oak Ave', 'Los Angeles', 'CA', '90001', NOW()),
('Central Health', 'Children''s specialty hospital', 'help@centralhealth.org', '+1187654321', '789 Pine Rd', 'Chicago', 'IL', '60007', NOW()),
('Westside Medical', 'Advanced surgical center', 'info@westside.com', '+1176543210', '321 Elm St', 'Houston', 'TX', '77001', NOW()),
('Coastal Care', 'Neurology center of excellence', 'support@coastalcare.com', '+1165432109', '654 Beach Blvd', 'Miami', 'FL', '33101', NOW());

-- Insert HospitalDoctor relationships (10 records)
INSERT INTO "HospitalDoctor" (hospital_id, doctor_id, is_primary, joined_at) VALUES
(1, 1, true, NOW()),
(2, 2, true, NOW()),
(3, 3, true, NOW()),
(4, 4, true, NOW()),
(5, 5, true, NOW()),
(1, 2, false, NOW()),
(2, 3, false, NOW()),
(3, 4, false, NOW()),
(4, 5, false, NOW()),
(5, 1, false, NOW());

-- Insert DoctorAvailability (25 records)
INSERT INTO "DoctorAvailability" (doctor_id, day_of_week, start_time, end_time, availability_type, location) VALUES
-- Doctor 1
(1, 'Mon', '09:00', '17:00', 'available', 'City General'),
(1, 'Wed', '10:00', '16:00', 'available', 'City General'),
(1, 'Fri', '13:00', '19:00', 'virtual_only', 'Online'),
-- Doctor 2
(2, 'Tue', '08:00', '12:00', 'available', 'Sunrise Clinic'),
(2, 'Thu', '14:00', '18:00', 'available', 'Sunrise Clinic'),
-- Doctor 3
(3, 'Mon', '09:00', '17:00', 'available', 'Central Health'),
(3, 'Wed', '09:00', '17:00', 'available', 'Central Health'),
-- Doctor 4
(4, 'Tue', '10:00', '16:00', 'available', 'Westside Medical'),
(4, 'Fri', '08:00', '12:00', 'available', 'Westside Medical'),
-- Doctor 5
(5, 'Mon', '07:00', '15:00', 'available', 'Coastal Care'),
(5, 'Wed', '07:00', '15:00', 'available', 'Coastal Care');

-- Insert Appointments (20 records)
INSERT INTO "Appointment" (patient_id, doctor_id, appointment_date, status, meeting_link, notes) VALUES
(1, 1, NOW() + INTERVAL '1 DAY', 'pending', 'zoom.us/j/123', 'Regular checkup'),
(1, 2, NOW() + INTERVAL '2 DAYS', 'confirmed', 'meet.google.com/abc', 'Skin consultation'),
(2, 3, NOW() - INTERVAL '3 DAYS', 'completed', NULL, 'Child vaccination'),
(2, 4, NOW() - INTERVAL '1 DAY', 'completed', NULL, 'Knee pain review'),
(3, 5, NOW() + INTERVAL '5 DAYS', 'pending', 'teams.live/xyz', 'Neurological exam'),
(3, 1, NOW() - INTERVAL '2 DAYS', 'cancelled', NULL, 'Canceled appointment'),
(4, 2, NOW() + INTERVAL '3 DAYS', 'confirmed', 'zoom.us/j/456', 'Follow-up visit'),
(4, 3, NOW() - INTERVAL '4 DAYS', 'completed', NULL, 'Annual checkup'),
(5, 4, NOW() + INTERVAL '6 DAYS', 'pending', NULL, 'Fracture review'),
(5, 5, NOW() - INTERVAL '1 WEEK', 'completed', 'meet.google.com/def', 'Migraine follow-up');

-- Insert Payments (20 records)
INSERT INTO "Payment" (user_id, appointment_id, amount, payment_method, transaction_id, status) VALUES
('usr_1', 1, 200.00, 'credit_card', 'txn_001', 'success'),
('usr_1', 2, 150.00, 'paypal', 'txn_002', 'pending'),
('usr_2', 3, 120.00, 'insurance', 'txn_003', 'success'),
('usr_2', 4, 250.00, 'credit_card', 'txn_004', 'success'),
('usr_3', 5, 300.00, 'debit_card', 'txn_005', 'pending'),
('usr_3', 6, 200.00, 'credit_card', 'txn_006', 'failed'),
('usr_4', 7, 150.00, 'paypal', 'txn_007', 'success'),
('usr_4', 8, 120.00, 'insurance', 'txn_008', 'success'),
('usr_5', 9, 250.00, 'credit_card', 'txn_009', 'pending'),
('usr_5', 10, 300.00, 'debit_card', 'txn_010', 'success');

-- Insert MedicalRecords (10 records)
INSERT INTO "MedicalRecord" (patient_id, file_url, record_type, description, uploaded_by) VALUES
(1, 'records/john1.pdf', 'prescription', 'Diabetes medication', 'usr_1'),
(1, 'records/john2.pdf', 'lab_result', 'Blood work results', 'usr_6'),
(2, 'records/alice1.pdf', 'xray', 'Chest X-ray', 'usr_7'),
(3, 'records/bob1.pdf', 'vaccination', 'COVID-19 vaccine', 'usr_8'),
(4, 'records/emma1.pdf', 'allergy_test', 'Pollen allergy results', 'usr_9'),
(5, 'records/mike1.pdf', 'mri', 'Brain MRI scan', 'usr_10');

-- Insert Reviews (10 records)
INSERT INTO "Review" (patient_id, doctor_id, rating, review) VALUES
(1, 1, 5, 'Excellent cardiologist!'),
(2, 2, 4, 'Good experience overall'),
(3, 3, 5, 'Very patient with children'),
(4, 4, 3, 'Wait time was too long'),
(5, 5, 4, 'Professional and knowledgeable'),
(1, 2, 5, 'Clear diagnosis and treatment'),
(2, 3, 4, 'Friendly staff'),
(3, 4, 2, 'Needs better communication'),
(4, 5, 5, 'Solved my chronic issues'),
(5, 1, 4, 'Good but expensive');

-- Insert Notifications (15 records)
INSERT INTO "Notification" (user_id, message, seen) VALUES
('usr_1', 'Your appointment is confirmed', true),
('usr_1', 'Payment received successfully', false),
('usr_2', 'Lab results are available', true),
('usr_6', 'New patient appointment request', false),
('usr_7', 'Schedule change notification', true),
('usr_10', 'New review received', false);

-- Insert SupportTickets (5 records)
INSERT INTO "SupportTicket" (user_id, subject, description, status) VALUES
('usr_1', 'Login issues', 'Cannot access my account', 'open'),
('usr_2', 'Payment problem', 'Double charged for appointment', 'open'),
('usr_6', 'Profile update', 'Need to change license information', 'resolved'),
('usr_10', 'System bug', 'Calendar sync not working', 'closed'),
('usr_5', 'Question about results', 'How to interpret lab values?', 'open');

-- Insert DiscountCoupons (5 records)
INSERT INTO "DiscountCoupon" (code, description, discount_type, value, max_usage, expiry_date) VALUES
('SUMMER20', 'Summer special', 'percentage', 20.00, 100, NOW() + INTERVAL '30 DAYS'),
('FLAT50', 'Flat discount', 'flat', 50.00, 50, NOW() + INTERVAL '60 DAYS'),
('FIRST10', 'First-time user', 'percentage', 10.00, 200, NOW() + INTERVAL '90 DAYS'),
('HEALTH25', 'Health month special', 'percentage', 25.00, 75, NOW() + INTERVAL '45 DAYS'),
('SAVE100', 'Big savings', 'flat', 100.00, 20, NOW() + INTERVAL '15 DAYS');