import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const OSWindow = ({
  title,
  onClose,
  onFocus,
  onMinimize,
  onToggleZoom,
  zIndex,
  isOpen,
  position,
  onPositionChange,
  isZoomed,
  animationStyle,
  windowId,
  isActive,
  children,
}) => {
  const windowRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const activePointerId = useRef(null);
  const isResizing = useRef(false);
  const resizePointerId = useRef(null);
  const resizeStart = useRef({ width: 0, height: 0, x: 0, y: 0 });

  const getSize = () => {
    if (position?.width && position?.height) {
      return { width: position.width, height: position.height };
    }
    const rect = windowRef.current?.getBoundingClientRect();
    return { width: rect?.width ?? 320, height: rect?.height ?? 240 };
  };

  const clampPosition = (nextX, nextY, sizeOverride) => {
    const { width, height } = sizeOverride ?? getSize();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxX = Math.max(16, viewportWidth - width - 16);
    const maxY = Math.max(16, viewportHeight - height - 16);
    return {
      x: clamp(nextX, 16, maxX),
      y: clamp(nextY, 16, maxY),
      width,
      height,
    };
  };

  useEffect(() => {
    if (!isOpen || !windowRef.current || position) return;
    const rect = windowRef.current.getBoundingClientRect();
    const nextX = Math.round((window.innerWidth - rect.width) / 2);
    const nextY = Math.round((window.innerHeight - rect.height) / 2);
    onPositionChange(clampPosition(nextX, nextY));
  }, [isOpen, position, onPositionChange]);

  useEffect(() => {
    if (!position) return;
    const handleResize = () => {
      onPositionChange(clampPosition(position.x, position.y, {
        width: position.width ?? getSize().width,
        height: position.height ?? getSize().height,
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position, onPositionChange]);

  useEffect(() => {
    if (!position) return;
    onPositionChange(clampPosition(position.x, position.y, {
      width: position.width ?? getSize().width,
      height: position.height ?? getSize().height,
    }));
  }, [isZoomed, position, onPositionChange]);

  const handleTitlePointerDown = (event) => {
    if (!windowRef.current) return;
    if (event.button !== 0) return;
    if (event.target.closest("[data-no-drag='true']")) return;
    onFocus();
    isDragging.current = true;
    activePointerId.current = event.pointerId;
    const rect = windowRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleTitlePointerMove = (event) => {
    if (!isDragging.current || activePointerId.current !== event.pointerId) return;
    const nextX = event.clientX - dragOffset.current.x;
    const nextY = event.clientY - dragOffset.current.y;
    onPositionChange(clampPosition(nextX, nextY));
  };

  const handleTitlePointerUp = (event) => {
    if (activePointerId.current !== event.pointerId) return;
    isDragging.current = false;
    activePointerId.current = null;
    if (event.currentTarget?.releasePointerCapture) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleResizePointerDown = (event) => {
    if (event.button !== 0) return;
    onFocus();
    isResizing.current = true;
    resizePointerId.current = event.pointerId;
    const { width, height } = getSize();
    resizeStart.current = {
      width,
      height,
      x: event.clientX,
      y: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleResizePointerMove = (event) => {
    if (!isResizing.current || resizePointerId.current !== event.pointerId) return;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxWidth = Math.min(viewportWidth * 0.9, viewportWidth - 32);
    const maxHeight = Math.min(viewportHeight * 0.8, viewportHeight - 32);
    const minWidth = 320;
    const minHeight = 240;
    const deltaX = event.clientX - resizeStart.current.x;
    const deltaY = event.clientY - resizeStart.current.y;
    const nextWidth = clamp(resizeStart.current.width + deltaX, minWidth, maxWidth);
    const nextHeight = clamp(resizeStart.current.height + deltaY, minHeight, maxHeight);
    const nextPosition = clampPosition(position?.x ?? 16, position?.y ?? 16, {
      width: nextWidth,
      height: nextHeight,
    });
    onPositionChange({
      ...nextPosition,
      width: nextWidth,
      height: nextHeight,
    });
  };

  const handleResizePointerUp = (event) => {
    if (resizePointerId.current !== event.pointerId) return;
    isResizing.current = false;
    resizePointerId.current = null;
    if (event.currentTarget?.releasePointerCapture) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={windowRef}
      className={`os-panel os-window fixed border shadow-md flex flex-col relative ${isOpen ? "os-window--open" : ""}`}
      style={{
        zIndex,
        left: position?.x ?? 16,
        top: position?.y ?? 16,
        width: isZoomed ? "min(90vw, 900px)" : `${position?.width ?? 720}px`,
        height: isZoomed ? "80vh" : `${position?.height ?? 520}px`,
        maxWidth: "90vw",
        maxHeight: "80vh",
        minWidth: "320px",
        minHeight: "240px",
        ...animationStyle,
      }}
      data-window={windowId}
      onPointerDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div
        className={`flex items-center justify-between border-b px-3 py-2 select-none os-titlebar-glow ${isActive ? "os-titlebar-glow--active" : "os-titlebar-glow--inactive"}`}
        onPointerDown={handleTitlePointerDown}
        onPointerMove={handleTitlePointerMove}
        onPointerUp={handleTitlePointerUp}
        onPointerCancel={handleTitlePointerUp}
      >
        <div
          className="flex items-center gap-2"
          data-no-drag="true"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            onPointerDown={(event) => event.stopPropagation()}
            data-no-drag="true"
            className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
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
            className="h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
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
            className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200"
            aria-label={`Toggle zoom for ${title}`}
            title="Zoom"
          />
        </div>
        <div
          className="flex-1 text-center text-sm font-semibold text-foreground cursor-move"
        >
          {title}
        </div>
        <div className="w-16" />
      </div>
      <div className="flex-1 overflow-auto p-4 text-left">
        {children}
      </div>
      {!isZoomed && (
        <div
          className="os-resize-handle"
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerUp}
          onPointerCancel={handleResizePointerUp}
        />
      )}
    </div>
  );
};
