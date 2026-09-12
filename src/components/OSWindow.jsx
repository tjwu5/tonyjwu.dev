import { useMemo, useRef } from "react";

export const OSWindow = ({
  title,
  onClose,
  onFocus,
  onMinimize,
  onToggleZoom,
  onMove,
  zIndex,
  isOpen,
  position,
  isZoomed,
  animationStyle,
  windowId,
  titleFlash,
  children,
}) => {
  const panelRef = useRef(null);
  const dragStateRef = useRef(null);

  const panelStyle = useMemo(() => ({
    width: position?.width ? `${position.width}px` : "clamp(480px, 70vw, 90vw)",
    height: isZoomed ? "80vh" : "fit-content",
    maxWidth: "90vw",
    maxHeight: "80vh",
    minWidth: "480px",
    minHeight: "260px",
    left: position?.x ?? 16,
    top: position?.y ?? 16,
    zIndex,
    ...animationStyle,
  }), [isZoomed, animationStyle, position, zIndex]);

  const handleTitlePointerDown = (event) => {
    if (!onMove || isZoomed || event.button !== 0) return;
    if (event.target.closest('[data-no-drag="true"]')) return;

    event.preventDefault();
    onFocus?.();

    const panel = panelRef.current;
    const width = position?.width ?? panel?.offsetWidth ?? 480;
    const height = panel?.offsetHeight ?? 360;
    const originX = position?.x ?? 16;
    const originY = position?.y ?? 16;

    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX,
      originY,
      width,
      height,
      pointerId: event.pointerId,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleTitlePointerMove = (event) => {
    const drag = dragStateRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const edgePadding = 16;
    const topBarHeight = 48;
    const minX = edgePadding;
    const minY = edgePadding + topBarHeight;
    const maxX = Math.max(minX, window.innerWidth - drag.width - edgePadding);
    const maxY = Math.max(minY, window.innerHeight - drag.height - edgePadding);

    onMove({
      x: Math.min(maxX, Math.max(minX, drag.originX + dx)),
      y: Math.min(maxY, Math.max(minY, drag.originY + dy)),
    });
  };

  const endDrag = (event) => {
    const drag = dragStateRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragStateRef.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={panelRef}
      className={`os-panel os-window fixed border shadow-md flex flex-col ${isOpen ? "os-window--open" : ""}`}
      style={panelStyle}
      data-window={windowId}
      onPointerDown={onFocus}
      role="dialog"
      aria-label={title}
      aria-modal="true"
    >
      <div
        className={`os-titlebar flex items-center justify-between border-b px-3 py-2 select-none os-titlebar-glow ${titleFlash ? "os-titlebar-flash" : ""}`}
        onPointerDown={handleTitlePointerDown}
        onPointerMove={handleTitlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="flex items-center gap-2"
          data-no-drag="true"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onMinimize();
            }}
            onPointerDown={(event) => event.stopPropagation()}
            data-no-drag="true"
            className="os-mobile-minimize hidden items-center justify-center text-xs text-white/80 border border-white/20"
            aria-label={`Minimize ${title}`}
            title="Minimize"
          >
            ˅
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            onPointerDown={(event) => event.stopPropagation()}
            data-no-drag="true"
            className="os-traffic h-4 w-4 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
            aria-label={`Close ${title}`}
            title="Close"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onMinimize();
            }}
            onPointerDown={(event) => event.stopPropagation()}
            data-no-drag="true"
            className="os-traffic h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
            aria-label={`Minimize ${title}`}
            title="Minimize"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleZoom();
            }}
            onPointerDown={(event) => event.stopPropagation()}
            data-no-drag="true"
            className="os-traffic h-4 w-4 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200"
            aria-label={`Toggle zoom for ${title}`}
            title="Zoom"
          />
        </div>
        <div
          className={`flex-1 text-center text-sm font-semibold text-foreground ${isZoomed ? "cursor-default" : "cursor-move"}`}
        >
          {title}
        </div>
        <div className="w-16" />
      </div>
      <div className="flex-auto overflow-auto p-3 text-left sm:p-4 os-window-content">
        {children}
      </div>
    </div>
  );
};
