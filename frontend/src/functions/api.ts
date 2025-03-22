const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
    const response = await fetch(normalizeUrl(`${baseUrl}/${url}`));
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
}

function normalizeUrl(url: string) {
    const protocolo = url.split('://')[0];
    const restante = url.split('://')[1];
    return `${protocolo}://${restante.replaceAll(/\/{2,}/g, '/')}`;
}