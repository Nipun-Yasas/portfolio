import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import SpotlightCard from "./helper/SpotlightCard";

export function ContactCard() {
  return (
    <SpotlightCard
      className="rounded-2xl border-white/10 inline-block w-fit"
      spotlightColor="rgba(175, 28, 255, 0.38)"
    >
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3 text-neutral-300">
          <FiMapPin className="mt-0.5 h-5 w-5 text-purple-500" aria-hidden />
          <div>
            <span className="block text-neutral-400">Address</span>
            <span>Ambepussa, Sri Lanka</span>
          </div>
        </li>

        <li className="flex items-start gap-3 text-neutral-300">
          <FiMail className="mt-0.5 h-5 w-5 text-purple-500" aria-hidden />
          <div>
            <span className="block text-neutral-400">Email</span>
            <span>nipuny74@gmail.com</span>
          </div>
        </li>

        <li className="flex items-start gap-3 text-neutral-300">
          <FiPhone className="mt-0.5 h-5 w-5 text-purple-500" aria-hidden />
          <div>
            <span className="block text-neutral-400">Mobile</span>
            <span>+94 70 554 0725</span>
          </div>
        </li>
      </ul>
    </SpotlightCard>
  );
}
