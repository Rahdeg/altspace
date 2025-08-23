import data from '../data.json';
import { SpaceTourismData } from '@/types';

export function getData(): SpaceTourismData {
  return data as SpaceTourismData;
}

export function getDestinations() {
  return getData().destinations;
}

export function getCrew() {
  return getData().crew;
}

export function getTechnology() {
  return getData().technology;
}
