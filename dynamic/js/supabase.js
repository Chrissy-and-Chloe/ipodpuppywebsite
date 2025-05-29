// Initialize Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faqohhfkuvbbiiltngoa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcW9oaGZrdXZiYmlpbHRuZ29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDA1OTEsImV4cCI6MjA2NDExNjU5MX0.s9jgIWZMU_fDUmTlYMDN-Gmjhs546HpgPbZ-ApXhOJg';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Example function: Fetch data from a table
async function fetchData() {
  const { data, error } = await supabaseClient
    .from('your_table_name')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Fetched data:', data);
  }
}

fetchData();
