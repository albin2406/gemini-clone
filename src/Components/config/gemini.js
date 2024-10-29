import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = 'AIzaSyAA9EtS-01qqQI7yozVQPKX0-rEJJHOsHU';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }
  
export default run;

// AIzaSyAA9EtS-01qqQI7yozVQPKX0-rEJJHOsHU