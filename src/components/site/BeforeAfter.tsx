import { ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="bg-background py-20 md:py-28 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 border border-primary/20">
            Real transformation
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 tracking-tight">
            See what Refract actually does.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Same project. Same logic. Cleaner code.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <MetricCard label="any types removed" before="34" after="0" />
          <MetricCard label="components split" before="1 giant" after="8 modules" />
          <MetricCard label="unused state removed" before="12" after="0" />
          <MetricCard label="lines documented" before="0" after="214" />
        </div>

        {/* Code Blocks */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[#ef4444] font-medium text-xs uppercase tracking-wider">Before</span>
            </div>
            <div className="relative rounded-lg border border-border bg-[#09090b] p-3 overflow-hidden font-mono text-[10px] leading-[1.5] text-zinc-400">
              <pre className="overflow-x-auto">
                <code>{`function UserDashboard(props: any) {
  const [data1, setData1] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error1, setError1] = useState(null);
  const [val2, setVal2] = useState(""); // unused
  
  useEffect(() => {
    fetch(\`/api/user/\${props.id}\`)
      .then(r => r.json())
      .then(d => {
        setData1(d);
        setLoading(false);
      });
  }, [props.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white flex flex-col gap-2">
      <h1>{data1?.name}</h1>
      <img src={data1?.avatar} />
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="text-[#4ade80] font-medium text-xs uppercase tracking-wider">After</span>
            </div>
            <div className="relative rounded-lg border border-border bg-[#09090b] p-3 overflow-hidden font-mono text-[10px] leading-[1.5] text-zinc-300">
              <pre className="overflow-x-auto">
                <code>{`interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

/**
 * Handles fetching and display logic for user profile data.
 * Refracted from bloated UserDashboard component.
 */
export function UserProfileCard({ id }: { id: string }) {
  const { profile, isLoading, error } = useUserProfile(id);

  if (isLoading) return <ProfileSkeleton />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <CardContainer>
      <ProfileHeader 
        name={profile.name} 
        avatar={profile.avatar} 
      />
    </CardContainer>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  label: string;
  before: string;
  after: string;
}

const MetricCard = ({ label, before, after }: MetricCardProps) => (
  <div className="bg-card/40 border border-border/50 p-3 rounded-lg backdrop-blur-sm">
    <p className="text-zinc-500 text-[9px] uppercase tracking-widest font-semibold mb-1.5">{label}</p>
    <div className="flex items-center gap-2">
      <span className="text-[#ef4444]/60 font-mono text-sm">{before}</span>
      <ArrowRight className="w-2.5 h-2.5 text-zinc-600" />
      <span className="text-[#4ade80] font-mono text-sm font-bold">{after}</span>
    </div>
  </div>
);

export default BeforeAfter;
