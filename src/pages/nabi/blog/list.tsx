import type { ReactNode } from 'react'
import { VStack, HStack, Button } from '@channel.io/bezier-react'
import { PencilIcon } from '@channel.io/bezier-icons'
import Link from 'next/link'
import { AdminLayout } from '@/layouts/AdminLayout/AdminLayout'
import { PageHeader } from '@/components/PageHeader'
import { ArticleList } from '@/features/admin/blog/containers/ArticleList'

export default function Page() {
  return (
    <VStack spacing={12}>
      <HStack
        spacing={16}
        align="center"
        justify="between"
      >
        <PageHeader
          title="블로그 글 목록"
          description="나비 블로그의 글 목록"
        />

        <Link href="/nabi/blog/create">
          <Button
            colorVariant="monochrome-dark"
            styleVariant="secondary"
            leftContent={PencilIcon}
            text="새로운 글 작성하기"
          />
        </Link>
      </HStack>

      <ArticleList />
    </VStack>
  )
}

Page.getLayout = (page: ReactNode) => (
  <AdminLayout title="블로그 글 목록">{page}</AdminLayout>
)
