const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const API_KEY = "b487e073-7a6f-4b72-8dd1-46a7a033c6bf";
const ASSISTANT_ID = "37162a61-fdf9-4f4c-a44e-52a3aa4032bc";
const CHAT_ASSISTANT_ID = "da0460f1-b585-4ae8-874c-482ca2239d08";

// Start a chat session
async function startSession() {
  const res = await fetch('https://agentivehub.com/api/chat/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: API_KEY,
      assistant_id: ASSISTANT_ID,
    }),
  });
  const data = await res.json();
  return data.session_id;
}

// Send a message
router.post('/agentive-chat', async (req, res) => {
  try {
    const { message } = req.body;
    const session_id = await startSession();

    const chat_response = {
      api_key: API_KEY,
      session_id,
      type: "custom_code",
      assistant_id: CHAT_ASSISTANT_ID,
      messages: [{ role: "user", content: message }],
    };

    const chatRes = await fetch('https://agentivehub.com/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chat_response),
    });

    const chatData = await chatRes.json();
    res.json(chatData);
  } catch (err) {
    res.status(500).json({ error: "AgentiveHub chat failed", details: err.message });
  }
});

module.exports = router; 