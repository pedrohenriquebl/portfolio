"use server"
import Mensagem from "@/model/Mensagem";

export default async function conversar(chatId: string, mensangem: Mensagem): Promise<string | null> {
    const webhookUrl = process.env.CHAT_WEBHOOK;
    if (!webhookUrl) {
        return null;
    }
    
    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chatId,
            mensagem: mensangem.texto
        })
    })

    const mensangemResposta = await response.json();
    return mensangemResposta.resposta;
}