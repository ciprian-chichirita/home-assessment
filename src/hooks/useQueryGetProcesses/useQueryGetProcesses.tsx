import { useQuery, type UseQueryOptions } from "react-query";
import processesResource from "../../services/resources/processes.resource";
import type { ProcessList } from "../../services/resources/processes";

export const useQueryGetrocessess = (
    options?: UseQueryOptions<ProcessList, Error, ProcessList, [string]>
) => {
    return useQuery<ProcessList, Error, ProcessList, [string]>({
        queryKey: [processesResource.queryKey],
        queryFn: () => processesResource.getProcesses(),
        ...options,
    });
}