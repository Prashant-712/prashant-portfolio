import React from "react";
import "./PuneMetroCaseStudy.css";

const ASSETS = {
  hero: "/assets/pune-metro/hero.png",
  map: "/assets/pune-metro/map.png",
  journey: "/assets/pune-metro/journey.png",
};

export default function PuneMetroCaseStudy() {
  return (
    <main className="pune-case-study">
      {/* HERO — Full-bleed, bold, editorial */}
      <section className="pm-hero">
        <div className="pm-container">
          <div className="pm-hero-grid">
            <div className="pm-hero-content">
              <div className="pm-hero-meta">
                <span className="pm-tag">Product Design · 2026</span>
                <span className="pm-tag pm-tag-outline">Redesign</span>
              </div>
              <h1>
                A clearer way to
                <br />
                plan a metro journey.
              </h1>
              <p className="pm-hero-desc">
                I reworked the Pune Metro Rail experience around one simple idea:
                passengers should not have to figure out where to start.
              </p>
              <div className="pm-hero-stats">
                <div>
                  <span>Role</span>
                  <strong>Product &amp; UX Design</strong>
                </div>
                <div>
                  <span>Platform</span>
                  <strong>Responsive Web</strong>
                </div>
                <div>
                  <span>Tool</span>
                  <strong>Figma</strong>
                </div>
                <div>
                  <span>Scope</span>
                  <strong>Journey · Safety · Lost &amp; Found</strong>
                </div>
              </div>
            </div>
            <div className="pm-hero-visual">
              
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM — Visual-first, with numbered cards */}
      <section className="pm-section">
        <div className="pm-container">
          <div className="pm-section-label">
            <span>01</span>
            <span>Problem</span>
          </div>
          <div className="pm-problem-header">
            <h2>
              The homepage had the right ingredients,
              <br />
              but they felt disconnected.
            </h2>
            <p>
              The original experience exposed journey planning, fare
              calculation, concerns and lost &amp; found as separate entry
              points. My first pass was not to redesign everything. It was to
              understand which pieces were repeating the same task and where a
              passenger would hit a dead end.
            </p>
          </div>

          <div className="pm-problem-grid">
            <div className="pm-problem-card">
              <div className="pm-problem-num">01</div>
              <h3>Two forms for one decision</h3>
              <p>
                Journey planning and fare calculation both asked for the same
                From and To stations.
              </p>
            </div>
            <div className="pm-problem-card">
              <div className="pm-problem-num">02</div>
              <h3>The route stayed invisible</h3>
              <p>
                Selecting stations did not give the passenger a useful picture
                of the trip itself.
              </p>
            </div>
            <div className="pm-problem-card">
              <div className="pm-problem-num">03</div>
              <h3>Support stopped at the homepage</h3>
              <p>
                Raise a Concern and Lost &amp; Found needed an actual task flow
                behind the entry points.
              </p>
            </div>
          </div>

          <div className="pm-direction-block">
            <div className="pm-direction-badge">Design direction</div>
            <h3>Make the next decision obvious.</h3>
            <p>
              Instead of adding more cards and links, I focused on reducing
              repeated inputs, making the journey visible, and giving support
              tasks a clear beginning and end.
            </p>
            <div className="pm-direction-note">
              This is a concept redesign based on interface review, not a
              validated usability study.
            </div>
          </div>
        </div>
      </section>

      {/* FLOW — Horizontal scroller feel, with visual connectors */}
      <section className="pm-section pm-section-dark">
        <div className="pm-container">
          <div className="pm-section-label pm-section-label-light">
            <span>02</span>
            <span>Process</span>
          </div>
          <div className="pm-flow-header">
            <h2>
              From “choose a feature”
              <br />
              to “complete a task”.
            </h2>
            <p>
              The main change was structural. I treated the homepage as the
              beginning of a passenger task rather than a collection of
              independent widgets.
            </p>
          </div>

          <div className="pm-flow-grid">
            <div className="pm-flow-item">
              <div className="pm-flow-icon">01</div>
              <h3>Choose</h3>
              <p>Start with the stations that matter to the trip.</p>
            </div>
            <div className="pm-flow-arrow">→</div>
            <div className="pm-flow-item">
              <div className="pm-flow-icon">02</div>
              <h3>Understand</h3>
              <p>See route, stops and fare together.</p>
            </div>
            <div className="pm-flow-arrow">→</div>
            <div className="pm-flow-item">
              <div className="pm-flow-icon">03</div>
              <h3>Act</h3>
              <p>Continue to the next useful action without restarting.</p>
            </div>
            <div className="pm-flow-arrow">→</div>
            <div className="pm-flow-item">
              <div className="pm-flow-icon">04</div>
              <h3>Recover</h3>
              <p>Give support tasks their own guided flows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY — Side-by-side comparison */}
