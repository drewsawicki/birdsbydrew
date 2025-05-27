const resources = [
  {
    name: "American Birding Association - Code of Birding Ethics",
    url: "https://www.aba.org/aba-code-of-birding-ethics/",
  },
  {
    name: "Cornell Lab of Ornithology - Bird Conservation",
    url: "https://www.birds.cornell.edu/home/conservation/",
  },
  {
    name: "Audubon Society - Bird-Friendly Communities",
    url: "https://www.audubon.org/conservation/bird-friendly-communities",
  },
  {
    name: "eBird Best Practices",
    url: "https://support.ebird.org/en/support/solutions/articles/48000795623-ebird-rules-and-best-practices",
  },
  {
    name: "Leave No Trace - Seven Principles",
    url: "https://lnt.org/why/7-principles/",
  },
  {
    name: "National Wildlife Federation - Backyard Habitats",
    url: "https://www.nwf.org/garden-for-wildlife",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-12 font-mono">
      {/* Main body */}
      <section className="space-y-10 max-w-3xl mx-auto">
        {/* Bio */}
        <div className="dslr-box">
            <div className="dslr-box-header">
                <div className="dslr-box-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="dslr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16M5 10l4.553 2.276a1 1 0 010 1.448L5 16" />
                </svg>
                <span>ABOUT ME</span>
                </div>
                <span className="dslr-mode-label">DSLR MODE</span>
            </div>

            <div className="dslr-box-body text-[12px] sm:text-[14px]">
                {/* <!-- Your content here --> */}
                I am an amateur photographer with a deep interest and respect for birds. I am still learning every day how to best capture the
                beauty of nature and wildlife, while deepening my knowledge of the diverse bird species here in Michigan. 
            </div>
        </div>
        <div className="dslr-box">
            <div className="dslr-box-header">
                <div className="dslr-box-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="dslr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16M5 10l4.553 2.276a1 1 0 010 1.448L5 16" />
                </svg>
                <span>MY BAG</span>
                </div>
                <span className="dslr-mode-label">DSLR MODE</span>
            </div>

            <div className="dslr-box-body text-[12px] sm:text-[14px]">
                {/* <!-- Your content here --> */}
                I use a Nikon D7500 DSLR, along with a Nikkor AF-S 200-500mm f/5.6 VR lens, and a Nikkor AF-S 35mm f/1.8 lens.
                For help with identification I use
                    <a href="https://merlin.allaboutbirds.org/" target="_blank" rel="noopener noreferrer" className="text-mutedGreen font-bold hover:underline"> Merlin </a> 
                and for recording my birding checklists I use
                    <a href="https://ebird.org/explore" target="_blank" rel="noopener noreferrer" className="text-mutedGreen font-bold hover:underline"> eBird</a> 
                .
            </div>
        </div>
        <div className="dslr-box">
            <div className="dslr-box-header">
                <div className="dslr-box-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="dslr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16M5 10l4.553 2.276a1 1 0 010 1.448L5 16" />
                </svg>
                <span>RESOURCES</span>
                </div>
                <span className="dslr-mode-label">DSLR MODE</span>
            </div>

            <div className="dslr-box-body text-[12px] sm:text-[14px]">
                Being responsible in the field and promoting conservation is paramount to the long-term well-being of bird 
                populations and the ecosystems they depend on. Below are some educational resources and organizations for
                further reading.
                <ul className="list-disc list-inside space-y-2 mt-3">
                    {resources.map((resource, index) => (
                    <li key={index}>
                        <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mutedGreen font-bold hover:underline"
                        >
                        {resource.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
      </div>
  );
}