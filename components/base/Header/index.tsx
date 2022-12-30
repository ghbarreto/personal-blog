import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSpring, animated } from 'react-spring';

import HeaderInfo from '../Info';

export const Header: React.FC = () => {
    const [postTitle, setPostTitle] = useState('');
    const [displayInput, setDisplayInput] = useState(false);

    const animateSearch = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value);
    };

    const appearInput = () => {
        setDisplayInput(!displayInput);
    };

    return (
        <>
            <StyledHeader>
                <Image src="/logo.png" alt="logo" width={'100px'} height={'100px'} />
                <SearchInput>
                    {displayInput && (
                        <animated.div style={animateSearch}>
                            <InputField
                                unselectable="on"
                                label="Search Posts"
                                id="custom-css-outlined-input"
                                onChange={handleChange}
                                value={postTitle}
                            />
                        </animated.div>
                    )}

                    <AiOutlineSearch size={50} onClick={appearInput} className={displayInput ? 'svg-focused' : ''} />
                </SearchInput>
            </StyledHeader>
            <HeaderInfo />
        </>
    );
};

export default Header;

export const InputField = styled(TextField)({
    label: {
        color: '#00c2cb',
        borderColor: 'red',
        borderBottomColor: '#00c2cb',
        fontFamily: 'Fira Code Medium',
    },
    '& .MuiInputBase-input': {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Fira Code Medium',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        fontFamily: 'Fira Code Medium',
        color: '#00c2cb',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            color: 'red',
            borderColor: '#222222',
            borderBottomColor: '#00c2cb',
        },
        '&:hover fieldset': {
            borderColor: '#222222',
            borderBottomColor: '#00c2cb',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#222222',
            borderBottomColor: '#00c2cb',
        },
    },
});

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    padding-top: 20px;
    margin-right: 50px;
    align-items: center;
    input {
        max-height: 30px;
    }
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;

    svg:hover {
        cursor: pointer;
    }
    .svg-focused {
        color: #00c2cb;
    }
`;
