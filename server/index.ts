import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/cds-services', (req, res) => {
	res.send({
		services: [
			{
				hook: 'patient-view',
				title: 'hello',
				description: 'say hello to patient',
				id: '0001',
				prefetch: {
					patient: 'Patient/{{context.patientId}}',
					conditions: 'Condition?patient={{context.patientId}}',
				},
			},
		],
	});
});

app.post('/cds-services/:id', (req, res) => {
	console.log('id', req.params.id);
	console.log('body', req.body);
	if (req.params.id === '0001') {
		// your application logic
		const patient = req.body.prefetch.patient;
		res.json({
			cards: [
				{
					summary: `hello ${patient.name[0].given[0]} ${patient.name[0].family}`,
					indicator: 'info',
					source: {
						label: 'test service',
					},
					links: [
						{
							label: 'google it',
							url: 'https://google.com',
							type: 'absolute',
						},
						{
							label: 'my app',
							url: 'http://localhost:4434/launch',
							type: 'smart',
						},
					],
				},
			],
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
