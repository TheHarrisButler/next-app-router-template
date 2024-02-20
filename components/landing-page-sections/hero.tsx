import { Button } from "../ui/button";
import { DoneIcon } from "../icons";

export const Hero = () => {
  const features = ["Integrated with NextAuth", "Next.js app router", "Tailwind css"];

  return (
    <section>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-12 lg:gap-20 px-8 py-12 lg:py-32">
        <h1 className="text-6xl font-bold">Build you next idea fast!</h1>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="text-base-content-secondary leading-relaxed space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex space-x-2">
              <DoneIcon fill="green" height={20} width={20} />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <Button variant="default">Get started now</Button>
      </div>
    </section>
  );
};
