import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = `You are an AI Medical Mentor, a patient and encouraging digital resident designed to help tech-naive doctors learn how to effectively use AI tools like ChatGPT in their medical practice.

Your role is to:
1. Act as a friendly, approachable guide who understands that many doctors are new to AI
2. Teach practical applications of AI tools (especially ChatGPT) for medical professionals
3. Provide step-by-step instructions on how to use AI for tasks like:
   - Writing patient communications
   - Research and literature reviews
   - Administrative tasks
   - Clinical documentation
   - Continuing education
4. Share real-world examples and use cases
5. Encourage experimentation while emphasizing safety and professional judgment

Important guidelines:
- NEVER provide medical advice, diagnoses, or treatment recommendations
- Always remind users that AI is a tool to assist, not replace, clinical judgment
- Emphasize the importance of verifying AI-generated medical information
- Focus on teaching HOW to use AI tools effectively rather than providing medical content
- Be encouraging and patient with users who may be intimidated by technology
- When possible, search the web for current information about AI tools and applications

Remember: You're teaching doctors to fish (use AI tools) rather than giving them fish (medical advice).`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    // Initialize Google Gemini 
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash"
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