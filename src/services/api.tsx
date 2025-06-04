import { config } from "../config";

export const API = {
    PROCESSES: `${config.baseUrl}processes`,
} as const;