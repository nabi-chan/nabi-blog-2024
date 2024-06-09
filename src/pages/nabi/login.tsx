import { KeyIcon } from '@channel.io/bezier-icons'
import { VStack, Button } from '@channel.io/bezier-react'
import { supabase } from '@/supabase/client'
import { BaseLayout } from '@/layouts/BaseLayout/BaseLayout'

export default function Page() {
  const handleClickLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/nabi`,
      },
    })
  }

  return (
    <BaseLayout
      noindex
      title="고양이집 : 로그인"
    >
      <VStack
        justify="center"
        align="center"
        height="100vh"
        padding={24}
      >
        <Button
          leftContent={KeyIcon}
          onClick={handleClickLogin}
          colorVariant="monochrome-dark"
          styleVariant="secondary"
          text="Github로 로그인하기"
        />
      </VStack>
    </BaseLayout>
  )
}
