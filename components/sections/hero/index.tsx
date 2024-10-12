import Statistics from './statistics';
import Collection from './collection';
import Button from '@/components/ui/button';
import { arrowRight } from '@/assets/icons';

export default function Hero() {
  return (
    <section id="home" className="xl:padding-l wide:padding-r padding-b">
      <div className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
        <div className="w-full xl:w-2/5 pt-28 flex flex-col justify-center items-start max-xl:padding-x">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collections
          </p>
          <h1 className="text-title mt-8 font-palanquin text-8xl max-sm:text-[4.5rem] max-sm:leading-[5.125rem] xl:relative xl:z-10 font-bold">
            <span className="xl:bg-white dark:xl:bg-[#333] xl:whitespace-nowrap z-10 pr-10 transition-[background-color] duration-500">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3 whitespace-pre">
              {'Nike '}
            </span>
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now!" icon={arrowRight} alt="Arrow right icon" />
          <Statistics />
        </div>

        <Collection />
      </div>
    </section>
  );
}
