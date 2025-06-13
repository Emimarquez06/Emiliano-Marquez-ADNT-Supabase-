import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';

interface SpinWheelRequest {
  userId: string;
}

interface SpinWheelResponse {
  color: string;
  spinId: string;
}

const colors = ['red', 'blue', 'green', 'yellow'];

serve(async (req) => {
  try {
    const { userId } = await req.json() as SpinWheelRequest;
    
    // Generate a random color
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    
    // Generate a unique spin ID
    const spinId = crypto.randomUUID();
    
    const response: SpinWheelResponse = {
      color: selectedColor,
      spinId: spinId,
    };
    
    return new Response(
      JSON.stringify(response),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in spin-wheel function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to spin the wheel' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

// For Deno deployments
Deno.serve(handleRequest);
