import { supabase } from '@/lib/supabaseClient';
import { Post } from '../page';
import { format } from 'date-fns';
import { Clock, User, Calendar } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

async function getPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) {
    console.error('Supabase error fetching post:', error.message);
    return null;
  }
  return data;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await getPost(params.slug);
  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post Not Found in Database</h1>
        <p className="text-gray-600">A post with the slug "{params.slug}" does not exist.</p>
        <Link href="/blog/" className="text-indigo-600 hover:underline mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/blog/" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-500 space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.read_time}</span>
            </div>
          </div>
          {post.image_url && (
            <img 
              src={post.image_url} 
              alt={post.title} 
              className="w-full h-auto rounded-xl object-cover mb-8" 
            />
          )}
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  );
}