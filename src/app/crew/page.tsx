import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import CrewClient from './CrewClient';


export const metadata: Metadata = generateMetadata('crew');

export default function CrewPage() {
  return <CrewClient />;
}
