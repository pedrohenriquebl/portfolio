export async function obterReadme(repoUrl: string) {
    const respostiorio = repoUrl.split('/github.com/')[1];
    const readmeUl = `https://raw.githubusercontent.com/${respostiorio}/main/README.md`;
    const response = await fetch(readmeUl);
    return response.text();
}