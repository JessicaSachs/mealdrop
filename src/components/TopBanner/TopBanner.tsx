import styled, { css } from 'styled-components'

import { Heading } from '../typography'

const StyledHeading = styled(Heading)<{ inverted: boolean }>(
  ({ inverted, theme: { color } }) => css`
    color: ${inverted ? color.white : color.primaryText};
  `
)

const Container = styled.div<{ src?: string }>(
  ({ src, theme: { color } }) => css`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: ${src
      ? `url(${src}) no-repeat 50%`
      : color.topBannerBackground};
    background-position: center;
    background-size: cover;
    height: 240px;
  `
)

export type TopBannerProps = {
  title?: string
  photoUrl?: string
  onBackClick?: () => void
}

export const TopBanner = ({ photoUrl, title, onBackClick }: TopBannerProps) => {
  return (
    <Container src={photoUrl}>
      {/* <StyledIconButton onClick={onBackClick} small name="arrow-left" /> */}
      <StyledHeading inverted={!!photoUrl}>{title}</StyledHeading>
    </Container>
  )
}
