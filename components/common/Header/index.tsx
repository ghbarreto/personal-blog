import React, { useState } from 'react';
import * as Styles from './styles';
import Image from 'next/image';
import { InputField } from './utils';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSpring, animated } from 'react-spring';
import HeaderInfo from '../Info';

const Header: React.FC = () => {
  const [postTitle, setPostTitle] = useState('');
  const [displayInput, setDisplayInput] = useState(false);

  const animation = useSpring({
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
      <Styles.Header>
        <Image src="/logo.png" alt="logo" width={'150px'} height={'150px'} />
        <Styles.SearchInput>
          {displayInput && (
            <animated.div style={animation}>
              <InputField
                unselectable="on"
                label="Search Posts"
                id="custom-css-outlined-input"
                onChange={handleChange}
                // value={postTitle}
              />
            </animated.div>
          )}

          <AiOutlineSearch
            size={50}
            onClick={appearInput}
            className={displayInput ? 'svg-focused' : ''}
          />
        </Styles.SearchInput>
      </Styles.Header>
      <HeaderInfo />
    </>
  );
};

export default Header;
