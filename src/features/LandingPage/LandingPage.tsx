import { Footer } from '@/shared/components/Footer';
import { ContactUs } from './components/ContactUs';
import { Donation } from './components/Donation';
import { Mission } from './components/Mission';
import { ServiceSchedule } from './components/ServiceSchedule';
import { Welcome } from './components/Welcome';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <ServiceSchedule />
      <ContactUs />
      <Donation />
      <Footer />
    </div>
  );
};

export { LandingPage };
