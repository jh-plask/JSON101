import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="/Users/junho/json101/public/DALL·E 2024-05-25 17.59.54 - A simple, structured, and playful black and white circular logo for a house project. The logo features two boys as roommates, clinking beer mugs toget.webp"
          src="/image 1.png"
          alt="Next.js Logo"
          width={640}
          height={420}
          priority
        />
      </div>
      <span>신나는 주노 동히 하우스</span>

      <div style={{ width: "80vw" }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aagRnkKNIGd2PosM_cIxKrpN4BGdPFjwqzTRKkjaTv4W_UByK28NRzinb4wdGTcK99WLgkxCC?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
        ></iframe>
      </div>
    </main>
  );
}
