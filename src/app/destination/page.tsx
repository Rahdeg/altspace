import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import DestinationClient from './DestinationClient';


export const metadata: Metadata = generateMetadata('destination');

export default function DestinationPage() {
  return <DestinationClient />;
}
