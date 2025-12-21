import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "../useTheme";
import { Sun, Moon } from "lucide-react";

describe("useTheme", () => {
  const originalLocalStorage = window.localStorage;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    // Reset document attributes
    document.documentElement.removeAttribute("data-theme");
    
    // Mock matchMedia
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      };
    });
  });

  afterEach(() => {
    // Restore original implementations
    window.localStorage = originalLocalStorage;
    window.matchMedia = originalMatchMedia;
    document.documentElement.removeAttribute("data-theme");
  });

  it("should initialize with light theme and Sun icon when no theme is stored and system prefers light", () => {
    // Mock system preference to light
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: false, // prefers light
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      };
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.Icon).toBe(Sun);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should initialize with dark theme and Moon icon when no theme is stored and system prefers dark", () => {
    // Mock system preference to dark
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: true, // prefers dark
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      };
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.Icon).toBe(Moon);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should initialize with stored dark theme and Moon icon from localStorage", () => {
    localStorage.setItem("theme", "dark");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.Icon).toBe(Moon);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should initialize with stored light theme and Sun icon from localStorage", () => {
    localStorage.setItem("theme", "light");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.Icon).toBe(Sun);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should toggle theme and update icon correctly", () => {
    localStorage.setItem("theme", "light");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.Icon).toBe(Sun);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(result.current.Icon).toBe(Moon);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
    expect(result.current.Icon).toBe(Sun);
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should update icon state when theme changes via effect", () => {
    const { result, rerender } = renderHook(() => useTheme());

    // Start with light
    expect(result.current.Icon).toBe(Sun);

    // Manually set theme to dark (simulating external change)
    act(() => {
      result.current.toggleTheme();
    });

    // Icon should update to Moon
    expect(result.current.Icon).toBe(Moon);
    expect(result.current.theme).toBe("dark");
  });
});

