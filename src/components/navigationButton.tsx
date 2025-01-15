import Link from 'next/link';
import { NavigationButtonProps } from '@/types/types';

export default function NavigationButton({
  href,
  label,
  isDisabled = false,
}: NavigationButtonProps) {
  return (
    <Link
      href={isDisabled ? '#' : href}
      className={`px-6 py-3 mb-10 text-lg font-bold uppercase tracking-wide rounded-lg shadow-md transition-transform transform ${
        isDisabled
          ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
          : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500 hover:scale-105'
      }`}
    >
      {label}
    </Link>
  );
}
