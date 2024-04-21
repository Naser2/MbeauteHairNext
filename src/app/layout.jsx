import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
// import '@/assets/styles/globals.css';
import '@/assets/styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import { MobileMenu } from '@/components/nav/MobileMenu';
import { Header } from '@/components/nav/Header.jsx';

// import ExampleNav from '@/components/nav/ExampleNav';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <body>
          <MobileMenu />
        <Header />
            {/* <ExampleNav /> */}
           {/* <MobileMenu /> */}
            {/* <Header /> */}
            {/* <Navbar /> */}
            
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};
export default MainLayout;
