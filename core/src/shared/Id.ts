export default class Id {
    static gerar(): string {
        const prefixId = Math.random().toString(36).substring(2, 9)
        const suffixId = Math.random().toString(36).substring(2, 9)
        const middleId = Math.random().toString(36).substring(2, 9)
        
        return `${prefixId}-${middleId}-${suffixId}`;
    }
}