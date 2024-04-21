import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = () => {
  console.log('MONGO', process.env.MONGODB_URI,  process.env.NEXT_PUBLIC_API_DOMAIN)
 return (<>
      {/* <Hero /> */}
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};
export default HomePage;
