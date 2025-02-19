import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ModelCard({ model }: { model: any }) {
	const router = useRouter();
	return (
		<Card key={model.id} className='flex flex-col h-full'>
			<CardHeader className='flex-grow'>
				<div className='flex items-center gap-2'>
					<CardTitle>{model.name}</CardTitle>
				</div>
				<CardDescription>{model.description}</CardDescription>
			</CardHeader>
			<CardContent className='flex'>
				<div className='space-y-2 w-full'>
					<div className='flex justify-between text-sm'>
						<div className='text-muted-foreground'>Accuracy: </div>
						<div className='font-medium'>{model.accuracy}</div>
					</div>
					<div className='flex justify-between text-sm'>
						<div className='text-muted-foreground'>Last Updated: </div>
						<div className='font-medium'>{model.lastUpdated}</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className='mt-auto'>
				<Button
					onClick={() => router.push(`/community/ai-models/${model.slug}`)}
					className='w-full'
				>
					View Details
				</Button>
			</CardFooter>
		</Card>
	);
}
