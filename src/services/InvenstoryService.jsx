const baseUrl = `https://api.invenstory.dev`;

const apiKey = process.env.INVENSTORY_API_KEY;
const apiSecret = process.env.INVENSTORY_API_SECRET;

export async function getPersona(data) {
  try {
    const params = new URLSearchParams({
      age: data.age,
      gender: data.gender,
      origin: data.origin,
      profession: data.profession,
    });

    // Primeiro: login
    const loginResponse = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: apiKey,
        password: apiSecret,
      }),
    });

    if (!loginResponse.ok) {
      throw new Error(`Erro ao autenticar: ${loginResponse.status}`);
    }

    const loginData = await loginResponse.json();

    // Depois: requisição para /persona
    const personaResponse = await fetch(
      `${baseUrl}/persona?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${loginData.token}`,
        },
      }
    );

    if (!personaResponse.ok) {
      throw new Error(`Erro ao buscar persona: ${personaResponse.status}`);
    }

    const personaData = await personaResponse.json();

    return personaData;
  } catch (error) {
    console.error("Erro na função getPersona:", error);
    throw error;
  }
}
