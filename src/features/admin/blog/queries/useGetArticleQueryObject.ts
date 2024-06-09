import { supabase } from '@/supabase/client'
import { blogQueryKey } from './queryKey'

export function useGetArticleQueryObject(articleId: string) {
  return {
    queryKey: blogQueryKey.single(articleId),
    queryFn: async () =>
      supabase
        .from('Article')
        .select('*')
        .eq('id', articleId)
        .single()
        .throwOnError(),
  }
}
