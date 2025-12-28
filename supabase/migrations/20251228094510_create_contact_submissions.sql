/*
  # Contact Form Submissions Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Sender's name
      - `email` (text) - Sender's email address
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (anyone can submit)
    - Add policy for viewing submissions (only authenticated users can view)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);