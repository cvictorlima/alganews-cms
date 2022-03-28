import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import transformEditorMonthlyEarningsIntoChartJS from "../../core/utils/transformEditorMonthlyEarningsIntoChartJS";
import { MetricService } from "../../sdk/services";
import Chart, { ChartProps } from "../components/Chart/Chart";

function UserPerformance() {

  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJS)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  if (error)
    throw error


  if (!editorEarnings)
    return <div>
      <Skeleton
        height={227}
      />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default withBoundary(UserPerformance, 'user performance')