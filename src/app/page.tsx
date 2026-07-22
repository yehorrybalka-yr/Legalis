import type { ReactNode } from "react";
import { FloatingContacts, MessengerButtons } from "@/components/FloatingContacts";

const theses = [
  {
    title: "Разберём ваш случай за 15 минут",
    text: "Оценим основания, сроки и риски ещё до подачи документов — без лишних обещаний.",
  },
  {
    title: "Соберём полный пакет документов",
    text: "Подскажем, что нужно именно вам: работа, учёба, воссоединение семьи или бизнес.",
  },
  {
    title: "Сопроводим до получения карты",
    text: "От записи в ужонд до получения решения — на связи на каждом шаге.",
  },
  {
    title: "Работаем на русском и польском",
    text: "Переводим, объясняем и готовим вас к визиту так, чтобы всё прошло спокойно.",
  },
];

const reviewPlaceholders = [1, 2, 3];

function CtaBlock({
  title = "Получите бесплатную консультацию",
  description = "Напишите нам в Telegram или WhatsApp — ответим в ближайшее время и подскажем, с чего начать именно в вашей ситуации.",
  eyebrow = "Бесплатная консультация",
}: {
  title?: ReactNode;
  description?: string | null;
  eyebrow?: string | null;
}) {
  return (
    <section className="border-y border-line bg-burgundy-soft/60 px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-serif text-3xl font-semibold text-burgundy sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-7">
          <MessengerButtons />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main className="pb-24">
        {/* 1. Header */}
        <header className="relative overflow-hidden px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="font-serif text-2xl font-semibold tracking-[0.08em] text-burgundy uppercase sm:text-3xl">
              Legalis
            </p>
            <div className="mt-3 h-px w-16 bg-gold" aria-hidden />
            <h1 className="mt-5 max-w-3xl font-serif text-3xl leading-snug font-semibold text-ink sm:text-4xl lg:text-[2.75rem]">
              Получение карты побыту в Польше — просто и под контролем
            </h1>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted sm:text-lg">
              Помогаем иностранцам пройти весь путь: от первой консультации до карты
              в руках. Без хаоса в документах и сюрпризов в ужонде.
            </p>
          </div>
        </header>

        {/* 2. Video placeholder */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div
              className="video-mock relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-surface-alt"
              role="img"
              aria-label="Макет видео"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(80,10,28,0.06) 25%, transparent 25%), linear-gradient(225deg, rgba(80,10,28,0.06) 25%, transparent 25%), linear-gradient(45deg, rgba(80,10,28,0.06) 25%, transparent 25%), linear-gradient(315deg, rgba(80,10,28,0.06) 25%, transparent 25%)",
                  backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
                  backgroundSize: "20px 20px",
                  backgroundRepeat: "repeat",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white text-burgundy shadow-sm transition-transform duration-150 hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
                <p className="font-serif text-xl font-semibold text-burgundy sm:text-2xl">
                  Видео скоро появится
                </p>
                <p className="text-sm text-muted">Горизонтальный макет · 16:9</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Theses */}
        <section className="px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center sm:mb-10">
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                Основные моменты
              </p>
              <h2 className="font-serif text-3xl font-semibold text-burgundy sm:text-4xl">
                Почему с нами проще
              </h2>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9">
              {theses.map((item, index) => (
                <li
                  key={item.title}
                  className="thesis-item border-l-2 border-gold/60 pl-4 transition-[border-color] duration-150 hover:border-gold sm:pl-5"
                >
                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="font-serif text-lg font-semibold text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. CTA */}
        <CtaBlock />

        {/* 5. Reviews placeholders */}
        <section className="px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center sm:mb-10">
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                Отзывы клиентов
              </p>
              <h2 className="font-serif text-3xl font-semibold text-burgundy sm:text-4xl">
                Что говорят о нашей работе
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {reviewPlaceholders.map((id) => (
                <div
                  key={id}
                  className="review-mock flex aspect-[9/16] w-full items-center justify-center overflow-hidden border border-line bg-surface-alt sm:aspect-[3/4]"
                  role="img"
                  aria-label="Макет скриншота отзыва"
                >
                  <span className="text-sm text-muted/70">Скриншот отзыва</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA again */}
        <CtaBlock
          title={
            <>
              Остались вопросы?
              <br />
              Свяжись с нами
            </>
          }
          description={null}
        />

        <footer className="px-4 py-10 text-center sm:px-6">
          <p className="font-serif text-lg font-semibold tracking-wide text-burgundy">
            Legalis Company Polska
          </p>
          <p className="mt-2 text-sm text-muted">
            Помощь в легализации пребывания в Польше
          </p>
        </footer>
      </main>

      <FloatingContacts />
    </>
  );
}
