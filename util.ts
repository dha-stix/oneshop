export const convertHTMLToText = (content: string) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(content, 'text/html');
	return doc.body.textContent;
}