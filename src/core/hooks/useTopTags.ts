import { useCallback, useState } from "react";
import { Metric } from "../../sdk/@Types";
import { MetricService } from "../../sdk/services";

export default function useTopTags() {
  const [tags, setTags] = useState<Metric.EditorTagRatio>();

  const fetchTags = useCallback(async function () {
    MetricService.getTop3Tags().then(setTags);
  }, []);

  return { tags, fetchTags };
}
