import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class InvowerkApi implements ICredentialType {
	name = 'invowerkApi';

	displayName = 'Invowerk API';

	icon: Icon = { light: 'file:../icons/invowerk.svg', dark: 'file:../icons/invowerk.svg' };

	documentationUrl = 'https://invowerk.dev/go/n8n?to=/app/api-keys';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Create a key at https://invowerk.dev/go/n8n?to=/app/api-keys',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.invowerk.dev',
			url: '/v1/me',
			method: 'GET',
		},
	};
}