<section className="pm-section">
  <div className="pm-container">
    <div className="pm-section-label">
      <span>03</span>
      <span>Solution</span>
    </div>

    <div className="pm-solution-header">
      <h2>I merged planning and fare into one decision.</h2>
      <p>
        The new journey view keeps the From and To inputs together, then
        uses the result to expose the route, intermediate stations and
        fare in the same place.
      </p>
    </div>

    <div className="pm-compare-grid">
      {/* BEFORE – add your PNG here */}
      

      
      <div className="pm-compare-card">
        <div className="pm-compare-label pm-compare-label-after"></div>
        <div className="pm-compare-image">
          <img
            src="/assets/Frame 25.png"    // ← put your After PNG path
            alt="After – connected journey result"
          />
        </div>
      </div>
    </div>

    <div className="pm-insight-grid">
      <div>
        <strong>Same inputs</strong>
        <p>From / To are entered once.</p>
      </div>
      <div>
        <strong>More context</strong>
        <p>
          The route becomes part of the result, not a hidden next step.
        </p>
      </div>
      <div>
        <strong>Clear continuation</strong>
        <p>
          Fare and ticket purchase are visible without leaving the
          journey.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SUPPORT — Two-column layouts with forms and lists */}
      <section className="pm-section pm-section-soft">
        <div className="pm-container">
          <div className="pm-section-label">
            <span>04</span>
            <span>Support</span>
          </div>
          <div className="pm-support-header">
            <h2>
              Support should feel like a task,
              <br />
              not a contact link.
            </h2>
            <p>
              I separated support into two practical flows: raising a concern
              and recovering a lost item.
            </p>
          </div>

          {/* Concern */}
          <div className="pm-support-grid">
            <div className="pm-support-text">
              <h3>Raise a Concern</h3>
              <p>
                The form starts with the type of issue, then asks for the
                context needed to investigate it.
              </p>
              <ul>
                <li>Issue category</li>
                <li>Station / train reference</li>
                <li>Date and time</li>
                <li>Description and optional photo</li>
                <li>Optional follow-up contact</li>
              </ul>
            </div>
            <div className="pm-support-form">
              {/* Responsive image */}
              <div className="pm-form-image">
                <img
                  src="/assets/RaiseConcern.png"  
                  alt="Raise a concern form preview"
                  loading="lazy"
                />
              </div>




            </div>
          </div>

          {/* Lost & Found */}
<div className="pm-support-grid pm-lost-found">
  {/* Left side – Image */}
  <div className="pm-lost-image">
    <img 
      src="/assets/LostAndFound.png"   // ← your PNG path
      alt="Lost & Found board"
    />
  </div>

  {/* Right side – Text + List */}
  <div className="pm-support-text">
    <h3>Lost &amp; Found</h3>
    <p>
      Instead of making the passenger call or search blindly, the
      redesign creates a simple board of found items with a visible
      status and a defined claim path.
    </p>

    <div className="pm-lost-list">
      <div className="pm-lost-item">
        <div>
          <strong>Black Backpack</strong>
          <span>Shivajinagar · LF001</span>
        </div>
        <span className="pm-status-found">Found</span>
      </div>

      <div className="pm-lost-item">
        <div>
          <strong>Mobile Phone</strong>
          <span>Swargate · LF002</span>
        </div>
        <span className="pm-status-claimed">Claimed</span>
      </div>

      <div className="pm-lost-item">
        <div>
          <strong>Blue Umbrella</strong>
          <span>Civil Court · LF003</span>
        </div>
        <span className="pm-status-found">Found</span>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* BEFORE / AFTER — Full-width callout */}
      <section className="pm-section pm-section-compare">
        <div className="pm-container">
          <div className="pm-section-label">
            <span>05</span>
            <span>Impact</span>
          </div>
          <h2 className="pm-compare-title">
            Small structural changes made the interface feel more intentional.
          </h2>
          <div className="pm-compare-block">
            <div className="pm-compare-before">
              <span>Before</span>
              <h3>Disconnected experience</h3>
              <p>
                Separate widgets, repeated station selection, static results,
                and support links that did not lead into a complete task.
              </p>
            </div>
            <div className="pm-compare-after">
              <span>After</span>
              <h3>Connected journey</h3>
              <p>
                A connected journey result, clearer continuation points, and two
                support flows designed around what passengers need to provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDING — Full browser mockup */}
<section className="pm-section pm-section-soft">
  <div className="pm-container">
    <div className="pm-section-label">
      <span>06</span>
      <span>Final Design</span>
    </div>

    <div className="pm-landing-header">
      <h2>
        The landing page,
        <br />
        shown as one complete experience.
      </h2>
      <p>
        <a href="https://www.figma.com/design/VZSGkeYKzIESHiNON4nShf/Metro-1?node-id=349-59&t=IRHHoROho4jasbCy-0" target="_blank" rel="noopener noreferrer">
          <span>Open Link</span>
        </a>
      </p>
    </div>

    {/* Full landing page image – responsive */}
    <div className="pm-landing-image">
      <img
        src="/assets/Final.png"   // ← your image path
        alt="Pune Metro final landing page"
        loading="lazy"
      />
    </div>
  </div>
</section>

    </main>
  );
}