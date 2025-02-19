'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Upload, Users, Database, Brain, Star } from 'lucide-react';
import Image from 'next/image';
// Mock data
const datasets = [
	{
		id: 1,
		name: 'Diabetes Patient Records',
		size: '1.2GB',
		downloads: 1234,
		category: 'Healthcare',
	},
	{
		id: 2,
		name: 'Cardiac MRI Scans',
		size: '2.5GB',
		downloads: 856,
		category: 'Imaging',
	},
];

const models = [
	{
		id: 1,
		name: 'DiabetesPredict v2',
		author: 'Dr. Smith',
		accuracy: '95%',
		downloads: 567,
	},
	{
		id: 2,
		name: 'CardiacScan AI',
		author: 'Dr. Johnson',
		accuracy: '93%',
		downloads: 432,
	},
];

export default function CommunityPage() {
	return (
		<div className='container mx-auto p-6 space-y-8'>
			{/* TODO: Add hero image here */}
			{/* Hero Section */}
			<div className='relative'>
				{/* Hero Background */}
				<div className='absolute inset-0 z-0'>
					<Image
						src='https://www.mercy.net/content/dam/mercy/en/images/News/Nightingale_receiving_the_Wounded_at_Scutari_by_Jerry_Barrett.jpg.transform/image-component-desktop/img.jpg'
						alt='AI Healthcare Community'
						fill
						className='object-cover brightness-[0.4] rounded-xl'
						priority
					/>
				</div>

				{/* Hero Content */}
				<div className='relative z-10 text-center space-y-4 py-20 px-4'>
					<h1 className='text-4xl font-bold text-white'>
						Florence AI Community
					</h1>
					<p className='text-xl text-gray-200 max-w-2xl mx-auto'>
						Join our community of healthcare professionals and researchers.
						Share models, access datasets, and collaborate on AI solutions.
					</p>
					<div className='flex gap-4 justify-center'>
						<Button size='lg' variant='default'>
							<Upload className='mr-2 h-5 w-5' />
							Submit Model
						</Button>
						<Button size='lg' variant='secondary'>
							<Database className='mr-2 h-5 w-5' />
							Share Dataset
						</Button>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className='grid md:grid-cols-3 gap-6'>
				{[
					{ icon: Users, label: 'Community Members', value: '1,234+' },
					{ icon: Brain, label: 'AI Models', value: '50+' },
					{ icon: Database, label: 'Datasets', value: '100+' },
				].map((stat, index) => (
					<Card key={index}>
						<CardContent className='flex items-center gap-4 p-6'>
							<div className='p-3 bg-primary/10 rounded-full'>
								<stat.icon className='h-6 w-6 text-primary' />
							</div>
							<div>
								<p className='text-2xl font-bold'>{stat.value}</p>
								<p className='text-muted-foreground'>{stat.label}</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Main Content Tabs */}
			<Tabs defaultValue='datasets' className='space-y-6'>
				<TabsList className='grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3 gap-4'>
					<TabsTrigger value='datasets'>Datasets</TabsTrigger>
					<TabsTrigger value='models'>Models</TabsTrigger>
					<TabsTrigger value='leaderboard'>Leaderboard</TabsTrigger>
				</TabsList>

				<TabsContent value='datasets' className='space-y-4'>
					<div className='flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>Available Datasets</h2>
						<Input className='max-w-xs' placeholder='Search datasets...' />
					</div>
					<div className='grid md:grid-cols-2 gap-6'>
						{datasets.map((dataset) => (
							<Card key={dataset.id}>
								<CardHeader>
									<CardTitle className='flex items-center justify-between'>
										{dataset.name}
										<span className='text-sm font-normal bg-primary/10 px-2 py-1 rounded'>
											{dataset.category}
										</span>
									</CardTitle>
									<CardDescription>
										Size: {dataset.size} • Downloads: {dataset.downloads}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button variant='outline' className='w-full'>
										<Download className='mr-2 h-4 w-4' />
										Download Dataset
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				<TabsContent value='models' className='space-y-4'>
					<div className='flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>Community Models</h2>
						<Input className='max-w-xs' placeholder='Search models...' />
					</div>
					<div className='grid md:grid-cols-2 gap-6'>
						{models.map((model) => (
							<Card key={model.id}>
								<CardHeader>
									<CardTitle>{model.name}</CardTitle>
									<CardDescription>
										By {model.author} • Accuracy: {model.accuracy}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='flex justify-between items-center mb-4'>
										<div className='flex items-center'>
											<Download className='h-4 w-4 mr-2' />
											<span className='text-sm text-muted-foreground'>
												{model.downloads} downloads
											</span>
										</div>
										<div className='flex items-center'>
											<Star
												className='h-4 w-4 mr-1 text-yellow-500'
												fill='currentColor'
											/>
											<Star
												className='h-4 w-4 mr-1 text-yellow-500'
												fill='currentColor'
											/>
											<Star
												className='h-4 w-4 mr-1 text-yellow-500'
												fill='currentColor'
											/>
											<Star
												className='h-4 w-4 mr-1 text-yellow-500'
												fill='currentColor'
											/>
											<Star className='h-4 w-4 text-yellow-500' />
										</div>
									</div>
									<Button className='w-full'>View Details</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				<TabsContent value='leaderboard'>
					<Card>
						<CardHeader>
							<CardTitle>Top Contributors</CardTitle>
							<CardDescription>
								Based on model accuracy and community impact
							</CardDescription>
						</CardHeader>
						<CardContent>{/* Add leaderboard content here */}</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
