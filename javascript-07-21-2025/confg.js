// only supabase configuration

const supabaseUrl = 'https://vshspktqouvqulcrdetk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaHNwa3Rxb3V2cXVsY3JkZXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzQ3ODQsImV4cCI6MjA2ODY1MDc4NH0.baBT8ENUxRTUQak0y7Wo_lAVOpyAmSU_XRN4Ub6kCfU'

export const client = supabase.createClient(supabaseUrl, supabaseKey)


// console.log(client);


