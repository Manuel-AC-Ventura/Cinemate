import React, { Suspense } from 'react';
import { Head } from '@inertiajs/react';
import { Header } from "@/Components/Header";
import { NavHome } from '@/Components/Home/NavHome';
import { Loading } from '@/Components/Loading';
import { Trending } from '@/Components/Home/Trending';

export default function Home({ movies }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 bg-[#1A2232]">
      <Head title='Home' />
      <Header />
      <NavHome />

      <Suspense fallback={<Loading />}>
        <Trending movies={movies} />
      </Suspense>
    </div>
  );
}