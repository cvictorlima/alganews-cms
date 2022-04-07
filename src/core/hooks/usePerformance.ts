import { ChartProps } from "./../../app/components/Chart/Chart";
import { useCallback, useState } from "react";
import { Metric } from "../../sdk/@Types";
import { MetricService } from "../../sdk/services";
import transformEditorMonthlyEarningsIntoChartJS from "../utils/transformEditorMonthlyEarningsIntoChartJS";
export default function usePerformance() {
  const [performance, setPerformance] = useState<ChartProps["data"]>();

  const fetchPerformance = useCallback(async function () {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJS)
      .then(setPerformance);
  }, []);

  return { performance, fetchPerformance };
}
