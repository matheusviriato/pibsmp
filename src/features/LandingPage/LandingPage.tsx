import { Mission } from './components/Mission';
import { OnlineService } from './components/OnlineService';
import { ServiceSchedule } from './components/ServiceSchedule';
import { Welcome } from './components/Welcome';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <OnlineService />
      <ServiceSchedule />
    </div>
  );
};

export { LandingPage };
