import * as B from './Button.styles'

export interface ButtonProps {
    variant: 'danger' | 'text' | 'primary'
    label: string
}

export default function Button ({variant, label}:ButtonProps) {

    return <B.Wrapper variant={variant}>
        {label}
    </B.Wrapper>
}
