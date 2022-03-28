import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import 'react-loading-skeleton/dist/skeleton.css'
import withBoundary from "../../core/hoc/withBoundary";
import CircleChart from "../components/CircleChart";
import { MetricService } from "../../sdk/services";
import { Metric } from "../../sdk/@Types";

function UserTogTags() {

  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getTop3Tags()
      .then(setTopTags)
      .catch(error => {
        setError(new Error(error.message)
        )
      })
  }, [])

  if (error)
    throw error

  if (!topTags.length)
    return <UserTopTagsWrapper>
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
    </UserTopTagsWrapper>

  return <UserTopTagsWrapper>
    {
      topTags.map((tag, i) => {
        return <CircleChart
          key={i}
          progress={tag.percentage}
          theme={i === 0 ? 'primary' : 'default'}
          size={88}
          caption={tag.tagName} />
      })
    }
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px
`

export default withBoundary(UserTogTags, 'top tags')