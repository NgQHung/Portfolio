import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';

const profilePic =
    'https://images.unsplash.com/photo-1694439368032-230a1bad9617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80';
export default function Home() {
    return (
        <main className={`flex items-center text-black w-full min-h-screen`}>
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <img src={profilePic} alt="" className=" w-full h-auto" />
                    </div>
                    <div className="w-1/2">
                        <AnimatedText text="Turning Vision Into Reality With Code And Design" className="!text-6xl" />
                        <p>
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                            applications. Explore my latest projects and articles, showcasing my expertise in React.js
                            and web development.
                        </p>
                    </div>
                </div>
            </Layout>
        </main>
    );
}
