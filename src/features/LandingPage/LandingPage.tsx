import { Mission } from './components/Mission';
import { ServiceSchedule } from './components/ServiceSchedule';
import { Welcome } from './components/Welcome';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Mission />

      <ServiceSchedule />
    </div>
  );
};

export { LandingPage };
