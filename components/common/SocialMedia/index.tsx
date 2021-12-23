import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import _ from 'lodash';
import { links } from './utils/social_media';
import React from 'react';
import * as Styled from './styles';
import Link from 'next/link';

interface Values {
  name: string;
  src: string;
}

const displayIcons = (name: string, src: string) => {
  switch (name) {
    case 'Github':
      return (
        <Link href={src} passHref={true}>
          <a target="_blank" rel="noreferrer">
            <BsGithub size={35} />
          </a>
        </Link>
      );
    case 'Linkedin':
      return (
        <Link href={src} passHref={true}>
          <a target="_blank" rel="noreferrer">
            <BsLinkedin size={35} />
          </a>
        </Link>
      );
    case 'Twitter':
      return (
        <Link href={src} passHref={true}>
          <a target="_blank" rel="noreferrer">
            <AiFillTwitterCircle size={40} />
          </a>
        </Link>
      );
  }
};

const displaySocialMediaLinks = () => {
  return _.map(links, (link: Values) => {
    return (
      <React.Fragment>
        <Styled.DisplayInline>
          {displayIcons(link.name, link.src)}
        </Styled.DisplayInline>
      </React.Fragment>
    );
  });
};

const SocialMedia: React.FC = () => {
  return (
    <ul key={'social-media'} style={{ marginTop: '20px' }}>
      {displaySocialMediaLinks()}
    </ul>
  );
};

export default SocialMedia;
