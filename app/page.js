import Image from "next/image";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <>
      <div className="layout-primary-color">
        <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1/2">
          <div className="lg:flex md:flex items-center justify-center gap-12">
            <div className="">
              <h1 className="text-3xl font-bold text-left">
                Stay in Sync. Flow Your Work.
              </h1>
              <p className="text-left mt-4">
                FlowSync empowers teams to seamlessly track their projects,
                tasks, and progress across every department. From planning to
                completion, stay aligned with real-time updates, phase
                indicators, and smart collaboration tools—so nothing falls
                through the cracks.
              </p>
            </div>
            <div>
              <Image
                src={"/logo-transparent.png"}
                alt={"logo"}
                width={800}
                height={800}
              ></Image>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto my-12">
            <LoginPage></LoginPage>
          </div>
        </div>
      </div>
    </>
  );
}
