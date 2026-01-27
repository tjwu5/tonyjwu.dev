import { useEffect, useMemo, useRef, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { OSWindow } from "../components/OSWindow";

const ResumePanel = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                    <p className="text-xs os-muted">DOCUMENT VIEWER</p>
                    <h2 className="text-xl font-semibold os-text">Resume</h2>
                </div>
                <p className="text-xs os-muted">VERSION: 2026.01</p>
            </div>

            <div className="space-y-4 text-sm">
                <div className="border border-border p-4">
                    <p className="text-xs os-muted">SUMMARY</p>
                    <p className="mt-2 os-text">
                        CS student focused on software engineering, data-driven products, and clean UI systems.
                        Experienced with React, Python, and team-based project delivery.
                    </p>
                </div>

                <div className="border border-border p-4">
                    <p className="text-xs os-muted">EDUCATION</p>
                    <p className="mt-2 os-text">Simon Fraser University — Computing Science (Major)</p>
                    <p className="text-xs os-muted">Business Administration (Minor)</p>
                </div>

                <div className="border border-border p-4">
                    <p className="text-xs os-muted">HIGHLIGHTS</p>
                    <ul className="mt-2 space-y-1 os-text">
                        <li>Built ML and data visualization projects with measurable outcomes.</li>
                        <li>Led front-end delivery and coordinated API integration.</li>
                        <li>Comfortable with Agile workflows and cross-functional teams.</li>
                    </ul>
                </div>

                <div className="border border-border p-4">
                    <p className="text-xs os-muted">DOWNLOAD</p>
                    <div className="mt-2 flex items-center gap-3">
                        <a
                            href="/Resume_TonyWu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="os-button border px-3 py-2 text-xs font-semibold"
                        >
                            Open Resume PDF
                        </a>
                        <span className="text-xs os-muted">FORMAT: PDF · SIZE: 1 PAGE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const Home = () => {
    const [openWindows, setOpenWindows] = useState({});
    const [windowOrder, setWindowOrder] = useState([]);
    const [clock, setClock] = useState("");
    const [windowPositions, setWindowPositions] = useState({});
    const [windowZIndex, setWindowZIndex] = useState({});
    const [zCounter, setZCounter] = useState(100);
    const [minimizedWindows, setMinimizedWindows] = useState({});
    const [zoomedWindows, setZoomedWindows] = useState({});
    const [closingWindows, setClosingWindows] = useState({});
    const [windowAnimations, setWindowAnimations] = useState({});
    const closeTimersRef = useRef({});
    const animationTimersRef = useRef({});

    const windowConfig = useMemo(() => ({
        about: {
            title: "About.app",
            content: <AboutSection />,
        },
        projects: {
            title: "Projects.app",
            content: (
                <ExperienceSection />
            ),
        },
        skills: {
            title: "Skills.app",
            content: <SkillsSection />,
        },
        resume: {
            title: "Resume.app",
            content: <ResumePanel />,
        },
        contact: {
            title: "Contact.app",
            content: <ContactSection />,
        },
    }), []);

    const bringToFront = (id) => {
        setZCounter((prev) => {
            const next = prev + 1;
            setWindowZIndex((zPrev) => ({ ...zPrev, [id]: next }));
            return next;
        });
    };

    const prefersReducedMotion = () =>
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getLauncherRect = (id) =>
        document.querySelector(`[data-app="${id}"]`)?.getBoundingClientRect() ?? null;

    const getDockRect = (id) =>
        document.querySelector(`[data-dock="${id}"]`)?.getBoundingClientRect() ?? null;

    const getWindowRect = (id) =>
        document.querySelector(`[data-window="${id}"]`)?.getBoundingClientRect() ?? null;

    const setAnimationStyle = (id, style) => {
        setWindowAnimations((prev) => ({ ...prev, [id]: style }));
    };

    const clearAnimation = (id) => {
        setWindowAnimations((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    };

    const getTopmostVisibleId = () => {
        const visibleIds = windowOrder.filter(
            (id) => openWindows[id] && !minimizedWindows[id] && !closingWindows[id]
        );
        if (visibleIds.length === 0) return null;
        return visibleIds.reduce((topId, id) => {
            const topZ = windowZIndex[topId] ?? 0;
            const currentZ = windowZIndex[id] ?? 0;
            return currentZ >= topZ ? id : topId;
        }, visibleIds[0]);
    };

    const runOpenAnimation = (id, fromRectOverride) => {
        if (prefersReducedMotion()) return;
        const windowRect = getWindowRect(id);
        if (!windowRect) return;
        const fromRect = fromRectOverride ?? getLauncherRect(id);
        if (!fromRect) {
            setAnimationStyle(id, {
                transition: "none",
                transform: "scale(0.96)",
                opacity: 0,
                filter: "blur(1px)",
            });
            requestAnimationFrame(() => {
                setAnimationStyle(id, {
                    transition: "transform 220ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 200ms ease-out, filter 200ms ease-out",
                    transform: "scale(1.02)",
                    opacity: 1,
                    filter: "blur(1px)",
                });
                window.setTimeout(() => {
                    setAnimationStyle(id, {
                        transition: "transform 120ms ease-out, opacity 120ms ease-out, filter 120ms ease-out",
                        transform: "scale(1)",
                        opacity: 1,
                        filter: "blur(0px)",
                    });
                }, 170);
            });
        } else {
            const dx = fromRect.left - windowRect.left;
            const dy = fromRect.top - windowRect.top;
            const sx = fromRect.width / windowRect.width;
            const sy = fromRect.height / windowRect.height;
            setAnimationStyle(id, {
                transition: "none",
                transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
                opacity: 0.2,
                filter: "blur(1px)",
            });
            requestAnimationFrame(() => {
                setAnimationStyle(id, {
                    transition: "transform 240ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 200ms ease-out, filter 200ms ease-out",
                    transform: "translate(0px, 0px) scale(1.02, 1.02)",
                    opacity: 1,
                    filter: "blur(1px)",
                });
                window.setTimeout(() => {
                    setAnimationStyle(id, {
                        transition: "transform 120ms ease-out, opacity 120ms ease-out, filter 120ms ease-out",
                        transform: "translate(0px, 0px) scale(1, 1)",
                        opacity: 1,
                        filter: "blur(0px)",
                    });
                }, 170);
            });
        }
        if (animationTimersRef.current[id]) {
            window.clearTimeout(animationTimersRef.current[id]);
        }
        animationTimersRef.current[id] = window.setTimeout(() => {
            clearAnimation(id);
            animationTimersRef.current[id] = null;
        }, 340);
    };

    const runMinimizeAnimation = (id) => {
        if (prefersReducedMotion()) {
            setMinimizedWindows((prev) => ({ ...prev, [id]: true }));
            return;
        }
        const windowRect = getWindowRect(id);
        const dockRect = getDockRect(id);
        if (!windowRect || !dockRect) {
            setAnimationStyle(id, {
                transition: "transform 220ms ease-out, opacity 180ms ease-out, filter 180ms ease-out",
                transform: "scale(0.9)",
                opacity: 0,
                filter: "blur(1px)",
            });
        } else {
            const dx = dockRect.left - windowRect.left;
            const dy = dockRect.top - windowRect.top;
            const sx = dockRect.width / windowRect.width;
            const sy = dockRect.height / windowRect.height;
            setAnimationStyle(id, {
                transition: "transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 200ms ease-out, filter 200ms ease-out",
                transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
                opacity: 0.1,
                filter: "blur(1px)",
            });
        }
        if (animationTimersRef.current[id]) {
            window.clearTimeout(animationTimersRef.current[id]);
        }
        animationTimersRef.current[id] = window.setTimeout(() => {
            setMinimizedWindows((prev) => ({ ...prev, [id]: true }));
            clearAnimation(id);
            animationTimersRef.current[id] = null;
        }, 280);
    };

    const runCloseAnimation = (id) => {
        if (prefersReducedMotion()) {
            closeWindow(id);
            return;
        }
        const windowRect = getWindowRect(id);
        const launcherRect = getLauncherRect(id);
        if (windowRect && launcherRect) {
            const dx = launcherRect.left - windowRect.left;
            const dy = launcherRect.top - windowRect.top;
            const sx = launcherRect.width / windowRect.width;
            const sy = launcherRect.height / windowRect.height;
            setAnimationStyle(id, {
                transition: "transform 240ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 180ms ease-out, filter 180ms ease-out",
                transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
                opacity: 0,
                filter: "blur(1px)",
            });
        } else {
            setAnimationStyle(id, {
                transition: "transform 200ms ease-out, opacity 160ms ease-out, filter 160ms ease-out",
                transform: "scale(0.9)",
                opacity: 0,
                filter: "blur(1px)",
            });
        }
        if (animationTimersRef.current[id]) {
            window.clearTimeout(animationTimersRef.current[id]);
        }
        animationTimersRef.current[id] = window.setTimeout(() => {
            closeWindow(id);
            clearAnimation(id);
            animationTimersRef.current[id] = null;
        }, 260);
    };
    const getCenteredPosition = (offsetIndex = 0, sizeOverride) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const defaultWidth = Math.min(900, Math.max(320, viewportWidth * 0.7));
        const defaultHeight = Math.min(620, Math.max(240, viewportHeight * 0.6));
        const width = Math.min(viewportWidth * 0.9, Math.max(320, sizeOverride?.width ?? defaultWidth));
        const height = Math.min(viewportHeight * 0.8, Math.max(240, sizeOverride?.height ?? defaultHeight));
        const offset = Math.min(48, offsetIndex * 12);
        return {
            x: Math.max(16, Math.round((viewportWidth - width) / 2) + offset),
            y: Math.max(16, Math.round((viewportHeight - height) / 2) + offset),
            width,
            height,
        };
    };

    const openWindow = (id, sourceRect) => {
        if (closeTimersRef.current[id]) {
            window.clearTimeout(closeTimersRef.current[id]);
            closeTimersRef.current[id] = null;
        }
        setWindowPositions((prev) => {
            if (prev[id]) return prev;
            const activeCount = Object.keys(openWindows).filter((key) => openWindows[key] && !minimizedWindows[key] && !closingWindows[key]).length;
            return { ...prev, [id]: getCenteredPosition(activeCount) };
        });
        setClosingWindows((prev) => ({ ...prev, [id]: false }));
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        setOpenWindows((prev) => ({ ...prev, [id]: true }));
        setWindowOrder((prev) => (prev.includes(id) ? prev : [...prev, id]));
        bringToFront(id);
        requestAnimationFrame(() => {
            runOpenAnimation(id, sourceRect ?? getLauncherRect(id));
        });
    };

    const closeWindow = (id) => {
        setClosingWindows((prev) => ({ ...prev, [id]: true }));
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        if (closeTimersRef.current[id]) {
            window.clearTimeout(closeTimersRef.current[id]);
        }
        closeTimersRef.current[id] = window.setTimeout(() => {
            setOpenWindows((prev) => ({ ...prev, [id]: false }));
            setClosingWindows((prev) => ({ ...prev, [id]: false }));
            setWindowOrder((prev) => prev.filter((windowId) => windowId !== id));
            closeTimersRef.current[id] = null;
        }, 140);
    };

    const minimizeWindow = (id) => {
        runMinimizeAnimation(id);
    };

    const restoreWindow = (id, sourceRect) => {
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        bringToFront(id);
        requestAnimationFrame(() => {
            runOpenAnimation(id, sourceRect ?? getDockRect(id));
        });
    };

    const openOrRestoreWindow = (id) => {
        if (openWindows[id] && minimizedWindows[id]) {
            restoreWindow(id, getDockRect(id));
        } else {
            openWindow(id, getLauncherRect(id));
        }
    };

    const toggleZoomWindow = (id) => {
        setZoomedWindows((prev) => {
            const next = !prev[id];
            if (next) {
                setWindowPositions((posPrev) => {
                    const current = posPrev[id];
                    if (!current) return posPrev;
                    const centered = getCenteredPosition(0, {
                        width: current.width,
                        height: current.height,
                    });
                    return { ...posPrev, [id]: { ...current, x: centered.x, y: centered.y } };
                });
            }
            return { ...prev, [id]: next };
        });
        bringToFront(id);
    };

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setClock(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        };
        updateClock();
        const intervalId = window.setInterval(updateClock, 60000);
        return () => window.clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const target = event.target;
            if (target && (["INPUT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable)) {
                return;
            }
            const key = event.key.toLowerCase();
            if (key === "a") openOrRestoreWindow("about");
            if (key === "p") openOrRestoreWindow("projects");
            if (key === "s") openOrRestoreWindow("skills");
            if (key === "r") openOrRestoreWindow("resume");
            if (key === "c") openOrRestoreWindow("contact");
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const hasVisibleWindows = Object.keys(openWindows).some(
        (id) => openWindows[id] && !minimizedWindows[id] && !closingWindows[id]
    );

    return (
        <div className="os-screen fixed inset-0 text-foreground overflow-hidden">
            <div className="os-topbar flex h-12 items-center justify-between border-b px-4">
                <div className="font-semibold text-sm os-text">
                    Tjwu.OS v1.0 <span className="os-accent ml-2">SYSTEM READY</span>
                </div>
                <div className="flex gap-2">
                    {["about", "projects", "skills", "resume", "contact"].map((id) => (
                        <button
                            key={id}
                            type="button"
                            data-app={id}
                            onClick={(event) => openWindow(id, event.currentTarget.getBoundingClientRect())}
                            className="os-button border px-3 py-1 text-sm font-medium"
                        >
                            {windowConfig[id].title}
                        </button>
                    ))}
                </div>
                <div className="text-xs os-muted">
                    {clock} <span className="os-accent ml-2">SYSTEM ONLINE</span>
                </div>
            </div>

            <div className="relative h-[calc(100%-3rem)] w-full">
                <div
                    className={`os-boot fixed left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 border px-6 py-5 text-center ${hasVisibleWindows ? "os-boot--dimmed pointer-events-none z-0" : "os-boot--active pointer-events-auto z-20"}`}
                >
                    <div className="text-lg font-semibold os-text">Welcome to TJWU.OS</div>
                    <div className="mt-2 text-sm os-muted">
                        Click an app above or press A / P / S / R / C
                    </div>
                </div>
                {windowOrder.map((id) => (
                    (openWindows[id] || closingWindows[id]) && windowPositions[id] && !minimizedWindows[id] ? (
                        <OSWindow
                            key={id}
                            title={windowConfig[id].title}
                            onClose={() => runCloseAnimation(id)}
                            onFocus={() => bringToFront(id)}
                            onMinimize={() => minimizeWindow(id)}
                            onToggleZoom={() => toggleZoomWindow(id)}
                            zIndex={windowZIndex[id] ?? 100}
                            isOpen={openWindows[id] && !closingWindows[id]}
                            position={windowPositions[id]}
                            isZoomed={!!zoomedWindows[id]}
                            animationStyle={windowAnimations[id]}
                            windowId={id}
                            isActive={getTopmostVisibleId() === id}
                            onPositionChange={(nextPosition) =>
                                setWindowPositions((prev) => ({ ...prev, [id]: nextPosition }))
                            }
                        >
                            {windowConfig[id].content}
                        </OSWindow>
                    ) : null
                ))}
                <div className="pointer-events-none absolute bottom-4 right-4 text-xs os-muted">
                    PORTFOLIO INTERFACE
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {Object.keys(windowConfig).filter((id) => minimizedWindows[id]).map((id) => (
                        <button
                            key={id}
                            type="button"
                            data-dock={id}
                            onClick={(event) => restoreWindow(id, event.currentTarget.getBoundingClientRect())}
                            className="os-button border px-3 py-1 text-xs"
                        >
                            {windowConfig[id].title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}