'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Download, Upload } from 'lucide-react';

// Mock data
const modelData = {
	name: 'Diabetes Risk Predictor',
	description:
		'Advanced AI model for predicting diabetes risk using patient health data and historical records.',
	image:
		'https://cells4life.com/wp-content/uploads/2024/06/diabetes_-scaled.jpg',
	accuracy: '95%',
	submissions: [
		{ id: 1, user: 'Dr. Smith', accuracy: '95%', date: '2025-02-19' },
		{ id: 2, user: 'Dr. Johnson', accuracy: '93%', date: '2025-02-18' },
	],
	datasets: [
		{ id: 1, name: 'Training Dataset', size: '1.2GB', format: 'CSV' },
		{ id: 2, name: 'Test Dataset', size: '300MB', format: 'CSV' },
	],
};

export default function ModelDetailPage() {
	return (
		<div className='container mx-auto p-6 space-y-8'>
			<div className='flex justify-between items-start'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold'>{modelData.name}</h1>
					<p className='text-muted-foreground'>
						Current Accuracy: {modelData.accuracy}
					</p>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							<Upload className='mr-2 h-4 w-4' />
							Submit Model
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Submit New Model Version</DialogTitle>
						</DialogHeader>
						<div className='space-y-4'>
							<div className='grid w-full gap-2'>
								<Input type='file' accept='.pkl' />
								<p className='text-sm text-muted-foreground'>
									Upload your .pkl model file
								</p>
							</div>
							<Button className='w-full'>Submit Model</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>

			<div className='flex flex-col items-center'>
				<div className='relative aspect-video rounded-lg overflow-hidden bg-gray-100 w-2/3'>
					<Image
						src={modelData.image}
						alt={modelData.name}
						fill
						className='object-cover'
					/>
				</div>
			</div>
			<div className='space-y-4'>
				<p>{modelData.description}</p>
			</div>

			<Tabs defaultValue='description' className='w-full'>
				<TabsList>
					<TabsTrigger value='description'>Description</TabsTrigger>
					<TabsTrigger value='leaderboard'>Leaderboard</TabsTrigger>
					<TabsTrigger value='datasets'>Datasets</TabsTrigger>
				</TabsList>
				<div className='mt-8'>
					<TabsContent value='description' className='space-y-4'>
						<h3 className='text-xl font-semibold'>Model Description</h3>
						<p>{modelData.description}</p>
					</TabsContent>

					<TabsContent value='leaderboard'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Submitted By</TableHead>
									<TableHead>Accuracy</TableHead>
									<TableHead>Date</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{modelData.submissions.map((submission) => (
									<TableRow key={submission.id}>
										<TableCell>{submission.user}</TableCell>
										<TableCell>{submission.accuracy}</TableCell>
										<TableCell>{submission.date}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TabsContent>

					<TabsContent value='datasets'>
						<div className='space-y-4'>
							{modelData.datasets.map((dataset) => (
								<div
									key={dataset.id}
									className='flex items-center justify-between p-4 border rounded-lg'
								>
									<div>
										<h4 className='font-semibold'>{dataset.name}</h4>
										<p className='text-sm text-muted-foreground'>
											Size: {dataset.size} • Format: {dataset.format}
										</p>
									</div>
									<Button variant='outline' size='sm'>
										<Download className='mr-2 h-4 w-4' />
										Download
									</Button>
								</div>
							))}
						</div>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
