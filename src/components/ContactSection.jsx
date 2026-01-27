import { useState } from 'react';

// Used Resource 1

export const ContactSection = () => {
    const [copiedLabel, setCopiedLabel] = useState("");

    const copyText = async (label, value) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedLabel(label);
            window.setTimeout(() => setCopiedLabel(""), 1200);
        } catch {
            setCopiedLabel("Copy failed");
            window.setTimeout(() => setCopiedLabel(""), 1200);
        }
    };

    return (
        <section id="contact" className="py-4">
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                        <p className="text-xs os-muted">COMMAND PANEL</p>
                        <h2 className="text-xl font-semibold os-text">Contact Channels</h2>
                    </div>
                    <p className="text-xs os-muted">STATUS: READY</p>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between border border-border p-3">
                        <div>
                            <p className="text-xs os-muted">EMAIL</p>
                            <a className="os-text" href="mailto:tonyjwu05@gmail.com">
                                tonyjwu05@gmail.com
                            </a>
                        </div>
                        <button
                            type="button"
                            className="os-button border px-2 py-1 text-xs"
                            onClick={() => copyText("Email", "tonyjwu05@gmail.com")}
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex items-center justify-between border border-border p-3">
                        <div>
                            <p className="text-xs os-muted">PHONE</p>
                            <a className="os-text" href="tel:+12369711868">
                                +1 (236) 971-1868
                            </a>
                        </div>
                        <button
                            type="button"
                            className="os-button border px-2 py-1 text-xs"
                            onClick={() => copyText("Phone", "+12369711868")}
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex items-center justify-between border border-border p-3">
                        <div>
                            <p className="text-xs os-muted">GITHUB</p>
                            <a className="os-text" href="https://github.com/tjwu5" target="_blank" rel="noopener noreferrer">
                                github.com/tjwu5
                            </a>
                        </div>
                        <button
                            type="button"
                            className="os-button border px-2 py-1 text-xs"
                            onClick={() => copyText("GitHub", "https://github.com/tjwu5")}
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex items-center justify-between border border-border p-3">
                        <div>
                            <p className="text-xs os-muted">LINKEDIN</p>
                            <a className="os-text" href="https://www.linkedin.com/in/tonyjxwu/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/tonyjxwu
                            </a>
                        </div>
                        <button
                            type="button"
                            className="os-button border px-2 py-1 text-xs"
                            onClick={() => copyText("LinkedIn", "https://www.linkedin.com/in/tonyjxwu/")}
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex items-center justify-between border border-border p-3">
                        <div>
                            <p className="text-xs os-muted">LOCATION</p>
                            <a
                                className="os-text"
                                href="https://www.google.com/maps/place/Burnaby,+BC,+Canada/@49.2488,-123.0019,12z/data=!3m1!4b1!4m6!3m5!1s0x5485d0f2c7c8e2a7:0x4b6f8d8e9f8c8c8!8m2!3d49.2488!4d-123.0019!16zL20vMDJjY2Q"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vancouver, BC
                            </a>
                        </div>
                    </div>

                    {copiedLabel && (
                        <div className="text-xs os-muted">
                            OUTPUT: {copiedLabel} copied.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};