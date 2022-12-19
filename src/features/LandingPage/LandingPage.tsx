// import { Footer } from '@/shared/components/Footer';
import { Mission } from './components/Mission';
import { ServiceSchedule } from './components/ServiceSchedule';
import { Welcome } from './components/Welcome';
import { Donation } from './components/Donation';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <ServiceSchedule />
      <Donation />
      {/* <Footer /> */}
    </div>
  );
};

export { LandingPage };
