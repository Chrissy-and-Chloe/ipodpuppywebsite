// Initialize Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faqohhfkuvbbiiltngoa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcW9oaGZrdXZiYmlpbHRuZ29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDA1OTEsImV4cCI6MjA2NDExNjU5MX0.s9jgIWZMU_fDUmTlYMDN-Gmjhs546HpgPbZ-ApXhOJg';

const supabaseClient = createClient(supabaseUrl, supabaseKey);


// 📝 Submit a Message
async function submitMessage(messageText) {
  const { data, error } = await supabaseClient
    .from('Messages')
    .insert([{ message: messageText, created_at: new Date().toISOString() }]);

  if (error) {
    console.error('Error submitting message:', error);
    alert('Failed to submit message.');
  } else {
    alert('Message submitted successfully!');
    console.log('Submitted message:', data);
  }
}

// 🎨 Submit a Drawing
async function submitDrawing(base64Image) {
  const { data, error } = await supabaseClient
    .from('Drawings')
    .insert([{ image_url: base64Image, created_at: new Date().toISOString() }]);

  if (error) {
    console.error('Error submitting drawing:', error);
    alert('Failed to submit drawing.');
  } else {
    alert('Drawing submitted successfully!');
    console.log('Submitted drawing:', data);
  }
}

// 🚀 Attach to existing buttons (replace existing submission logic)
document.getElementById("submitMessage").addEventListener("click", () => {
  const message = document.getElementById("messageInput").value;
  if (message.trim() !== "") {
    submitMessage(message);
  } else {
    alert("Please enter a message!");
  }
});

document.getElementById("submitDrawing").addEventListener("click", () => {
  const canvas = document.getElementById("drawingCanvas");
  const dataURL = canvas.toDataURL("image/png");  // Converts canvas to base64 image
  submitDrawing(dataURL);
});

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
