import { supabase } from '@/supabase/client'
import { blogQueryKey } from './queryKey'

export function useGetArticleListQueryObject() {
  return {
    queryKey: blogQueryKey.all(),
    queryFn: async () =>
      supabase
        .from('Article')
        .select('*')
        .throwOnError()
        .then((response) => response.data ?? []),
  }
}
