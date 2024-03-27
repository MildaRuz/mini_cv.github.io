import '../App.css';

import { interests, languages, skills } from '../helper';

export default function AboutMePage() {
  return (
    <div className="container-w mx-auto flex flex-row">
      <div className="first-section py-11">
        <div>
          <img src="https://picsum.photos/id/40/800/600" className="mx-auto" />
          <h1 className="text-2xl mb-1 mt-3 uppercase text-center tracking-wide">Milda Ruzgienė</h1>
          <div className="mb-8 text-center">
            <em>Junior FrontEnd Developer</em>
          </div>
          <div className="mx-28">
            <div>
              <h2 className="text-xl uppercase underline underline-offset-4">contact</h2>
              <div>email</div>

              <a
                href="https://www.linkedin.com/in/milda-ruzgienė"
                className="flex flex-row gap-2 items-center hover:text-[#0077b5] ease-out"
              >
                LinkedIn{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-linkedin "
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
            <h2 className="text-xl uppercase underline underline-offset-4">skills</h2>
            {skills.map((skill) => (
              <div className="" key={skills.index}>
                <div>{skill}</div>
              </div>
            ))}
            <h2 className="text-xl uppercase underline underline-offset-4">languages</h2>
            {languages.map((lang) => (
              <div className="" key={languages.index}>
                <div>{lang}</div>
              </div>
            ))}
            <h2 className="text-xl uppercase">interests</h2>
            {interests.map((hobbies) => (
              <div className="" key={interests.index}>
                <div>{hobbies}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="second-section py-16 px-28">
        <h2 className="text-xl uppercase underline underline-offset-4">working experience</h2>
        <div className="text-lg uppercase">Job title</div>
        <div>
          <em>Company | 2011-2021</em>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <h2 className="text-xl uppercase underline underline-offset-4">education</h2>
        <div className="text-lg uppercase">degree name</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
      </div>
    </div>
  );
}
