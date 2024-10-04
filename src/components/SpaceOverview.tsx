import React from 'react';
import SpaceCard from './SpaceCard';

interface Space {
  id: number;
  name: string;
  price: string;
  duration: string;
  image: string;
}

interface SpaceOverviewProps {
  spaces: Space[];
}

const SpaceOverview: React.FC<SpaceOverviewProps> = ({ spaces }) => {
  return (
    <section className="space-overview">
      <h2>Our Space Overview</h2>
      <div className="space-cards">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
};

export default SpaceOverview;
