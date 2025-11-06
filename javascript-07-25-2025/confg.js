// only supabase configuration

const supabaseUrl = 'https://fwoctfdzfulnthnbvyqt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3b2N0ZmR6ZnVsbnRobmJ2eXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNDk2MzMsImV4cCI6MjA2ODgyNTYzM30.52TUJwHbXXUyd8oo5gPFDMXU467sp_PCzwqgSZzdcI0'

export const client = supabase.createClient(supabaseUrl, supabaseKey)


// console.log(client);