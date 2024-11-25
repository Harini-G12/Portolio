export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
                           align-center bg-emerald-200 max-w-5xl mx-auto"
    >
      <div className="flex-1">
        <img
          src="https://img.freepik.com/premium-photo/drawing-woman-with-cell-phone-icons-it_1221953-68767.jpg"
          alt="About"
          className="w-full h-full bg-cover"
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-center
                                items-center gap-5 px-6"
      >
        <div>
          <h2
            className="text-center text-emerald-500 
                                       text-5xl font-bold"
          >
            About Me :
          </h2>
        </div>
        <p>As I said, I am a friendly neighbourhood Web developer...</p>
        <p>
          I am a passionate self taught developer Highly motivated and creative Fresher Web Designer with a passion for designing user-friendly websites. Proven ability to collaborate with teams to implement responsive web design and optimize website performance, resulting in increased traffic, decreased bounce rates, and improved conversion rates.
        </p>
      </div>
    </section>
  );
}
