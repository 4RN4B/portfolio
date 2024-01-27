import HeaderSection from "./components/HeaderSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className=" container mx-auto px-8 py-5">
                <HeaderSection />
            </div>
        </main>
    );
}
