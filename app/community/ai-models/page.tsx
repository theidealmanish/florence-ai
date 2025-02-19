'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

import ModelCard from '@/components/ModelCard';

// Mock data - replace with actual API data later
const aiModels = [
	{
		id: 1,
		name: 'Diabetes Risk Predictor',
		slug: 'diabetes-risk-predictor',
		description: 'AI model for predicting diabetes risk based on patient data',
		accuracy: '95%',
		lastUpdated: '2025-01-15',
	},
	{
		id: 2,
		name: 'Heart Disease AI',
		slug: 'heart-disease-ai',
		description: 'Advanced cardiac condition detection and analysis',
		accuracy: '93%',
		lastUpdated: '2025-02-01',
	},
	{
		id: 3,
		name: 'Lung Cancer Detection',
		slug: 'lung-cancer-detection',
		description: 'Early detection of lung cancer using imaging analysis',
		accuracy: '97%',
		lastUpdated: '2025-02-10',
	},
];

export default function AIModelsPage() {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredModels = aiModels.filter(
		(model) =>
			model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			model.description.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className='container mx-auto p-6 space-y-6'>
			<div className='flex flex-col space-y-2'>
				<h1 className='text-3xl font-bold'>AI Models Repository</h1>
				<p className='text-muted-foreground'>
					Search through our collection of AI models for different diseases
				</p>
			</div>

			<div className='flex gap-4'>
				<Input
					placeholder='🔍 Search AI models...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className='max-w-lg'
				/>
			</div>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{filteredModels.map((model) => (
					<ModelCard key={model.id} model={model} />
				))}
			</div>
		</div>
	);
}
