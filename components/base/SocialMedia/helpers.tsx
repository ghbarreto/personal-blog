import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';

export const displayIcons = (name: string, src: string) => {
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
