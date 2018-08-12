export const dynaClientDownloadText = (filename: string, text: string): void => {
	const element: HTMLAnchorElement = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
};

export const dynaClientDownloadObject = (filename: string, data: any, compressed: boolean = false): void => {
	if (filename.toLowerCase().indexOf(".json") == -1) filename += ".json";
	dynaClientDownloadText(filename, JSON.stringify(data, compressed ? undefined : null, compressed ? undefined : 4));
};