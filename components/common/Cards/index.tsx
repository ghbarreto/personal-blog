import React, { useContext } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';

import {
  helperOthers,
  helperBackground,
  helperHover,
} from '../../../styles/utilities';
import * as Local from './styles';
import DateFormat from '../DateFormat';
import { PostContext } from '../../../context/PostContext';
import ReadCount from '../ReadCount';

interface Post {
  id: number;
  title: string;
  card_description: string;
  category: string[];
  date: string;
  word_count: number;
}

const Cards: React.FC = () => {
  const { posts, selectCategory } = useContext(PostContext);
  const router = useRouter()

  return (
    <Local.Cards>
      {_.map(posts, (post: Post, index: number) => {
        if (
          !post.title ||
          !post.date ||
          !post.word_count ||
          !post.card_description
        )
          return;
        if (index > 2) index -= index;
        return (
          <Local.CardsColumn
            key={post.id}
            bgColor={helperBackground(Number(index))}
            hoverColor={helperHover(Number(index))}
            onClick={() => router.push(`/?posts=${post.id}`)}
          >
            <Local.CardsTitle>
              <Local.Tags color={helperOthers(Number(index))}>{'>'}</Local.Tags>{' '}
              {post.title}
            </Local.CardsTitle>
            <Local.Paragraph>{post.card_description}</Local.Paragraph>
            <Local.Categories>
              {post.category &&
                post?.category.map((e: string, i: number) => {
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
            <Local.CardsFooter>
              <ReadCount wc={post.word_count} />
              <span></span>
              <DateFormat date={post.date} />
            </Local.CardsFooter>
          </Local.CardsColumn>
        );
      })}
    </Local.Cards>
  );
};

export default Cards;
