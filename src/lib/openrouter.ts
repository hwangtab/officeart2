export async function queryOpenRouter(prompt: string) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Route error:', error);
      throw new Error(error.error || 'API request failed');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Failed to query OpenRouter:', error);
    throw error;
  }
}