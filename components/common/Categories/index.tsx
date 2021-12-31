import { useContext, useState } from 'react';
import { PostContext } from '../../../context/PostContext';
import _ from 'lodash';
import * as Global from '../../../styles';
import * as Local from './styles';
import * as utilities from '../../../styles/utilities';
import { AiFillCloseCircle } from 'react-icons/ai';

const Category: React.FC = () => {
  const [hover, setHover] = useState<Number | null>();
  const { retrieveCategory, selectCategory, selectedCategory } =
    useContext(PostContext);
  const uniqueValues = _.uniqWith(
    retrieveCategory(),
    (a: string, b: string) => a.toLowerCase() === b.toLowerCase()
  );

  return (
    <>
      {
        // container to display the category separately
        /* {selectedCategory && (
        <Local.CategorySelected onClick={() => selectCategory('')}>
          <Local.CategoryText>{selectedCategory}</Local.CategoryText>{' '}
          <Local.Icon>
            <AiFillCloseCircle size={20} />
          </Local.Icon>
        </Local.CategorySelected>
      )} */
      }
      <Local.Container>
        {_.map(uniqueValues, (categories: string, index) => (
          <Global.Button
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            id={`${index}`}
            padding={'15px'}
            paddingLeft={'15px'}
            bgColor={
              selectedCategory === categories || hover === index
                ? utilities.lightblue
                : 'transparent'
            }
            onClick={() => {
              if (selectedCategory !== categories) selectCategory(categories);
              if (selectedCategory === categories) selectCategory('');
            }}
            fontSize={'25px'}
            maxWidth={'200px'}
            margin={'0 auto'}
            marginTop={'20px'}
            hoverBg={index === hover ? utilities.lightblue : 'transparent'}
            color={
              index === hover || selectedCategory === categories
                ? utilities.bgColor
                : undefined
            }
          >
            <Global.Tags
              primary={
                index === hover || selectedCategory === categories
                  ? false
                  : true
              }
              fontSize={'25px'}
            >
              {'{'}
            </Global.Tags>
            {categories}
            <Global.Tags
              primary={
                index === hover || selectedCategory === categories
                  ? false
                  : true
              }
              fontSize={'25px'}
            >
              {'}'}
            </Global.Tags>{' '}
            {selectedCategory === categories && (
              <Local.Icon>
                <AiFillCloseCircle size={22} />
              </Local.Icon>
            )}
          </Global.Button>
        ))}
      </Local.Container>
    </>
  );
};

export default Category;
