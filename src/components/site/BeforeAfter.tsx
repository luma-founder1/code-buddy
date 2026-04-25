import { ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="bg-background py-20 md:py-32 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 border border-primary/20">
            Real transformation
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            See what Refract actually does.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Same project. Same logic. Cleaner code.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <MetricCard 
            label="any types removed" 
            before="34" 
            after="0" 
          />
          <MetricCard 
            label="components split" 
            before="1 giant" 
            after="8 modules" 
          />
          <MetricCard 
            label="unused state removed" 
            before="12" 
            after="0" 
          />
          <MetricCard 
            label="lines documented" 
            before="0" 
            after="214" 
          />
        </div>

        {/* Code Blocks */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[#ef4444] font-medium text-sm uppercase tracking-wider">Before</span>
            </div>
            <div className="relative rounded-xl border border-border bg-[#09090b] p-6 overflow-hidden font-mono text-sm leading-relaxed text-zinc-400">
              <pre className="overflow-x-auto">
                <code>{`function UserDashboard(props: any) {
  const [data1, setData1] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error1, setError1] = useState(null);
  const [val2, setVal2] = useState(""); // unused
  const [temp, setTemp] = useState([]); // unused

  useEffect(() => {
    fetch(\`/api/user/\${props.id}\`)
      .then(r => r.json())
      .then(d => {
        setData1(d);
        setLoading(false);
      });
  }, [props.id]);

  const handleClick2 = () => {
    console.log("clicked");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 m-2 border rounded shadow-sm bg-white flex flex-col gap-2 w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold text-gray-800 mb-4">{data1?.name}</h1>
      <div className="flex items-center gap-4 p-2 border-b">
        <img src={data1?.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-medium">{data1?.email}</p>
          <p className="text-xs text-gray-500">{data1?.role}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {data1?.tags?.map((t: any) => (
          <span key={t} className="px-2 py-1 bg-gray-100 rounded text-xs">
            {t}
          </span>
        ))}
      </div>
      <button 
        onClick={handleClick2}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        View Profile
      </button>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="text-[#4ade80] font-medium text-sm uppercase tracking-wider">After</span>
            </div>
            <div className="relative rounded-xl border border-border bg-[#09090b] p-6 overflow-hidden font-mono text-sm leading-relaxed text-zinc-300">
              <pre className="overflow-x-auto">
                <code>{`interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest';
  tags: string[];
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
        email={profile.email}
        role={profile.role}
      />
      <TagList tags={profile.tags} />
      <ActionButton onClick={() => navigateToProfile(id)}>
        View Profile
      </ActionButton>
    </CardContainer>
  );
}

// Extracted sub-components maintain consistent design tokens
const ProfileHeader = ({ name, avatar, email, role }: HeaderProps) => (
  <div className="flex items-center gap-4 p-2 border-b border-border/50">
    <Avatar src={avatar} alt={name} size="sm" />
    <div className="space-y-0.5">
      <Text variant="body-sm" weight="medium">{email}</Text>
      <Text variant="caption" color="muted">{role}</Text>
    </div>
  </div>
);`}</code>
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
  <div className="bg-card/40 border border-border/50 p-4 rounded-xl backdrop-blur-sm">
    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mb-2">{label}</p>
    <div className="flex items-center gap-3">
      <span className="text-[#ef4444]/60 font-mono text-lg">{before}</span>
      <ArrowRight className="w-3 h-3 text-zinc-600" />
      <span className="text-[#4ade80] font-mono text-lg font-bold">{after}</span>
    </div>
  </div>
);

export default BeforeAfter;
