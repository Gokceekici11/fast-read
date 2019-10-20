import React from 'react'

import { PageWrapper, TextWrapper } from 'components/Layouts'
import Badge from 'components/Badge'
import { colors } from 'utils'
import {Step, Steps} from 'components/Steps'

const ReadArticle = () => {
    return (
        <PageWrapper>
            <TextWrapper fontSize="16">Read Page</TextWrapper>
            <Steps stepNumber={2}>
                <Step />
                <Step />
                <Step />
                <Step />
                <Step />
                <Step />
            </Steps>
            <Badge color={colors.guardsmanRed}>
                <TextWrapper fontSize="16">word</TextWrapper>
            </Badge>
            <Badge color={colors.purpleDarkColor}>
                <TextWrapper fontSize="16">word2</TextWrapper>
            </Badge>
            <Badge>
                <TextWrapper fontSize="16">word3</TextWrapper>
            </Badge>
        </PageWrapper>
    )
}

export default ReadArticle;
