import myPhoto from '../assets/images/profilephoto.jpg';
import SocialButtons from './SocialButtons';
import {ArrowDown} from 'lucide-react';

export const AboutSection = () => {
    return <section id="about" className="py-24 px-5 relative">
        <div className="container mx-auto max-w-8xl">
            <h1 className="text-5xl font-semibold text-primary mt-10 mb-10">
                <span>
                    <span className="text-foreground">A little bit about </span>me...
                </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-15">
    
                {/* Profile Image on the Left */}
                <div className="flex-shrink-0">
                <img
                    src={myPhoto}
                    alt="Tony Wu"
                    className="w-75 h-75 object-cover rounded-full border border-gray-300 shadow"
                />
                </div>

                {/* Text on the Right */}
                <div className="space-y-6 text-center md:text-left">
                    <p className="text-lg text-muted-foreground mb-6">
                        I'm a 3rd year Computing Science student at Simon Fraser University, pursuing a Major in Computing Science and a Minor in Business Administrations. I have a passion for everything tech related, currently invested in software development and UI/UX design, and I'm always eager to learn new technologies and improve!
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                        I have built a strong foundation in programming languages such as Python and C/C++, and am currently expanding my skills in web development with HTML/CSS/Javascript, React.js and Tailwind. 
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                    I love working in a group setting, and along with my passion in business studies, I would be a strong addition to any startup with development as well as acceleration of their business. 
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                        In my free time, I enjoy working on personal projects, learning and researching about cool tech around the world. However, most of the time you will find me either playing Teamfight Tactics (TFT) and League of Legends with my buddies, or watching the NBA (specifically the Golden State Warriors) and playing with my 3-year-old dog Ori. 
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                    A fun fact about me is that while I am Chinese, I was born in Japan and grew up in Canada!
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                        I am always looking for new opportunities to learn and grow, and I am excited to see where my journey in tech will take me!
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                        Feel free to connect with me on my socials!
                    </p>
                    <div className="flex justify-center md:justify-start mt-15 mb-30">
                        <SocialButtons />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Keep scrolling to see my skills and experiences!
            </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
        </div>
    </section>
}
