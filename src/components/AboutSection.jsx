import myPhoto from '../assets/images/profilephoto.jpg';
import SocialButtons from './SocialButtons';

// Used Resource 1

export const AboutSection = () => {
    return (
        <section id="about" className="py-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-xs os-muted">PROFILE CARD</p>
                        <h1 className="text-xl font-semibold os-text sm:text-2xl">Tony Wu</h1>
                        <p className="text-sm os-muted">STATUS: ACTIVE · LAST UPDATED: JAN 2026</p>
                    </div>
                    <img
                        src={myPhoto}
                        alt="Tony Wu"
                        className="h-20 w-20 rounded-full border border-border object-cover sm:h-24 sm:w-24"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="border border-border p-4">
                        <p className="text-xs os-muted">SUMMARY</p>
                        <p className="mt-2 text-sm os-text">
                            4th year Computing Science student at Simon Fraser University pursuing a
                            Business Administration minor. Focused on software development and product
                            management with a strong foundation in Python and C/C++.
                        </p>
                    </div>
                    <div className="border border-border p-4">
                        <p className="text-xs os-muted">QUICK FACTS</p>
                        <ul className="mt-2 space-y-2 text-sm os-text">
                            <li>LOCATION: Vancouver, BC</li>
                            <li>INTERESTS: Product, UX, data-driven apps</li>
                            <li>HOBBIES: Badminton, basketball, drawing, hiking</li>
                            <li>FUN FACT: Although I'm Chinese, I was born in Japan!</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-border p-4">
                    <p className="text-xs os-muted">CONNECT</p>
                    <p className="mt-2 text-sm os-text">
                        Feel free to connect with me through my socials!
                    </p>
                    <div className="mt-3 flex flex-wrap justify-start gap-2">
                        <SocialButtons />
                    </div>
                </div>
            </div>
        </section>
    );
};
