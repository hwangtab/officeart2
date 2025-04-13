import { HiArrowLeft as ArrowLeftIcon } from 'react-icons/hi2';
import LinkButton from './LinkButton'; // Import LinkButton

export default function BackButton({ href = "/", text = "메인으로 돌아가기" }: { href?: string; text?: string }) {
  return (
    <div className="mt-16 text-center">
      {/* Use LinkButton component */}
      <LinkButton
        href={href}
        variant="outline" // Use outline style
        size="lg" // Keep large size
        iconLeft={<ArrowLeftIcon className="h-5 w-5" />}
      >
        {text}
      </LinkButton>
    </div>
  );
}