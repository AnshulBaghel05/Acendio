import {
  Cpu,
  Globe,
  Megaphone,
  MessageSquare,
  PhoneCall,
  Star,
  Workflow,
} from 'lucide-react';
import { ServicePageData } from '../content/services';

interface ServiceIconProps {
  name: ServicePageData['iconName'];
  className?: string;
}

export function ServiceIcon({ name, className = 'h-5 w-5' }: ServiceIconProps) {
  switch (name) {
    case 'Globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'PhoneCall':
      return <PhoneCall className={className} aria-hidden="true" />;
    case 'Megaphone':
      return <Megaphone className={className} aria-hidden="true" />;
    case 'Star':
      return <Star className={className} aria-hidden="true" />;
    case 'Workflow':
      return <Workflow className={className} aria-hidden="true" />;
    case 'MessageSquare':
      return <MessageSquare className={className} aria-hidden="true" />;
    case 'Cpu':
      return <Cpu className={className} aria-hidden="true" />;
  }
}
