import styled, { css } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

import { Body } from '../typography/Body'
import { Heading } from '../typography/Heading'

const OuterBar = styled.div(
  ({ theme: { color } }) => css`
    height: 4px;
    border-radius: 4px;
    width: 100%;
    background: ${color.stepsIndicatorOuterBar};
  `
)
const InnerBar = styled.div<{ progress: string }>(
  ({ progress, theme: { color } }) => css`
    background: ${color.stepsIndicatorInnerBar};
    width: ${progress};
    border-radius: 4px;
    height: 4px;
    transition: width 0.5s ease-in-out;
  `
)

const TitleSection = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: ${spacing.xs};

    span {
      margin-top: ${spacing.xs};
    }

    @media ${breakpoints.M} {
      margin-bottom: ${spacing.s};
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      span {
        margin-top: 0;
      }
    }
  `
)

export type StepIndicatorProps = {
  title: string
  currentStep: number
  amountOfSteps: number
}

export const StepIndicator = ({
  title,
  currentStep,
  amountOfSteps,
}: StepIndicatorProps) => {
  const progress = `${(currentStep / amountOfSteps) * 100}%`
  return (
    <div style={{ marginBottom: '2rem' }}>
      <TitleSection>
        <Heading level={4}>{title}</Heading>
        <Body size="XS" type="span">
          Step {currentStep} of {amountOfSteps}
        </Body>
      </TitleSection>
      <OuterBar>
        <InnerBar progress={progress} />
      </OuterBar>
    </div>
  )
}
