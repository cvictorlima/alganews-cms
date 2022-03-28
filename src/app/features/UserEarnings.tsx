import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary";
import { User } from "../../sdk/@Types";
import { UserService } from "../../sdk/services";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

function UserEarnings() {

  const [user, setUser] = useState<User.Detailed>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    UserService
      .getDetailedUser(7)
      .then(setUser)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  if (error)
    throw error

  if (!user)
    return <UserEarningsWrapper style={{ height: '123px' }} >
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
      <Skeleton width={150} height={40} />
    </UserEarningsWrapper>

  return <UserEarningsWrapper>
    <ValueDescriptor color='primary' description='ganhos no mes' value={user.metrics.monthlyEarnings} isCurrency />
    <ValueDescriptor color='primary' description='ganhos na semana' value={user.metrics.weeklyEarnings} isCurrency />
    <ValueDescriptor color='default' description='ganhos de sempre' value={user.metrics.lifetimeEarnings} isCurrency />
    <ValueDescriptor color='default' description='total de palavras' value={user.metrics.lifetimeWords} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px
`

export default withBoundary(UserEarnings, 'ganhos do usuário')
