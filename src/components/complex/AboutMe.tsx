import Torus from "../atoms/Torus";
import Container3D from "../particles/Container3D";

export default function AboutMe() {
  return (
    <div
      id="whoami"
      className="flex h-fit min-h-[36.25rem] w-screen snap-center items-center justify-center lg:h-screen"
    >
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="hidden h-full w-full lg:flex">
          <Container3D>
            <Torus position={[1, 0, -0.6]} />
          </Container3D>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center lg:p-6">
        <div className="w-11/12 bg-white px-6 pb-7 lg:h-full lg:w-full">
          <h1 className="my-5 w-full text-center font-geistMono text-[3rem] tracking-tighter">
            Who am I?
          </h1>
          <span className="w-full text-left font-geistMono text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
            alias tenetur assumenda quae mollitia est, ratione illo sint?
            Aspernatur, ullam? Ducimus fugit nulla suscipit voluptas iusto
            ratione repellat est. Nobis rerum ab ea magnam amet, quos incidunt.
            Esse obcaecati perspiciatis, excepturi repellendus sed aut modi odio
            iste, voluptas quod quaerat fugit illo, quidem autem temporibus
            incidunt quos eaque aperiam?
          </span>
        </div>
      </div>
    </div>
  );
}
