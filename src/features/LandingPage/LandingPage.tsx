import { Footer } from '@/shared/components/Footer';
import { Mission } from './components/Mission';
import { ServiceSchedule } from './components/ServiceSchedule';
import { Welcome } from './components/Welcome';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <ServiceSchedule />
      <Footer />
    </div>
  );
};

export { LandingPage };
