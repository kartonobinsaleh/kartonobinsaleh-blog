'use client'

import Link from 'next/link'

export default function Newsletter() {
  return (
    <section className="dark:bg-dark-surface dark:border-dark-border mx-auto mt-4 mb-20 max-w-7xl overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 px-6 py-12 text-center text-gray-900 sm:px-12 dark:text-gray-100">
      <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Newsletter 📫
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Biar gak ketinggalan update..
        <br />
        Subscribe Newsletter agar kamu bisa dapat info dan tips belajar coding langsung dikirim ke
        emailmu
      </p>
      <Link
        href="https://kartonobinsaleh.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/25 inline-flex h-12 items-center justify-center rounded-xl px-8 py-3 font-semibold text-white shadow-lg transition-all active:scale-95"
      >
        Subscribe
      </Link>
    </section>
  )
}
