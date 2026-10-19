import type { Metadata } from 'next'
import Pets from '../../components/Pets'

export const metadata: Metadata = {
  title: 'Pets',
}

export default function PetsPage() {
  return <Pets />
}
