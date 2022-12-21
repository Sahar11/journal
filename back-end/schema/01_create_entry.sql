-- schema/01_create_entry.sql
DROP TABLE IF EXISTS patients CASCADE;
-- CREATE USERS
CREATE TABLE entry (
  person_id int,
  entry_id SERIAL PRIMARY KEY,
  entry_date DATE,
  entry_time TIME,
  entry_text VARCHAR(2000) ,
);