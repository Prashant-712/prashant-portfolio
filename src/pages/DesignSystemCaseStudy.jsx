import React, { useEffect, useState } from 'react';
import './DesignSystem.css';

const DesignSystem = () => {
  const [activeStep, setActiveStep] = useState('foundation');
  const [themeMode, setThemeMode] = useState('light');
  const [selectedColor, setSelectedColor] = useState('#4f46e5');

  const colorNames = {
    '#4f46e5': 'Color/Indigo/500',
    '#16a34a': 'Color/Green/500',
    '#ef4444': 'Color/Red/500',
    '#eab308': 'Color/Yellow/500',
    '#0d0b38': 'Color/Indigo/950'
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [];
      const y = window.scrollY + 120;

      let current = sections[0];
      sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element && element.offsetTop <= y) {
          current = sec;
        }
      });

      setActiveStep(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleColorSelect = (hex) => {
    setSelectedColor(hex);
  };

  return (
    <div id="design-system-case-study">
      {/* Navigation */}
      <nav className="chain-nav">
        {/* <div className="chain-inner" id="chainNav">
          <span className="chain-brand">CASE STUDY /</span>
          <a href="#foundation" className={`chain-step ${activeStep === 'foundation' ? 'active' : ''}`} data-step="foundation">Foundation</a>
          <span className="chain-sep">→</span>
          <a href="#alias" className={`chain-step ${activeStep === 'alias' ? 'active' : ''}`} data-step="alias">Alias</a>
          <span className="chain-sep">→</span>
          <a href="#mapped" className={`chain-step ${activeStep === 'mapped' ? 'active' : ''}`} data-step="mapped">Mapped</a>
          <span className="chain-sep">→</span>
          <a href="#themes" className={`chain-step ${activeStep === 'themes' ? 'active' : ''}`} data-step="themes">Themes</a>
          <span className="chain-sep">→</span>
          <a href="#responsive" className={`chain-step ${activeStep === 'responsive' ? 'active' : ''}`} data-step="responsive">Responsive</a>
          <span className="chain-sep">→</span>
          <a href="#component" className={`chain-step ${activeStep === 'component' ? 'active' : ''}`} data-step="component">Component</a>
        </div> */}
      </nav>

      {/* Hero Section */}
      <header className="hero wrap">
        <div className="hero-kicker">Design Systems — Design Tokens — Figma Variables</div>
        <h1>
          Design System<br />
          & <span className="hl">Tokens</span>
        </h1>
        <p className="lede">
          Exploring a scalable token architecture with Claude, Figma Variables & MCP — from raw color values to a fully themeable, responsive component system.
        </p>

        

        <div className="stat-row">
          <div className="stat">
            <div className="num">379</div>
            <div className="label">Figma variables</div>
          </div>
          <div className="stat">
            <div className="num">7</div>
            <div className="label">Variable collections</div>
          </div>
          <div className="stat">
            <div className="num">2</div>
            <div className="label">Themes — light & dark</div>
          </div>
          <div className="stat">
            <div className="num">3</div>
            <div className="label">Breakpoints — desktop / tablet / phone</div>
          </div>
        </div>
      </header>

      {/* Cover Image Placeholder */}
      <div className="wrap">
        <div className="imgph" style={{ marginTop: '10px',  }}>
          <div className="ph-title"></div>
          <div className="wrap">
  <img 
    src="/assets/Brand.jpg"
    alt="Design System Cover"
    style={{ 
      marginTop: '5px', 
      width: '100%', 
      borderRadius: '16px',
      // aspectRatio: '16/8',
      objectFit: 'cover'
    }} 
  />
</div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="tight">
        <div className="wrap grid2">
          <div>
            <div className="eyebrow">The problem</div>
            <h2 className="h-title">Raw values drift. Systems don't.</h2>
          </div>
          <div className="section-lede" style={{ marginTop: '6px' }}>
            As a design system grows, repeating raw values across screens creates inconsistency. A color might be changed in one place but remain unchanged elsewhere. Spacing can drift. Dark mode can require separate decisions. Typography may need different scales across devices.
            <br /><br />
            I wanted a system that works more like this: <b>Foundation → Semantic meaning → Component usage → Responsive output</b> — easier to maintain, reuse, and scale.
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="tinted">
        <div className="wrap">
          <div className="eyebrow">The architecture</div>
          <h2 className="h-title">Seven collections, one dependency chain</h2>
          <p className="section-lede">
            Foundation tokens hold raw values. Alias tokens give those values a reusable semantic identity. Mapped tokens describe how the value is actually used — so a component never needs to know the exact hex, only that it's using an "action" color.
          </p>

          <div className="arch-grid">
            <div className="arch-card" style={{ '--card-c': 'var(--ds-indigo-500)' }}>
              <div className="n">159</div>
              <div className="name">Brand</div>
              <div className="purp">Raw visual foundations</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-indigo-500)' }}>
              <div className="n">68</div>
              <div className="name">Alias</div>
              <div className="purp">Semantic color aliases</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-green-500)' }}>
              <div className="n">40</div>
              <div className="name">Mapped</div>
              <div className="purp">Light-theme semantic roles</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-indigo-950)' }}>
              <div className="n">40</div>
              <div className="name">Mapped Dark</div>
              <div className="purp">Dark-theme semantic roles</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-yellow-500)' }}>
              <div className="n">24</div>
              <div className="name">Resp. Desktop</div>
              <div className="purp">Type & spacing @ 1440px</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-yellow-500)' }}>
              <div className="n">24</div>
              <div className="name">Resp. Tablet</div>
              <div className="purp">Type & spacing @ 1024px</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-yellow-500)' }}>
              <div className="n">24</div>
              <div className="name">Resp. Phone</div>
              <div className="purp">Type & spacing @ 393px</div>
            </div>
            <div className="arch-card" style={{ '--card-c': 'var(--ds-red-500)' }}>
              <div className="n">379</div>
              <div className="name">Total</div>
              <div className="purp">Across the full system</div>
            </div>
          </div>

          <div className="imgph" style={{ marginTop: '32px',  }}>
            <div className="ph-title"></div>
           <img 
 src="/assets/Mapped.jpg"
  alt="Design System Architecture - 7 Collections Dependency Chain"
  style={{ 
    // marginTop: 'px', 
    width: '100%', 
    borderRadius: '16px',
    // aspectRatio: '16/7',
    objectFit: 'cover'
  }} 
