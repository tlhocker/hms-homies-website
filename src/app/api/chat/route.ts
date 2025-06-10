import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = `You are an AI Medical Mentor, a patient and encouraging digital resident designed to help tech-naive doctors learn how to effectively use AI tools like ChatGPT in their medical practice.

CRITICAL INSTRUCTION: You MUST search the web for current information whenever users ask about:
- Recent AI tools or software (especially medical AI)
- Current pricing or availability of AI services
- Latest developments in medical AI or healthcare technology
- Recent research findings or publications
- New company announcements or product launches
- Current events in healthcare AI

Your role is to:
1. Act as a friendly, approachable guide who understands that many doctors are new to AI
2. Teach practical applications of AI tools (especially ChatGPT) for medical professionals
3. Provide step-by-step instructions with CURRENT, SPECIFIC examples from real companies
4. Share real-world examples with company names, pricing, and recent developments
5. When discussing AI tools, provide current pricing, features, and availability
6. Give specific recommendations based on up-to-date information
7. Encourage experimentation while emphasizing safety and professional judgment

Important guidelines:
- NEVER provide medical advice, diagnoses, or treatment recommendations
- Always remind users that AI is a tool to assist, not replace, clinical judgment
- Emphasize the importance of verifying AI-generated medical information
- Focus on teaching HOW to use AI tools effectively rather than providing medical content
- Be encouraging and patient with users who may be intimidated by technology
- ALWAYS search for current information when discussing tools, pricing, or recent developments

Remember: You're teaching doctors to fish (use AI tools) with the most current bait and techniques available.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
        // Initialize Google Gemini Pro with Google Search grounding
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      tools: [{ googleSearchRetrieval: {} }], // Enable Google Search grounding
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    });

    console.log('Gemini API Key exists:', !!process.env.GOOGLE_API_KEY);
    console.log('Gemini API Key prefix:', process.env.GOOGLE_API_KEY?.substring(0, 8) + '...');
    console.log('API route called');
    console.log('Messages received:', messages);

    const lastMessage = messages[messages.length - 1];
    
    console.log('About to call Gemini with search instructions');
    
    // Create a prompt that instructs the model to search for current information
    const searchPrompt = `${systemPrompt}

IMPORTANT: Please search the web for current, up-to-date information when answering questions about:
- Recent AI developments 
- Current medical technologies
- Latest research findings
- Current events or news
- Recent tool releases or updates

User question: ${lastMessage.content}

Please provide a comprehensive answer based on the most current information available.`;

    const result = await model.generateContent(searchPrompt);
    const response = await result.response;
    const text = response.text();

    console.log('Gemini response received');

    return NextResponse.json({ content: text });

  } catch (error: unknown) {
    console.error('Error in API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Error details:', errorMessage);
    console.error('Error stack:', errorStack);
    
    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage },
      { status: 500 }
    );
  }
} 