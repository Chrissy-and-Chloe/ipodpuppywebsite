// /assets/js/supabase.js
const SUPABASE_URL = 'https://YOUR_PROJECT_REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example functions (optional)
async function submitDrawing(dataURL) {
  const { data, error } = await supabase
    .from('drawings')
    .insert([{ image_data: dataURL }]);
  return { data, error };
}

async function submitMessage(message) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ message }]);
  return { data, error };
}

// Export if using modules
// export { submitDrawing, submitMessage };
