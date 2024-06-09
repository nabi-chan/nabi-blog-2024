export const blogQueryKey = {
  all: () => ['admin-blog'],
  single: (id: string) => ['admin-blog', { id }],
}
