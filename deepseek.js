require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')();

const API_KEY = process.env.DEEPDEEK_KEY;
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

async function getDeepSeekResponse(prompt) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7
            },
            {
                headers: { Authorization: `Bearer ${API_KEY}` }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao chamar DeepSeek API:', error.response?.data || error.message);
    }
}
const resposta = prompt("O que deseja saber? ");

getDeepSeekResponse(resposta);