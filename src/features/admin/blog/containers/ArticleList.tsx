import { PageIcon } from '@channel.io/bezier-icons'
import { VStack, ListItem } from '@channel.io/bezier-react'
import Link from 'next/link'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PostListError } from '@/features/errors/ListError'
import { useGetArticleListQueryObject } from '@/features/admin/blog/queries/useGetArticleListQueryObject'

export function ArticleList() {
  const { data: posts } = useSuspenseQuery(useGetArticleListQueryObject())

  const isEmptyPosts = posts.length === 0

  return (
    <VStack as="section">
      {posts?.map((post) => (
        <Link
          key={post.id}
          href={`/nabi/blog/${post.id}`}
        >
          <ListItem
            leftContent={PageIcon}
            content={post.title || ''}
            description={`작성일: ${post.created_at} / 상태: ${post.stage} / 카테고리: ${post.category}`}
          />
        </Link>
      ))}

      {isEmptyPosts && (
        <PostListError>글이 없습니다. 새로운 글을 작성해보세요.</PostListError>
      )}
    </VStack>
  )
}
