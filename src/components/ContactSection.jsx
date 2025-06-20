import { Mail,Phone,MapPin, Instagram, Linkedin, Github, Facebook, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// Used Resource 1

export const ContactSection = () => {
    
    return <section id="contact" className="py-24 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Contact <span className="text-primary">Me</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out for collaborations, questions, or just to say hi! I'm always open to discussing new projects and opportunities :)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        {/* Email Section */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <Mail className="h-6 w-6 text-primary cursor-pointer"/>
                            </div>
                            <div className="space-y-2 text-muted-foreground"> 
                                <a
                                    href="mailto:tonyjwu05@gmail.com"
                                    aria-label="Email Tony"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    tonyjwu05@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <Phone className="h-6 w-6 text-primary cursor-pointer"/>
                            </div>
                            <div className="space-y-2 text-muted-foreground"> 
                                <a
                                    href="tel:+12369711868"
                                    aria-label="Call Tony"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 (236) 971-1868
                                </a>
                            </div>
                        </div>

                        {/* Location Section */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <MapPin className="h-6 w-6 text-primary cursor-pointer"/>
                            </div>
                            <div className="space-y-2 text-muted-foreground"> 
                                <a
                                    href="https://www.google.com/maps/place/Burnaby,+BC,+Canada/@49.2488,-123.0019,12z/data=!3m1!4b1!4m6!3m5!1s0x5485d0f2c7c8e2a7:0x4b6f8d8e9f8c8c8!8m2!3d49.2488!4d-123.0019!16zL20vMDJjY2Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Location on Map"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Burnaby, BC, Canada
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With My Socials</h4>
                        <div className="flex space-x-4 justify-center ">
                            <a 
                                href="https://github.com/tjwu5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                
                            >
                                <Github />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/tonyjxwu/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin />
                            </a>                           
                            <a 
                                href="https://www.facebook.com/profile.php?id=100014711859459" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Facebook />
                            </a>                           
                            <a 
                                href="https://www.instagram.com/tj.wu_/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                    <h3 className="text-xs italic font-medium mb-6 text-muted-foreground">
                        (This doesn't work yet, still working on it!)
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">{""}Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Enter your name..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">{""}Your Email</label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Enter your email..."
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">{""}Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Enter your message..."
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className={cn("w-full flex items-center justify-center gap-2 cursor-pointer px-4 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary")}
                            >
                            Send Message
                            <Send size={16} />
                        </button>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    </section>;
};