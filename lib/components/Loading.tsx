import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Loading() {
	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='flex flex-col items-center gap-4'>
				<Image
					src='/images/florence-ai.png' // Make sure to add your logo in the public folder
					alt='Florence AI Logo'
					width={120}
					height={120}
					priority
				/>
				<div className='flex items-center gap-2'>
					<Loader2 className='h-6 w-6 animate-spin text-primary' />
					<p className='text-lg font-medium text-gray-700'>Loading...</p>
				</div>
			</div>
		</div>
	);
}
