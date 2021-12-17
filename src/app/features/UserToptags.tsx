import { useEffect, useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@Types/Metric";
import MetricService from "../../sdk/services/Metric.service";
import UserService from "../../sdk/services/User.service";
import CircleChart from "../components/CircleChart";

export default function UserTogTags () {

  const [topTags, setTopTags] = useState<Metric.EditorTagRatio> ([])

  useEffect(() => {
    MetricService
      .getTop3Tags()
      .then(setTopTags)
  },[])

  if (!topTags)
    return null

  return <UserTopTagsWrapper>
    {
      topTags.map((tag, i) => {
        return <CircleChart 
        progress={tag.percentage} 
        theme= {i === 0 ? 'primary' : 'default' }
        size={88} 
        caption= {tag.tagName} />
      })
    }
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px
`
