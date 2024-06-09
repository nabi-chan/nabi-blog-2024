import { renderMarkdown } from '@/features/markdown/viewer/utils/renderMarkdown'

export function useRenderMarkdownToHTMLQueryObject(markdown: string) {
  return {
    queryKey: ['renderMarkdownToHTML', markdown],
    queryFn: () => renderMarkdown(markdown),
  }
}
