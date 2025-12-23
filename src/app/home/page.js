'use client';

import {
  Button,
  Grid,
  Column,
  Tile,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  CodeSnippet,
} from '@carbon/react';
import {
  Security,
  Globe,
  Renew,
  Api,
  Cloud,
  Finance,
  GameConsole,
  Idea,
} from '@carbon/icons-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';

const codeExample = `import openai

client = openai.OpenAI(
    base_url="https://api.sixdayswork.ca/v1",
    api_key="sk-qc-..."
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3-70b",
    messages=[{"role": "user", "content": "Hello!"}]
)`;

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      {/* Hero Section */}
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading">Six Day&apos;s Work</h1>
        <p className="landing-page__tagline">
          The Sovereign Interface for Canadian AI
        </p>
        <p className="landing-page__subheading">
          Deploy production-ready open-source models on Quebec&apos;s greenest,
          fastest GPU infrastructure. Law 25 compliant by default.
        </p>
        <div className="landing-page__cta-group">
          <Button size="lg" href="#contact">
            Get API Key
          </Button>
          <Button size="lg" kind="secondary" href="#features">
            Learn More
          </Button>
        </div>
      </Column>

      {/* Built for Sovereign Grade Economy */}
      <Column lg={16} md={8} sm={4} className="landing-page__r2" id="features">
        <Grid className="landing-page__section">
          <Column lg={16} md={8} sm={4}>
            <h2 className="landing-page__section-heading">
              Built for the &ldquo;Sovereign Grade&rdquo; Economy
            </h2>
            <p className="landing-page__section-intro">
              US-based clouds introduce legal risk and latency your application
              can&apos;t afford. We run strictly on Canadian soil, leveraging
              Quebec&apos;s hydroelectric advantage to deliver enterprise
              inference at startup prices.
            </p>
          </Column>
          <Column lg={5} md={4} sm={4} className="feature-tile">
            <Tile className="feature-tile__content">
              <Security size={48} />
              <h3>Law 25 & PIPEDA Compliant</h3>
              <p>
                Your data never crosses the border. We eliminate the need for
                complex &ldquo;cross-border&rdquo; Privacy Impact Assessments
                (PIAs) required by Quebec Law 25.
              </p>
            </Tile>
          </Column>
          <Column lg={5} md={4} sm={4} className="feature-tile">
            <Tile className="feature-tile__content">
              <Globe size={48} />
              <h3>Sub-Millisecond Latency</h3>
              <p>
                Hosted in Montreal/Beauharnois. Direct fiber interconnects to
                local ISPs ensure real-time performance for Gaming and VFX
                workflows, avoiding the &ldquo;Virginia roundtrip&rdquo;.
              </p>
            </Tile>
          </Column>
          <Column lg={5} md={4} sm={4} className="feature-tile">
            <Tile className="feature-tile__content">
              <Renew size={48} />
              <h3>Carbon-Negative Compute</h3>
              <p>
                Powered by 99% renewable hydro-electricity. Lower your carbon
                footprint and your bill simultaneously.
              </p>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* Serverless Inference Section */}
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid className="landing-page__section">
          <Column lg={16} md={8} sm={4}>
            <h2 className="landing-page__section-heading">
              Serverless Inference. Zero DevOps.
            </h2>
            <p className="landing-page__section-intro">
              Stop managing Kubernetes clusters and fighting for GPU quotas. We
              abstract the infrastructure so you can focus on the code.
            </p>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <div className="api-feature">
              <Api size={32} />
              <div>
                <h4>OpenAI-Compatible API</h4>
                <p>
                  Migration is instant. Just change your BASE_URL and API_KEY.
                  No code rewrites required.
                </p>
              </div>
            </div>
            <div className="api-feature">
              <Cloud size={32} />
              <div>
                <h4>Curated Open Source Models</h4>
                <p>
                  Instant access to Llama 3, Mistral, Mixtral, and Stable
                  Diffusion XL.
                </p>
              </div>
            </div>
            <div className="api-feature">
              <Finance size={32} />
              <div>
                <h4>Scale-to-Zero Economics</h4>
                <p>
                  Pay only for the milliseconds your model is inferring. No idle
                  costs for sporadic workloads.
                </p>
              </div>
            </div>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <CodeSnippet
              type="multi"
              feedback="Copied!"
              className="code-snippet"
            >
              {codeExample}
            </CodeSnippet>
          </Column>
        </Grid>
      </Column>

      {/* Use Cases Section */}
      <Column lg={16} md={8} sm={4} className="landing-page__r4" id="use-cases">
        <InfoSection heading="Built For" className="use-cases-section">
          <InfoCard
            heading="Regulated Enterprise"
            body="Process sensitive financial or patient data without triggering extraterritorial surveillance risks (e.g., US CLOUD Act). Keep your compliance officer happy and your data local."
            icon={() => <Finance size={32} />}
          />
          <InfoCard
            heading="Creative Industries"
            body="Montreal is the Hollywood of Gaming. Don't let lag kill your flow. Generate assets, textures, and NPCs in real-time with local inference speeds that US providers cannot match."
            icon={() => <GameConsole size={32} />}
          />
          <InfoCard
            heading="Solo Builders"
            body="Access the same H100 and A100 class compute as the unicorns, but without the commit. Eligible for AI Compute Access Fund subsidies? We can help you navigate the paperwork."
            icon={() => <Idea size={32} />}
          />
        </InfoSection>
      </Column>

      {/* Pricing Section */}
      <Column lg={16} md={8} sm={4} className="landing-page__r5" id="pricing">
        <Grid className="landing-page__section">
          <Column lg={16} md={8} sm={4}>
            <h2 className="landing-page__section-heading">
              Global Performance. Local Currency.
            </h2>
            <p className="landing-page__section-intro">
              We pass Quebec&apos;s energy savings directly to you.
            </p>
          </Column>
          <Column lg={16} md={8} sm={4}>
            <StructuredListWrapper className="pricing-table">
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>Tier</StructuredListCell>
                  <StructuredListCell head>Price (CAD)</StructuredListCell>
                  <StructuredListCell head>Features</StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                <StructuredListRow>
                  <StructuredListCell>Serverless</StructuredListCell>
                  <StructuredListCell>$X.XX / 1M Tokens</StructuredListCell>
                  <StructuredListCell>
                    Auto-scaling, Shared H100/A100s, Pay-per-use
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>Dedicated</StructuredListCell>
                  <StructuredListCell>$X.XX / GPU-Hour</StructuredListCell>
                  <StructuredListCell>
                    Reserved instances for consistent throughput. No cold
                    starts.
                  </StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                  <StructuredListCell>Enterprise</StructuredListCell>
                  <StructuredListCell>Custom</StructuredListCell>
                  <StructuredListCell>
                    Private networking (vRack), BAA for Healthcare, TPN
                    Compliance support.
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>
            <p className="pricing-compare">
              Compare us: We are ~30% cheaper than AWS Bedrock and offer strict
              data residency that Replicate cannot guarantee.
            </p>
          </Column>
        </Grid>
      </Column>

      {/* Footer / Contact Section */}
      <Column
        lg={16}
        md={8}
        sm={4}
        className="landing-page__footer"
        id="contact"
      >
        <Grid className="landing-page__section">
          <Column lg={8} md={4} sm={4}>
            <h2 className="landing-page__section-heading">Get Started Today</h2>
            <p className="landing-page__section-intro">
              Ready to deploy sovereign AI infrastructure? Get your API key and
              start building in minutes.
            </p>
            <div className="landing-page__cta-group">
              <Button size="lg">Get API Key</Button>
              <Button size="lg" kind="secondary">
                Contact Sales
              </Button>
            </div>
          </Column>
          <Column lg={8} md={4} sm={4} className="footer-info">
            <p className="footer-location">
              Hosted in Montreal. Powered by Hydro-Quebec.
            </p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy (Law 25)</a>
              <a href="/contact">Contact Privacy Officer</a>
            </div>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
