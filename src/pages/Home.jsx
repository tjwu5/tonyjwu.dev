import { useEffect, useMemo, useRef, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { OSWindow } from "../components/OSWindow";

const ResumePanel = () => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-2 border-b border-border pb-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs os-muted">DOCUMENT VIEWER</p>
                    <h2 className="text-lg font-semibold os-text sm:text-xl">Resume</h2>
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
                    <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <a
                            href="/Resume_TonyWu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="os-button border px-3 py-2 text-xs font-semibold text-center w-full sm:w-auto"
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
    const [windowOrder, setWindowOrder] = useState([]);
    const [clock, setClock] = useState("");
    const [windowPositions, setWindowPositions] = useState({});
    const [windowZIndex, setWindowZIndex] = useState({});
    const [zCounter, setZCounter] = useState(100);
    const [windowModes, setWindowModes] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [zoomedWindows, setZoomedWindows] = useState({});
    const [closingWindows, setClosingWindows] = useState({});
    const [windowAnimations, setWindowAnimations] = useState({});
    const [titleFlash, setTitleFlash] = useState({});
    const [musicEnabled, setMusicEnabled] = useState(false);
    const [musicVolume, setMusicVolume] = useState(0.1);
    const [isMusicExpanded, setIsMusicExpanded] = useState(false);
    const audioRef = useRef(null);
    const fadeIntervalRef = useRef(null);
    const lastTimeSaveRef = useRef(0);
    const pendingStartTimeRef = useRef(null);
    const closeTimersRef = useRef({});
    const animationTimersRef = useRef({});
    const openWindowCountRef = useRef(0);

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

    const prefersReducedMotion = () =>
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const bringToFront = (id) => {
        setZCounter((prev) => {
            const next = prev + 1;
            setWindowZIndex((zPrev) => ({ ...zPrev, [id]: next }));
            return next;
        });
    };

    const getInitialPosition = (index = 0) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const width = Math.min(viewportWidth * 0.9, Math.max(480, viewportWidth * 0.7));
        const height = Math.min(viewportHeight * 0.8, Math.max(360, viewportHeight * 0.7));
        const edgePadding = 16;
        const topBarHeight = 48;
        const offsetX = index * 48;
        const offsetY = index * 36;
        const baseX = Math.round((viewportWidth - width) / 2) + offsetX;
        const baseY = Math.round((viewportHeight - height) / 2) + offsetY;
        const minX = edgePadding;
        const minY = edgePadding + topBarHeight;
        const maxX = Math.max(minX, viewportWidth - width - edgePadding);
        const maxY = Math.max(minY, viewportHeight - height - edgePadding);
        const rangeX = maxX - minX;
        const rangeY = maxY - minY;
        const wrap = (value, min, range) => (
            range <= 0 ? min : min + (((value - min) % range) + range) % range
        );
        return {
            x: wrap(baseX, minX, rangeX),
            y: wrap(baseY, minY, rangeY),
            width,
            height,
        };
    };

    const clampPosition = (pos) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const edgePadding = 16;
        const topBarHeight = 48;
        const minX = edgePadding;
        const minY = edgePadding + topBarHeight;
        const maxX = Math.max(minX, viewportWidth - (pos.width ?? 720) - edgePadding);
        const maxY = Math.max(minY, viewportHeight - (pos.height ?? 520) - edgePadding);
        return {
            ...pos,
            x: Math.min(Math.max(pos.x, minX), maxX),
            y: Math.min(Math.max(pos.y, minY), maxY),
        };
    };

    const titlebarOverlap = (a, b) => {
        const titleHeight = 36;
        const ax2 = a.x + a.width;
        const ay2 = a.y + titleHeight;
        const bx2 = b.x + b.width;
        const by2 = b.y + titleHeight;
        const ix1 = Math.max(a.x, b.x);
        const iy1 = Math.max(a.y, b.y);
        const ix2 = Math.min(ax2, bx2);
        const iy2 = Math.min(ay2, by2);
        if (ix2 <= ix1 || iy2 <= iy1) return 0;
        const interArea = (ix2 - ix1) * (iy2 - iy1);
        return interArea / (a.width * titleHeight);
    };

    const findNonOverlappingPosition = (base, existing) => {
        let candidate = clampPosition(base);
        const stepX = 24;
        const stepY = 20;
        for (let i = 0; i < 10; i += 1) {
            const hasHeavyOverlap = existing.some((pos) => titlebarOverlap(candidate, pos) > 0.6);
            if (!hasHeavyOverlap) return candidate;
            candidate = clampPosition({
                ...candidate,
                x: candidate.x + stepX,
                y: candidate.y + stepY,
            });
        }
        return candidate;
    };

    const getLauncherRect = (id) =>
        document.querySelector(`[data-app="${id}"]`)?.getBoundingClientRect() ?? null;

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
            setWindowModes((prev) => ({ ...prev, [id]: "background" }));
            return;
        }
        setAnimationStyle(id, {
            transition: "transform 220ms ease-out, opacity 180ms ease-out, filter 180ms ease-out",
            transform: "scale(0.9)",
            opacity: 0,
            filter: "blur(1px)",
        });
        if (animationTimersRef.current[id]) {
            window.clearTimeout(animationTimersRef.current[id]);
        }
        animationTimersRef.current[id] = window.setTimeout(() => {
            setWindowModes((prev) => ({ ...prev, [id]: "background" }));
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

    const runFocusAnimation = (id) => {
        if (prefersReducedMotion()) return;
        setAnimationStyle(id, {
            transition: "transform 140ms ease-out, opacity 140ms ease-out",
            transform: "scale(1.01)",
            opacity: 1,
        });
        if (animationTimersRef.current[id]) {
            window.clearTimeout(animationTimersRef.current[id]);
        }
        animationTimersRef.current[id] = window.setTimeout(() => {
            clearAnimation(id);
            animationTimersRef.current[id] = null;
        }, 160);
    };

    const enforceMobileSingleActive = (activeId) => {
        if (!isMobile) return;
        setWindowModes((prev) => {
            const next = { ...prev, [activeId]: "active" };
            Object.keys(prev).forEach((id) => {
                if (id !== activeId && prev[id] === "active") {
                    next[id] = "background";
                }
            });
            return next;
        });
    };

    const openWindow = (id, sourceRect) => {
        if (closeTimersRef.current[id]) {
            window.clearTimeout(closeTimersRef.current[id]);
            closeTimersRef.current[id] = null;
        }
        setWindowPositions((prev) => {
            if (prev[id]) return prev;
            const base = getInitialPosition(openWindowCountRef.current);
            const existing = Object.keys(prev)
                .filter((key) => windowModes[key] === "active" && !closingWindows[key])
                .map((key) => prev[key])
                .filter(Boolean);
            const nextPos = findNonOverlappingPosition(base, existing);
            openWindowCountRef.current += 1;
            return { ...prev, [id]: nextPos };
        });
        setClosingWindows((prev) => ({ ...prev, [id]: false }));
        setWindowModes((prev) => ({ ...prev, [id]: "active" }));
        setWindowOrder((prev) => (prev.includes(id) ? prev : [...prev, id]));
        bringToFront(id);
        enforceMobileSingleActive(id);
        requestAnimationFrame(() => {
            runOpenAnimation(id, sourceRect ?? getLauncherRect(id));
        });
    };

    const closeWindow = (id) => {
        setClosingWindows((prev) => ({ ...prev, [id]: true }));
        if (closeTimersRef.current[id]) {
            window.clearTimeout(closeTimersRef.current[id]);
        }
        closeTimersRef.current[id] = window.setTimeout(() => {
            setWindowModes((prev) => ({ ...prev, [id]: "inactive" }));
            setClosingWindows((prev) => ({ ...prev, [id]: false }));
            setWindowOrder((prev) => prev.filter((windowId) => windowId !== id));
            closeTimersRef.current[id] = null;
        }, 140);
    };

    const minimizeWindow = (id) => {
        runMinimizeAnimation(id);
    };

    const restoreWindow = (id, sourceRect) => {
        setWindowModes((prev) => ({ ...prev, [id]: "active" }));
        bringToFront(id);
        enforceMobileSingleActive(id);
        requestAnimationFrame(() => {
            runOpenAnimation(id, sourceRect ?? getLauncherRect(id));
        });
    };

    const openOrRestoreWindow = (id) => {
        if (windowModes[id] === "background") {
            restoreWindow(id, getLauncherRect(id));
        } else {
            openWindow(id, getLauncherRect(id));
        }
    };

    const handleAppButtonClick = (id, rect) => {
        const mode = windowModes[id] ?? "inactive";
        if (mode === "inactive") {
            openWindow(id, rect);
            return;
        }
        if (mode === "background") {
            restoreWindow(id, rect);
            return;
        }
        bringToFront(id);
        enforceMobileSingleActive(id);
        runFocusAnimation(id);
        setTitleFlash((prev) => ({ ...prev, [id]: true }));
        window.setTimeout(() => {
            setTitleFlash((prev) => ({ ...prev, [id]: false }));
        }, 300);
    };

    const toggleZoomWindow = (id) => {
        setZoomedWindows((prev) => ({ ...prev, [id]: !prev[id] }));
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
        const savedEnabled = localStorage.getItem("tjwu.os.music.enabled");
        const savedVolume = localStorage.getItem("tjwu.os.music.volume");
        const savedTime = localStorage.getItem("tjwu.os.music.time");
        if (savedEnabled === "true") {
            setMusicEnabled(true);
        }
        if (savedVolume) {
            const parsed = Number.parseFloat(savedVolume);
            if (!Number.isNaN(parsed)) {
                const clamped = Math.min(Math.max(parsed, 0), 0.25);
                setMusicVolume(clamped);
            }
        }
        if (savedTime) {
            const parsed = Number.parseFloat(savedTime);
            if (!Number.isNaN(parsed) && parsed >= 0) {
                const audioEl = audioRef.current;
                if (audioEl && audioEl.readyState >= 1) {
                    audioEl.currentTime = parsed;
                } else {
                    pendingStartTimeRef.current = parsed;
                }
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tjwu.os.music.enabled", musicEnabled ? "true" : "false");
        localStorage.setItem("tjwu.os.music.volume", String(musicVolume));
    }, [musicEnabled, musicVolume]);

    const savePlaybackTime = () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        localStorage.setItem("tjwu.os.music.time", String(audioEl.currentTime || 0));
    };

    const fadeInVolume = (audioEl, targetVolume) => {
        if (fadeIntervalRef.current) {
            window.clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
        }
        const durationMs = 1200;
        const stepMs = 50;
        const steps = Math.max(1, Math.round(durationMs / stepMs));
        const startVolume = 0;
        let currentStep = 0;
        audioEl.volume = startVolume;
        fadeIntervalRef.current = window.setInterval(() => {
            currentStep += 1;
            const next = Math.min(targetVolume, (targetVolume * currentStep) / steps);
            audioEl.volume = next;
            if (currentStep >= steps) {
                window.clearInterval(fadeIntervalRef.current);
                fadeIntervalRef.current = null;
            }
        }, stepMs);
    };

    const startPlayback = async () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        const savedTime = localStorage.getItem("tjwu.os.music.time");
        const parsed = savedTime ? Number.parseFloat(savedTime) : NaN;
        const hasSavedTime = !Number.isNaN(parsed) && parsed >= 0;
        const computeStartTime = () => {
            if (hasSavedTime) {
                return parsed;
            }
            if (Number.isFinite(audioEl.duration) && audioEl.duration < 60) {
                return 0;
            }
            return 60;
        };
        if (Number.isFinite(audioEl.duration)) {
            audioEl.currentTime = computeStartTime();
        } else {
            pendingStartTimeRef.current = computeStartTime();
        }
        fadeInVolume(audioEl, musicVolume);
        try {
            await audioEl.play();
            setMusicEnabled(true);
        } catch (error) {
            setMusicEnabled(false);
        }
    };

    const handleMusicToggle = async () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        if (musicEnabled && !audioEl.paused) {
            audioEl.pause();
            setMusicEnabled(false);
            savePlaybackTime();
            return;
        }
        await startPlayback();
    };

    const handleVolumeChange = (event) => {
        const nextVolume = Number.parseFloat(event.target.value);
        const clamped = Math.min(Math.max(nextVolume, 0), 0.25);
        setMusicVolume(clamped);
        if (audioRef.current) {
            audioRef.current.volume = clamped;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = musicVolume;
        }
    }, [musicVolume]);

    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return undefined;
        const handleTimeUpdate = () => {
            const now = Date.now();
            if (now - lastTimeSaveRef.current < 1000) return;
            lastTimeSaveRef.current = now;
            savePlaybackTime();
        };
        const handlePause = () => savePlaybackTime();
        const handleBeforeUnload = () => savePlaybackTime();
        audioEl.addEventListener("timeupdate", handleTimeUpdate);
        audioEl.addEventListener("pause", handlePause);
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            audioEl.removeEventListener("timeupdate", handleTimeUpdate);
            audioEl.removeEventListener("pause", handlePause);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    const handleAudioLoadedMetadata = () => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        const pending = pendingStartTimeRef.current;
        if (pending === null) return;
        const target = Number.isFinite(audioEl.duration) && audioEl.duration < pending ? 0 : pending;
        audioEl.currentTime = target;
        pendingStartTimeRef.current = null;
    };

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px), (pointer: coarse)");
        const update = () => setIsMobile(media.matches);
        update();
        if (media.addEventListener) {
            media.addEventListener("change", update);
            return () => media.removeEventListener("change", update);
        }
        media.addListener(update);
        return () => media.removeListener(update);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsMusicExpanded(false);
        }
    }, [isMobile]);

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

    useEffect(() => {
        if (!isMobile) return;
        const activeIds = Object.keys(windowModes)
            .filter((id) => windowModes[id] === "active" && !closingWindows[id]);
        if (activeIds.length <= 1) return;
        const topId = activeIds.reduce((topId, id) => {
            if (!topId) return id;
            const topZ = windowZIndex[topId] ?? 0;
            const currentZ = windowZIndex[id] ?? 0;
            return currentZ >= topZ ? id : topId;
        }, "");
        if (!topId) return;
        setWindowModes((prev) => {
            let changed = false;
            const next = { ...prev };
            Object.keys(prev).forEach((id) => {
                if (id !== topId && prev[id] === "active") {
                    next[id] = "background";
                    changed = true;
                }
            });
            return changed ? next : prev;
        });
    }, [isMobile, windowModes, closingWindows, windowZIndex]);

    const hasVisibleWindows = Object.keys(windowModes).some(
        (id) => windowModes[id] === "active" && !closingWindows[id]
    );

    const topmostActiveId = Object.keys(windowModes)
        .filter((id) => windowModes[id] === "active" && !closingWindows[id])
        .reduce((topId, id) => {
            if (!topId) return id;
            const topZ = windowZIndex[topId] ?? 0;
            const currentZ = windowZIndex[id] ?? 0;
            return currentZ >= topZ ? id : topId;
        }, "");

    return (
        <div className="os-screen fixed inset-0 text-foreground overflow-hidden flex flex-col min-h-screen">
            <audio ref={audioRef} src="/audio/bg.mp3" loop preload="auto" onLoadedMetadata={handleAudioLoadedMetadata} />
            <div className="os-bg-layer" aria-hidden="true">
                <div className="os-bg-glow" />
                <div className="os-bg-pixels">
                    <span style={{ top: "18%", left: "12%", animationDelay: "0s" }} />
                    <span style={{ top: "32%", left: "68%", animationDelay: "2s" }} />
                    <span style={{ top: "12%", left: "78%", animationDelay: "4s" }} />
                    <span style={{ top: "64%", left: "22%", animationDelay: "1s" }} />
                    <span style={{ top: "74%", left: "58%", animationDelay: "3s" }} />
                    <span style={{ top: "52%", left: "86%", animationDelay: "5s" }} />
                    <span style={{ top: "82%", left: "34%", animationDelay: "6s" }} />
                    <span style={{ top: "26%", left: "42%", animationDelay: "7s" }} />
                    <span style={{ top: "46%", left: "10%", animationDelay: "8s" }} />
                    <span style={{ top: "88%", left: "80%", animationDelay: "9s" }} />
                </div>
            </div>
            <div className="os-topbar relative z-10 flex h-12 items-center justify-between border-b px-4">
                <div className="font-semibold text-sm os-text">
                    tjwu.OS v1.0 <span className="os-accent ml-2">SYSTEM READY</span>
                </div>
                <div className="os-topbar-apps flex gap-2">
                    {["about", "projects", "skills", "resume", "contact"].map((id) => {
                        const mode = windowModes[id] ?? "inactive";
                        const stateClass = mode === "active"
                            ? "os-app-btn--active"
                            : mode === "background"
                                ? "os-app-btn--background"
                                : "os-app-btn--inactive";
                        return (
                            <button
                                key={id}
                                type="button"
                                data-app={id}
                            onClick={(event) => handleAppButtonClick(id, event.currentTarget.getBoundingClientRect())}
                                className={`os-button os-app-btn border px-3 py-1 text-sm font-medium ${stateClass}`}
                            >
                                <span>{windowConfig[id].title}</span>
                                {mode === "background" && <span className="os-app-indicator" />}
                            </button>
                        );
                    })}
                </div>
                <div className="text-xs os-muted">
                    {clock} <span className="os-accent ml-2">SYSTEM ONLINE</span>
                </div>
            </div>

            <div className="relative z-10 flex-1 min-h-0 w-full">
                <div className="pointer-events-none absolute top-4 right-4 text-xs os-muted">
                    TJWU.OS Workspace
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div
                        className={`os-boot w-[90vw] max-w-xl border px-6 py-5 text-center ${hasVisibleWindows ? "os-boot--dimmed pointer-events-none z-0" : "os-boot--active pointer-events-auto z-20"}`}
                    >
                        <div className="text-lg font-semibold os-text">Welcome to TJWU.OS</div>
                        <div className="mt-2 text-sm os-muted">
                            Click an app above or press A / P / S / R / C
                        </div>
                    </div>
                </div>
                {windowOrder.map((id) => (
                    windowModes[id] === "active" && (!isMobile || id === topmostActiveId) ? (
                        <OSWindow
                            key={id}
                            title={windowConfig[id].title}
                            onClose={() => runCloseAnimation(id)}
                            onFocus={() => bringToFront(id)}
                            onMinimize={() => {
                                if (windowModes[id] === "active") {
                                    minimizeWindow(id);
                                }
                            }}
                            onToggleZoom={() => toggleZoomWindow(id)}
                            zIndex={windowZIndex[id] ?? 100}
                            isOpen={!closingWindows[id]}
                            position={windowPositions[id]}
                            isZoomed={!!zoomedWindows[id]}
                            animationStyle={windowAnimations[id]}
                            windowId={id}
                            titleFlash={!!titleFlash[id]}
                        >
                            {windowConfig[id].content}
                        </OSWindow>
                    ) : null
                ))}
                <div
                    className={`fixed z-[300] rounded-md border border-border bg-black/50 px-3 py-2 text-xs os-text shadow-[0_0_12px_rgba(74,222,128,0.18)] backdrop-blur-md os-music-widget ${musicEnabled ? "os-music-widget--on" : "os-music-widget--off"}`}
                    style={{
                        left: "max(12px, env(safe-area-inset-left))",
                        bottom: "max(12px, env(safe-area-inset-bottom))",
                    }}
                >
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleMusicToggle}
                            className="os-button border px-3 py-2 text-xs font-medium min-h-[44px]"
                            aria-pressed={musicEnabled}
                        >
                            Music {musicEnabled ? "On" : "Off"}
                        </button>
                        {(!isMobile || isMusicExpanded) && (
                            <input
                                type="range"
                                min="0"
                                max="0.25"
                                step="0.01"
                                value={musicVolume}
                                onChange={handleVolumeChange}
                                aria-label="Background music volume"
                                className="h-1 w-20 accent-emerald-300"
                            />
                        )}
                        {isMobile && (
                            <button
                                type="button"
                                onClick={() => setIsMusicExpanded((prev) => !prev)}
                                className="os-button border px-2 py-2 text-xs font-medium min-h-[44px]"
                                aria-label={isMusicExpanded ? "Collapse music controls" : "Expand music controls"}
                                aria-expanded={isMusicExpanded}
                            >
                                {isMusicExpanded ? "▴" : "▾"}
                            </button>
                        )}
                    </div>
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 text-xs os-muted">
                    PORTFOLIO INTERFACE
                </div>
            </div>
        </div>
    );
}