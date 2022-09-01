-- migrate:up
ALTER TABLE resumes 
MODIFY created_at DATE,
MODIFY updated_at DATE,
ADD COLUMN title VARCHAR(100)

-- migrate:down

