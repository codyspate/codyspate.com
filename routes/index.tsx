export default function Home() {
  return (
    <div class="pb-8 mx-auto">
      <div class="max-w-screen-md mx-auto">
        <div className="flex gap-3 font-sans my-4 underline">
          <a href="https://www.linkedin.com/in/cody-spate/">LinkedIn</a>
          <a href="https://github.com/codyspate">Github</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="mb-6 flex">
          <div className="grow">
            <h1 className="text-5xl mb-3  font-semibold">
              Cody Spate
            </h1>
            <h2 className="text-3xl font-medium">
              Software Engineer
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium text-pretty">
          <p>
            Hi! I&apos;m a software engineer with a passion for crafting
            innovative solutions, especially in the financial technology space.
            With over eight years of experience, I&apos;ve honed my skills in
            full-stack development, cloud infrastructure, and architectural
            design, consistently delivering robust and scalable systems that
            meet real-world needs.
          </p>

          <p>
            I believe in the power of collaboration and thrive in team
            environments where knowledge-sharing and mutual support are valued.
            I&apos;m always eager to mentor and learn from my colleagues,
            fostering an environment of continuous growth and improvement.
          </p>

          <p>
            I&apos;m a naturally curious problem-solver who enjoys tackling
            complex challenges and finding creative solutions. I&apos;m
            confident that my adaptability, technical expertise, and passion for
            technology can make a significant contribution to your team.
          </p>

          <p>
            I&apos;m excited to explore how my skills and experience can align
            with your company&apos;s goals. Let&apos;s connect and discuss the
            possibilities!
          </p>
        </div>
      </div>
    </div>
  );
}
