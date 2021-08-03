import * as vscode from 'vscode';
import { lyrics } from './lyrics';

export function activate(context: vscode.ExtensionContext) {
	
	const openWebView = () => {
		const panel = vscode.window.createWebviewPanel(
			'rickRoll',
			'You know the rules...',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);
		const colors = [
			'rgb(220, 100, 100)',
			'rgb(220, 165, 100)',
			'rgb(220, 220, 100)',
			'rgb(100, 220, 100)',
			'rgb(100, 100, 220)',
			'rgb(200, 0, 230)',
			'rgb(238, 130, 238)'
		];
		let i = 0;
		panel.webview.html = getWebviewContent(colors[i]);
		setInterval(() => {
			panel.webview.html = getWebviewContent(colors[i++ % colors.length]);
		}, 1062);
	};

	context.subscriptions.push(vscode.commands.registerCommand('xtension.rickroll', () => {
			openWebView();
			vscode.env.openExternal(vscode.Uri.parse('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
		})
	);
	context.subscriptions.push(vscode.commands.registerCommand('xtension.rickroll2', () => {
			openWebView();
			vscode.env.openExternal(vscode.Uri.parse('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
		})
	);
}

export function deactivate() {}

function getWebviewContent(color: string) {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Never gonna give you up</title>
		<style>
			h1, p {
				font-family: "Comic Sans MS", "Comic Sans", cursive;
			}
			p {
				white-space: pre;
				font-size: 1rem;
				color: ${color};
			}
			.row {
				display: flex;
				flex-direction: row;
			}
			@media screen and (min-width: 650px) {
				img {
					position: fixed;
					right: 0;
				}
			}
		</style>
	</head>
	<body>
		<h1>Never gonna give you up</h1>
		<div class="row">
			<p>${lyrics}</p>
			<div>
				<img src="https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif" width="auto" height="auto"/>
			</div>
		</div>
	</body>
	</html>`;
}