'use client';
export default function SmileQuizTeaser(){
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="rounded-2xl p-10 bg-gradient-to-r from-[var(--magenta)]/10 to-[var(--turquoise)]/10 border border-white/30 backdrop-blur-md">
          <h2 className="text-2xl md:text-3xl font-semibold">AI Smile Quiz</h2>
          <p className="mt-2 text-[var(--text,#1A1C1F)]/80 max-w-2xl">Answer a few quick questions and get a personalised smile plan.</p>
          <div className="mt-6">
            <a href="/ai-smile-quiz" className="inline-block px-5 py-3 rounded-full text-white font-medium shadow-lg bg-gradient-to-r from-[var(--magenta)] to-[var(--turquoise)] hover:shadow-[0_0_24px_rgba(64,196,180,.45)]">Start the AI Smile Quiz</a>
          </div>
        </div>
      </div>
    </section>
  );
}
