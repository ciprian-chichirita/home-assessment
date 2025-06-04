/**
 * This file should be auto-generated (use a npm script, npm package, etc.)
 * for demo I wrote it manually
 */
export type ProcessStatus = "scheduled" | "available";

export interface ProcessItem {
  name: string;
  device: string;
  path: string;
  status: ProcessStatus;
}

export type ProcessList = ProcessItem[];
