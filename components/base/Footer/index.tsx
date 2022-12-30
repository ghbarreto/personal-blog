import * as Reusable from '../../../styles/Reusable';

import styled from 'styled-components';

export const StyledFooter = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
    font-family: Fira Code Medium;
`;

const Footer = () => {
    return (
        <Reusable.FlexCenter>
            <StyledFooter>
                <Reusable.Tags primary>{'<'}</Reusable.Tags>GABRIEL BARRETO @ 2021 | ALL RIGHTS RESERVED
                <Reusable.Tags primary>{'/>'}</Reusable.Tags>
            </StyledFooter>
        </Reusable.FlexCenter>
    );
};

export default Footer;
