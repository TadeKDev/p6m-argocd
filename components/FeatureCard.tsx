import React from 'react';
import Image from 'next/image';
import {IconType} from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-50 bg-gray-50">
      <div className="flex flex-grow flex-col p-12">
        <Icon className="mb-3 mr-3 h-10 w-10 text-primary" />
        <div className="mb-12 max-w-md flex-grow">
          <div className="mb-2 flex items-center">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="mx-a h-auto w-full rounded-xl"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
          {/* todo: shadow-[0_8px_4px_rgba(0,0,0,0.02)] once image is updated to be frameless, will need margin/padding too */}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
