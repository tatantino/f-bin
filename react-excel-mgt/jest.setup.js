// @ts-nocheck
import '@testing-library/jest-dom';

// Add setImmediate polyfill
global.setImmediate = callback => setTimeout(callback, 0);

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock Next.js server components
jest.mock('next/server', () => ({
  NextRequest: jest.fn().mockImplementation((url, init) => ({
    url,
    method: init?.method || 'GET',
    json: () => Promise.resolve(init?.body ? JSON.parse(init.body) : {}),
  })),
  NextResponse: {
    json: jest.fn().mockImplementation((body, init) => ({
      status: init?.status || 200,
      headers: init?.headers || {},
      json: () => Promise.resolve(body),
    })),
  },
}));
