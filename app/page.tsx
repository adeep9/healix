/**
 * Index page. User will be greeted with a form that has 
 * two selection inputs. One for team, and another for user
 */

import Authform from "./components/authform";
import Footer from "./components/ui/footer";

const Auth = () => {
  // Get team and user data
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 items-center justify-center translate-y-5">
        <div className="text-center">
          <h1 className="tracking-tighter font-semibold text-5xl pb-8 bg-gradient-to-r from-emerald-700 to-green-700 text-transparent bg-clip-text">
            How can we help?
          </h1>
          <Authform />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
