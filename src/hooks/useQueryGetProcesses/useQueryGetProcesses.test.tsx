import { renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { expect, vi, describe, it } from "vitest";
import useQueryGetProcesses from "./useQueryGetProcesses";
import type { PropsWithChildren } from "react";

vi.mock("./useQueryGetProcesses", () => ({
  default: vi.fn().mockReturnValue([
    {
      "name": "smss.exe",
      "device": "Stark",
      "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      "status": "scheduled"
    }])
}));

// Helper function to create wrapper with QueryClient
const createWrapper = () => {
  const queryClient = new QueryClient();

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useQueryGetProcesses', () => {
  it('Should return mocked data', () => {
    const { result } = renderHook(() => useQueryGetProcesses(), {
      wrapper: createWrapper(),
    });

    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "device": "Stark",
          "name": "smss.exe",
          "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
          "status": "scheduled",
        },
      ]
    `);
  });
});