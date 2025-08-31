import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import TechnologyClient from './TechnologyClient';

export const metadata: Metadata = generateMetadata('technology');

export default function TechnologyPage() {
  return <TechnologyClient />;
}