/>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="foundation">
        <div className="wrap">
          <div className="eyebrow">01 — Foundation tokens</div>
          <h2 className="h-title">The raw building blocks</h2>
          <p className="section-lede">Five color families, each on a 50–950 scale. Independent numeric scales for size, spacing, radius, and type.</p>

          <div style={{ marginTop: '38px' }}>
            <div className="swatch-fam">
              <div className="fam-label">Color / Indigo</div>
              <div className="swatch-row">
                <div className="swatch" style={{ background: '#f0effb', color: '#0d0b38' }}>50</div>
                <div className="swatch" style={{ background: '#e0ddfa', color: '#0d0b38' }}>100</div>
                <div className="swatch" style={{ background: '#c7c2f5', color: '#0d0b38' }}>200</div>
                <div className="swatch" style={{ background: '#4f46e5', color: '#fff' }}>500</div>
                <div className="swatch" style={{ background: '#372f9e', color: '#fff' }}>700</div>
                <div className="swatch" style={{ background: '#0d0b38', color: '#fff' }}>950</div>
              </div>
            </div>
            <div className="swatch-fam">
              <div className="fam-label">Color / Green · Red · Yellow</div>
              <div className="swatch-row">
                <div className="swatch" style={{ background: '#dcfce7', color: '#14532d' }}>100</div>
                <div className="swatch" style={{ background: '#16a34a', color: '#fff' }}>500</div>
                <div className="swatch" style={{ background: '#fee2e2', color: '#7f1d1d' }}>100</div>
                <div className="swatch" style={{ background: '#ef4444', color: '#fff' }}>500</div>
                <div className="swatch" style={{ background: '#fef9c3', color: '#713f12' }}>100</div>
                <div className="swatch" style={{ background: '#eab308', color: '#fff' }}>500</div>
              </div>
            </div>
            <div className="swatch-fam">
              <div className="fam-label">Color / Grey</div>
              <div className="swatch-row">
                <div className="swatch" style={{ background: '#fafafa', color: '#18181b', boxShadow: 'inset 0 0 0 1px #e4e4e7' }}>50</div>
                <div className="swatch" style={{ background: '#f1f1f4', color: '#18181b' }}>100</div>
                <div className="swatch" style={{ background: '#d4d4d8', color: '#18181b' }}>300</div>
                <div className="swatch" style={{ background: '#71717a', color: '#fff' }}>500</div>
                <div className="swatch" style={{ background: '#3f3f46', color: '#fff' }}>700</div>
                <div className="swatch" style={{ background: '#18181b', color: '#fff' }}>900</div>
              </div>
            </div>
          </div>

          <div className="grid2" style={{ marginTop: '56px' }}>
            <div className="scale-block">
              <div className="eyebrow" style={{ marginBottom: '4px' }}>Size / Spacing / Radius</div>
              <p className="section-lede" style={{ marginTop: 0 }}>
                Spacing is kept separate from generic size values so layout decisions stay explicit — <span className="tok">Size/size-2</span> → <span className="tok">Size/size-128</span>, <span className="tok">Spacing/spacing-4</span> → <span className="tok">spacing-128</span>, <span className="tok">Radius/radius-4</span> → <span className="tok">radius-24</span>.
              </p>
              <div className="scale-bars">
                <div className="scale-bar" style={{ height: '8px' }}><span className="tag">4</span></div>
                <div className="scale-bar" style={{ height: '16px' }}><span className="tag">16</span></div>
                <div className="scale-bar" style={{ height: '32px' }}><span className="tag">32</span></div>
                <div className="scale-bar" style={{ height: '64px' }}><span className="tag">64</span></div>
                <div className="scale-bar" style={{ height: '90px' }}><span className="tag">128</span></div>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: '4px' }}>Typography</div>
              <p className="section-lede" style={{ marginTop: 0 }}>Roboto as the primary font, weights from Thin through Black.</p>
              <div className="type-specimen">
                <div className="type-row">
                  <span className="wname">Light</span>
                  <span className="wsample" style={{ fontWeight: 300, fontSize: '20px' }}>Aa Token</span>
                </div>
                <div className="type-row">
                  <span className="wname">Regular</span>
                  <span className="wsample" style={{ fontWeight: 400, fontSize: '20px' }}>Aa Token</span>
                </div>
                <div className="type-row">
                  <span className="wname">Medium</span>
                  <span className="wsample" style={{ fontWeight: 500, fontSize: '20px' }}>Aa Token</span>
                </div>
                <div className="type-row">
                  <span className="wname">Bold</span>
                  <span className="wsample" style={{ fontWeight: 700, fontSize: '20px' }}>Aa Token</span>
                </div>
              </div>
            </div>
          </div>

          <div className="imgph" style={{ marginTop: '50px',  }}>
            {/* <div className="ph-title">Foundation panel screenshot</div> */}
           <img 
  src="/assets/Tokens.png"
  alt="Figma Variables Panel - Foundation Tokens"
  style={{ 
    marginTop: '10px', 
    width: '100%', 
    borderRadius: '16px',
    // aspectRatio: '16/6',
    objectFit: 'contain'
  }} 
