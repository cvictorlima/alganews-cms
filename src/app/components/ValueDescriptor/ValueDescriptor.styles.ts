import styled from 'styled-components'

const COLOR = {
    default: '#274060',
    primary: '#0099FF'
}

export const Wrapper = styled.div<{
    color: 'default' | 'primary'
}>`
    display: flex;
    flex-direction:column;
    
    span.Description {
        font-size: 12px;
        color: ${COLOR.default};
    };

    span.Currency {
        color: ${p=>COLOR[p.color]};

    };

    span.Value {
        font-size: 18px;
        font-weight: 900;
        color: ${p=>COLOR[p.color]};

    }
`