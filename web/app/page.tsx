import { ExperienceMotion } from "@/components/ExperienceMotion";
import { profile } from "@/lib/profile";

export default function HomePage() {
  return (
    <>
      <ExperienceMotion />
      <a className="skip" href="#about">
        Skip to content
      </a>
      <header className="nav">
        <a className="nav-mark" href="#top">
          <img src={profile.education.mark} alt="" width={22} height={25} />
          {profile.name}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <picture>
            <source media="(max-width: 800px)" srcSet="/assets/hero-mobile.jpg" />
            <img
              src="/assets/hero.jpg"
              alt={`${profile.name} standing beside a limestone wall`}
              width={1024}
              height={438}
            />
          </picture>
          <div className="hero-shade" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            {profile.location} · UT Austin
          </p>
          <h1>
            {profile.firstName} <em>{profile.lastName}</em>
          </h1>
          <p className="lede">{profile.title}</p>
          <div className="hero-actions">
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href="#experience">
              Experience
            </a>
          </div>
        </div>
      </section>

      <main className="main">
        <section className="section about" id="about">
          <p className="kicker">About</p>
          <h2>Clear work. Steady judgment.</h2>
          <p>{profile.about}</p>
        </section>

        <section className="section" id="experience">
          <p className="kicker">Experience</p>
          <h2>Where the work has been.</h2>
          <div className="timeline">
            {profile.experience.map((job) => {
              const current = "current" in job && job.current;
              return (
                <article
                  className={current ? "job is-current" : "job"}
                  id={current ? "current-role" : undefined}
                  key={`${job.org}-${job.dates}`}
                >
                  <time>{job.dates}</time>
                  <div className="logo-tile">
                    <img src={job.logo} alt={job.logoAlt} />
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p>
                      {job.org} · {job.place}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="education">
          <p className="kicker">Education</p>
          <h2>Texas.</h2>
          <div className="education-card">
            <img className="ut-mark" src={profile.education.mark} alt="University of Texas interlocking UT" />
            <div>
              <strong>{profile.education.school}</strong>
              <p>
                {profile.education.focus} · {profile.education.dates}
              </p>
              <img
                className="wordmark"
                src={profile.education.wordmark}
                alt="The University of Texas at Austin"
              />
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <p className="kicker">Contact</p>
          <h2>Say hello.</h2>
          <p className="contact-row">
            Reach Heidi on{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="footer">
        <img src={profile.education.mark} alt="" width={18} height={21} />
        heidiherzog.com
      </footer>
    </>
  );
}