/>
          </div>
        </div>
      </section>

      {/* Alias Section */}
      <section id="alias" className="tinted">
        <div className="wrap">
          <div className="eyebrow">02 — Semantic alias tokens</div>
          <h2 className="h-title">From "Indigo 500" to "primary action"</h2>
          <p className="section-lede">
            Instead of using raw colors directly, aliases give them a reusable meaning — an abstraction layer between the raw foundation and the actual interface.
          </p>

          <div className="flow-list">
            <div className="flow-row">
              <span className="a">Primary/500</span>
              <span className="arw">→</span>
              <span className="b">Color/Indigo/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Success/500</span>
              <span className="arw">→</span>
              <span className="b">Color/Green/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Error/500</span>
              <span className="arw">→</span>
              <span className="b">Color/Red/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Warning/500</span>
              <span className="arw">→</span>
              <span className="b">Color/Yellow/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Neutral/900</span>
              <span className="arw">→</span>
              <span className="b">Color/Grey/900</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mapped Section */}
      <section id="mapped">
        <div className="wrap">
          <div className="eyebrow">03 — Mapped semantic tokens</div>
          <h2 className="h-title">Where the value is actually used</h2>
          <p className="section-lede">
            This is the layer components consume. Instead of <span className="tok">Button → Indigo/500</span>, a component uses <span className="tok">Button → Surface/action</span> — depending on meaning, not a specific visual value.
          </p>

          <div className="flow-list">
            <div className="flow-row">
              <span className="a">Surface/action</span>
              <span className="arw">→</span>
              <span className="b">Primary/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Text/action</span>
              <span className="arw">→</span>
              <span className="b">Primary/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Icon/action</span>
              <span className="arw">→</span>
              <span className="b">Primary/500</span>
            </div>
            <div className="flow-row">
              <span className="a">Border/action</span>
              <span className="arw">→</span>
              <span className="b">Primary/500</span>
            </div>
          </div>
          <p className="section-lede" style={{ marginTop: '20px' }}>
            Other roles cover primary / secondary / tertiary text, disabled states, success, error, warning, surfaces, icons, borders, and focus states.
          </p>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="dark">
        <div className="wrap">
          <div className="eyebrow">04 — Light & dark themes</div>
          <h2 className="h-title">One semantic role, different theme values</h2>
          <p className="section-lede">
            The component keeps the same semantic token while the underlying value changes with the theme — reducing the need for duplicated component logic.
          </p>

          <div className="theme-demo">
            <div className="demo-toolbar">
              <span className="lbl">Text/primary → theme preview</span>
              <button className="toggle-btn" onClick={handleThemeToggle}>
                Switch to {themeMode === 'light' ? 'dark' : 'light'}
              </button>
            </div>
            <div className="demo-screen" data-mode={themeMode}>
              <div className="card">
                <h4>Surface/primary</h4>
                <p>Text/primary sits on Surface/page. The token names never change — only what they resolve to.</p>
                <button className="btn">Surface/action</button>
              </div>
            </div>
          </div>
          <div className="demo-caption">↑ try it — same tokens, different resolved values per theme</div>
        </div>
      </section>

      {/* Responsive Section */}
      <section id="responsive" className="tinted">
        <div className="wrap">
          <div className="eyebrow">05 — Responsive tokens</div>
          <h2 className="h-title">Responsive behavior, built into the system</h2>
          <p className="section-lede">
            Separate collections for desktop, tablet, and phone — covering type scale, paragraph scale, and reusable spacing "jumps" like <span className="tok">Jumper/64-48</span> and <span className="tok">Jumper/96-48</span>.
          </p>

          <div className="device-row">
            <div className="device desktop">
              <div className="dev-label">Desktop</div>
              <div className="dev-h">Heading</div>
              <div className="dev-w">1440px</div>
            </div>
            <div className="device tablet">
              <div className="dev-label">Tablet</div>
              <div className="dev-h">Heading</div>
              <div className="dev-w">1024px</div>
            </div>
            <div className="device phone">
              <div className="dev-label">Phone</div>
              <div className="dev-h">Heading</div>
              <div className="dev-w">393px</div>
            </div>
          </div>

          <div className="imgph" style={{ marginTop: '40px', }}>
            {/* <div className="ph-title">Responsive comparison</div> */}
            <img 
 src="/assets/Tokens1.png"
  alt="Responsive Design - Desktop Tablet Phone Comparison"
  style={{ 
    marginTop: '10px', 
    width: '100%', 
    borderRadius: '16px',
    // aspectRatio: '8/6',
    objectFit: 'cover'
  }} 
