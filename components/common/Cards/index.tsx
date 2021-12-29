import React, { useContext } from 'react';
import _ from 'lodash';

import { lightblue, highlight, yellow } from '../../../styles/utilities';
import * as Local from './styles';
import DateFormat from '../DateFormat'
import { PostContext } from '../../../context/PostContext';
import ReadCount from '../ReadCount'

interface Post {
  title: string;
  card_description: string;
  category: string[];
  date: string;
  word_count: number;
}

const Cards: React.FC = () => {
  const { posts, selectCategory } = useContext(PostContext);

  const helperBackground = (i: number) => {
    switch (i) {
      case 0:
        return highlight;
      case 1:
        return yellow;
      case 2:
        return lightblue;
    }
  };

  const helperOthers = (i: number) => {
    switch (i) {
      case 0:
        return 'white';
      case 1:
        return highlight;
      case 2:
        return yellow;
    }
  };

  return (
    <Local.Cards>
      {_.map(posts, (post: Post, index: number) => {
        if (!post) return;
        if (index > 2) index -= index;
        return (
          <Local.CardsColumn
            key={index}
            bgColor={helperBackground(Number(index))}
          >
            <Local.CardsTitle>
              <Local.Tags color={helperOthers(Number(index))}>{'>'}</Local.Tags>{' '}
              {post.title}
            </Local.CardsTitle>
            <Local.Paragraph>{post.card_description}</Local.Paragraph>
            <Local.Categories>
              {post.category.map((e, i) => {
                return (
                  <Local.CategoriesButton
                    key={i}
                    onClick={() => selectCategory(e)}
                    hoverColor={helperOthers(Number(index))}
                    bgColor={helperOthers(Number(index))}
                  >
                    {e}
                  </Local.CategoriesButton>
                );
              })}
            </Local.Categories>
            <ReadCount wc={post.word_count} />
            <DateFormat date={ post.date }/>
          </Local.CardsColumn>          
        );
      })}
    </Local.Cards>
  );
};

export default Cards;
