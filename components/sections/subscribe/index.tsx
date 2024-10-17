import Button from '@/components/ui/button';

export default function Subscribe() {
  return (
    <section
      id="contact-us"
      className="padding-x sm:py-32 py-16 max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-title text-4xl leading-[4.25rem] font-palanquin font-bold">
        Sign Up For <span className="text-coral-red">Updates </span> &
        Newsletter
      </h3>
      <div className="lg:min-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          id="newsletter"
          type="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
}
