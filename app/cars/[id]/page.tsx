import { notFound } from 'next/navigation';
import { carData } from '@/app/data/carData';
import CarPageClient from './CarPageClient';

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return Object.keys(carData).map((id) => ({
    id,
  }));
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const car = carData[id as keyof typeof carData];
  
  if (!car) {
    notFound();
  }

  return <CarPageClient car={car} id={id} />;
};

export default Page;