/>
          </div>
        </div>
      </section>

      {/* Component Section */}
      <section id="component">
        <div className="wrap">
          <div className="eyebrow">06 — Example: one button</div>
          <h2 className="h-title">Change the foundation. Watch it cascade.</h2>
          <p className="section-lede">
            If the underlying color changes, the button doesn't need to be manually redesigned — the dependency chain handles the relationship. That's the practical value of tokenization. Try it below.
          </p>

          <div className="interactive-panel">
            <div className="chain-controls">
              <div className="control-row">
                <div className="clabel">1 — Pick a foundation color</div>
                <div className="color-picks" id="colorPicks">
                  {Object.keys(colorNames).map(hex => (
                    <div
                      key={hex}
                      className={`pick ${selectedColor === hex ? 'selected' : ''}`}
                      data-hex={hex}
                      style={{ background: hex }}
                      onClick={() => handleColorSelect(hex)}
                    />
                  ))}
                </div>
              </div>
              <div className="live-chain" id="liveChain">
                {colorNames[selectedColor]} → {selectedColor}<br />
                &nbsp;&nbsp;↓<br />
                <b>Primary/500</b> → {colorNames[selectedColor]}<br />
                &nbsp;&nbsp;↓<br />
                <b>Surface/action</b> → Primary/500<br />
                &nbsp;&nbsp;↓<br />
                Button → Surface/action
              </div>
            </div>
            <div className="preview-stage">
              <button id="liveBtn" style={{ background: selectedColor }}>Surface/action</button>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="dark tight">
        <div className="wrap">
          <div className="eyebrow">07 — Claude + Figma MCP workflow</div>
          <h2 className="h-title">Claude as a design-system partner, not a replacement</h2>
          <p className="section-lede">
            Claude helped accelerate repetitive and structural parts of the process. Figma remained the environment where the actual variables and relationships were created and validated the final source of truth is <b>Figma Variables, not the AI conversation.</b>
          </p>

          
        </div>
      </section>

      {/* <div className="wrap">
        <div className="imgph" style={{ marginTop: '60px', aspectRatio: '16/7' }}>
          <div className="ph-title">Workflow screenshot</div>
          <div className="ph-sub">Claude + Figma MCP in action — or a simple diagram of this six-step workflow.</div>
        </div>
      </div> */}

      {/* What It Enables Section */}
      <section className="tinted">
        <div className="wrap">
          <div className="eyebrow">What the system enables</div>
          <h2 className="h-title">Built to be picked up by anyone</h2>
          <p className="section-lede">
            A designer working on a new screen doesn't need to remember every hex value — they can work from intent: <span className="tok">Surface/action</span>, <span className="tok">Text/error</span>, <span className="tok">Border/focus</span>.
          </p>

          <div className="enable-grid">
            <div className="enable-card">
              <div className="et">Consistency</div>
              <div className="ed">Shared values reduce visual drift.</div>
            </div>
            <div className="enable-card">
              <div className="et">Faster iteration</div>
              <div className="ed">Foundational values change without editing every component.</div>
            </div>
            <div className="enable-card">
              <div className="et">Theme support</div>
              <div className="ed">Light and dark themes use the same semantic roles.</div>
            </div>
            <div className="enable-card">
              <div className="et">Responsive consistency</div>
              <div className="ed">Typography and spacing adapt systematically across devices.</div>
            </div>
            <div className="enable-card">
              <div className="et">Better handoff</div>
              <div className="ed">Token names communicate intent to designers and developers.</div>
            </div>
            <div className="enable-card">
              <div className="et">Easier scaling</div>
              <div className="ed">New components reuse existing semantic roles.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Token inventory</div>
          <h2 className="h-title">379 variables, 7 collections</h2>
          <table className="inv">
            <thead>
              <tr>
                <th>Collection</th>
                <th>Variables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-indigo-500)' }}></span>Brand</td>
                <td>159</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-indigo-500)' }}></span>Alias</td>
                <td>68</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-green-500)' }}></span>Mapped</td>
                <td>40</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-indigo-950)' }}></span>Mapped Dark</td>
                <td>40</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-yellow-500)' }}></span>Responsive Desktop</td>
                <td>24</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-yellow-500)' }}></span>Responsive Tablet</td>
                <td>24</td>
              </tr>
              <tr>
                <td><span className="dot" style={{ background: 'var(--ds-yellow-500)' }}></span>Responsive Phone</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>379</td>
              </tr>
            </tbody>
          </table>
          <div className="imgph" style={{ marginTop: '32px',  }}>
            <div className="ph-title">Full token library</div>
            <img 
 src="/assets/Tokens3.png"
  alt="Figma Variables Token Library - Complete Design System"
  style={{ 
    marginTop: '32px', 
    width: '100%', 
    borderRadius: '16px',
    // aspectRatio: '16/7',
    objectFit: 'cover'
  }} 
/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="fkicker">Final takeaway</div>
          <h3>Not hundreds of variables — a set of relationships between them: Foundation → Alias → Theme → Responsive → Component.</h3>
          <div className="tools">Tools used — Figma Variables · Claude + Figma MCP</div>
        </div>
      </footer>
    </div>
  );
};

export default DesignSystem;
