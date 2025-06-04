import { config } from "../../config";
import { API } from "../api";
import apiCall from "../fetch";
import type { ProcessList } from "./processes";
import { sleep } from "./processes.utils";

export const processesResource = {
  queryKey: "processes",

  getProcesses: async (): Promise<ProcessList> => {
    try {
      const response = await apiCall.get<ProcessList>(API.PROCESSES);
      //artificially slow this down (for demo purposes)
      await sleep(1000);
      if (config.isDevelopment) {
        console.log("getProcesses: ", response);
      }
      return response;
    } catch (error) {
      //Fail gracefully and log the error
      console.error("Error fetching cars:", error);
      // return an empty array
      return [];
    }
  },
};

export default processesResource;
