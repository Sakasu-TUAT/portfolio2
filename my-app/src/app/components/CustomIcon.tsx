import { iconMapper } from '@/utils/mapper'; // iconMapperのインポート
import {IconBaseProps} from 'react-icons';

interface CustomIconProps extends IconBaseProps {
    icon: keyof typeof iconMapper;
}

export default function CustomIcon({icon, ...rest} : CustomIconProps) {
  const IconComponent = iconMapper[icon];
  return (
    IconComponent ? ( <IconComponent {...rest} />) : null
  );
}

