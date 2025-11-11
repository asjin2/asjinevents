import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { format } from 'date-fns';

export const revalidate = 0;

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  date: string;
  read_time: string;
  category: string;
  slug: string;
  published: boolean;
  created_at: string;
}

async function getPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false });
  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data;
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Asjin Events Blog</h1>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Home
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="font-medium text-indigo-600">{post.category}</span>
                <span className="mx-2">•</span>
                <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>{post.read_time}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}/`} className="hover:text-indigo-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm font-semibold text-gray-800">
                By {post.author}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}