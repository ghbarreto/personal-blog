import { useContext, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { PostContext } from '../../../context/PostContext';
import * as Global from '../../../styles';
import * as Local from './styles';
import * as utilities from '../../../styles/utilities';
import { AiFillCloseCircle } from 'react-icons/ai';

const Button = styled(Global.Button)`
    padding: 15px;
    padding-left: 15px;

    font-size: 25px;
    max-width: 200px;
    margin: 0 auto;
    margin-top: 20px;
`;

const Category: React.FC = () => {
    const [hover, setHover] = useState<Number | null>();
    const { retrieveCategory, selectCategory, selectedCategory } = useContext(PostContext);
    const uniqueValues = _.uniqWith(retrieveCategory(), (a: string, b: string) => a.toLowerCase() === b.toLowerCase());

    return (
        <Local.Container>
            {_.map(uniqueValues, (categories: string, index) => (
                <Button
                    key={index}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                    id={`${index}`}
                    bgColor={selectedCategory === categories || hover === index ? utilities.lightblue : 'transparent'}
                    onClick={() => {
                        if (selectedCategory !== categories) selectCategory(categories);
                        if (selectedCategory === categories) selectCategory('');
                    }}
                    hoverBg={index === hover ? utilities.lightblue : 'transparent'}
                    color={index === hover || selectedCategory === categories ? utilities.bgColor : undefined}
                >
                    <Global.Tags
                        primary={index === hover || selectedCategory === categories ? false : true}
                        fontSize={'25px'}
                    >
                        {'{'}
                    </Global.Tags>
                    {categories}
                    <Global.Tags
                        primary={index === hover || selectedCategory === categories ? false : true}
                        fontSize={'25px'}
                    >
                        {'}'}
                    </Global.Tags>{' '}
                    {selectedCategory === categories && (
                        <Local.Icon>
                            <AiFillCloseCircle size={22} />
                        </Local.Icon>
                    )}
                </Button>
            ))}
        </Local.Container>
    );
};

export default Category;
