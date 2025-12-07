import express from "express";
// import {
//   GoogleGenAI,
//   GoogleGenerativeAI
// } from '@google/genai';

import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/agent", async (req, response) => {
  try {
    const body = req.body;
    const { message } = body;

    // Initialize the GoogleGenerativeAI client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      generationConfig: {
        responseMimeType: "application/json",
      },
      model: "gemini-2.0-flash",
      systemInstruction: `Your job is to take a startup idea from the user and generate:

A complete structured startup pitch (in JSON format)
A fully coded landing page (HTML + CSS in a single file)
Always return output in clean JSON format EXACTLY like this:

{ "startup_name": "", "tagline": "", "one_liner": "", "problem": "", "solution": "", "target_audience": "", "unique_value_proposition": "", "elevator_pitch": "", "landing_page": { "html_css": "" }, "additional_suggestions": "" }

Rules:

Tone must be creative, simple, and investor-friendly.
Startup name must be brandable, not generic.
Landing page must be clean, responsive, modern, and written using pure HTML + CSS (no external frameworks).
Add a hero section, features section, pricing CTA, and testimonials section.
Strictly return JSON only — no explanation or extra commentary.
If user idea is incomplete, make assumptions and explain them inside additional_suggestions.`,
    });

    const prompt = `Here is my startup idea: ${message} Please generate a complete startup pitch and return output strictly in JSON format.`;
    const res = await model.generateContent(prompt);
    console.log("res", res.response.text());

    response.json({
      ai: JSON.parse(res.response.text()),
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(PORT, () => console.log(`server running`));
