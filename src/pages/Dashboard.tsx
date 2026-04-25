import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Welcome to your dashboard.</h1>
          <p className="text-muted-foreground">You are now signed in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
