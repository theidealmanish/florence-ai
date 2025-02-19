// src/index.ts
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.get('/cds-services', (req: Request, res: Response) => {
	res.json({
		services: [
			{
				hook: 'patient-view',
				id: 'patient-view',
				name: 'Patient View',
				description: 'This service provides a summary of the patient record.',
				prefetch: [],
			},
		],
	});
});

app.get('/cds-services/:id', (req: Request, res: Response) => {
	const id = req.params.id;
	console.log('id', id);
	console.log('Body', req.body);
	res.json({
		services: [
			{
				hook: 'florence-ai',
				id: 'florence-ai',
				name: 'Florence AI',
				description:
					'Florence predicts the risk of a patient developing a heart attack.',
				prefetch: [],
			},
		],
	});
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
