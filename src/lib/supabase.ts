import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spgmkciybbmcpvrphozr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZ21rY2l5YmJtY3B2cnBob3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMTA0NjMsImV4cCI6MjA5MjY4NjQ2M30.JzII1nmWaZjy9iKm-Xj-96M0NApzE9uFIXzD40IAGOA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
