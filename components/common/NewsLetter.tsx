'use client'

import Link from 'next/link'

export default function Newsletter() {
  return (
    <section className="w-full bg-gray-50 py-16 text-center text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-4 text-3xl font-bold">Newsletter 📫</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg">
        Biar gak ketinggalan update..
        <br />
        Subscribe Newsletter agar kamu bisa dapat info dan tips belajar coding langsung dikirim ke
        emailmu
      </p>
      <Link
        href="https://kartonobinsaleh.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-500 hover:bg-primary-600 inline-block rounded-lg px-8 py-3 font-semibold text-white transition-colors"
      >
        Subscribe
      </Link>
    </section>
  )
}
