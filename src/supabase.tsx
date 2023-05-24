import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://okrxaaeemdsjenccftlt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcnhhYWVlbWRzamVuY2NmdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzNTAzODYsImV4cCI6MTk5OTkyNjM4Nn0.FmsgdrOu5Rw3jX-XmULSOBgccVYSpwFFZswc62qiHSU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase