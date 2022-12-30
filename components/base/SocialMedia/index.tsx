import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import * as utilities from '../../../styles/utilities';
import { links } from './utils/social_media';
import { displayIcons } from './helpers';

interface Values {
    name: string;
    src: string;
}

interface Props {
    bottomSpacing?: string;
}

interface Props {
    bottomSpacing?: string;
}

export const DisplayInline = styled.li<Props>`
    display: inline;
    margin: 30px;
    color: ${utilities.highlight};
    &:hover {
        cursor: pointer;
        color: ${utilities.yellow};
        transition: 0.1s color;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    svg {
        padding-bottom: ${props => props.bottomSpacing || null};
    }
`;

const SocialMedia = ({ bottomSpacing }: Props) => {
    const displaySocialMediaLinks = () => {
        return _.map(links, (link: Values, index: number) => {
            return (
                <DisplayInline key={index} bottomSpacing={bottomSpacing}>
                    {displayIcons(link.name, link.src)}
                </DisplayInline>
            );
        });
    };

    return (
        <div>
            <ul key={'social-media'} style={{ marginTop: '20px' }}>
                {displaySocialMediaLinks()}
            </ul>
        </div>
    );
};

export default SocialMedia;
