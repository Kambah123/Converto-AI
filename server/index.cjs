const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

// Load the Markdown knowledge base
const mdFilePath = path.join(__dirname, '../public/Pechal Chatbot Knowledge Base (Deep Dive).md');
let knowledgeBase = '';
try {
  knowledgeBase = fs.readFileSync(mdFilePath, 'utf-8');
} catch (err) {
  console.error('Failed to load knowledge base:', err);
}

// Placeholder chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  // Use a simple context window from the knowledge base (for demo, use first 1000 chars)
  const context = knowledgeBase.slice(0, 1000);
  const systemPrompt = `You are Pechal Function, an AI assistant for Pechal. Use the provided knowledge base below as your primary source. If the answer is not in the knowledge base but the question is about Pechal, use your general knowledge to answer, but always relate your answer to Pechal. If the question is not about Pechal, respond with: 'I can only answer questions about Pechal.'\n\nKnowledge base:\n${context}`;
  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ]
      })
    });
    const openaiData = await openaiRes.json();
    const reply = openaiData.choices?.[0]?.message?.content || 'Sorry, I could not get a response.';
    res.json({ reply });
  } catch (err) {
    console.error('OpenAI API error:', err);
    res.status(500).json({ reply: 'Error contacting OpenAI API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot backend running on http://localhost:${PORT}`);
}); 