import { useState } from 'react';
import { WEBHOOKS } from '../data/content';
import { IconReplay } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import './ProductDemo.css';

export function ProductDemo() {
  const [selected, setSelected] = useState(WEBHOOKS[0]);
  const [replaying, setReplaying] = useState(false);
  const [replayCount, setReplayCount] = useState(0);

  const handleReplay = () => {
    setReplaying(true);
    setReplayCount((count) => count + 1);
    window.setTimeout(() => setReplaying(false), 1200);
  };

  return (
    <section id="product" className="product-section">
      <div className="container">
        <ScrollReveal className="product-header">
          <span className="section-label">Product</span>
          <h2 className="section-title">See exactly what happened.</h2>
          <p className="section-desc">
            Inspect payloads, headers, responses, timing, and delivery status
            without digging through raw logs.
          </p>
        </ScrollReveal>

        <div className="product-demo">
          <div className="demo-window">
            <div className="demo-titlebar">
              <div className="demo-titlebar-start">
                <span className="demo-badge">Example delivery</span>
                <span className="demo-url">app.latch.dev/inbox/acme-payments</span>
              </div>
              <span className="demo-live">
                <span className="live-dot" />
                Listening
              </span>
            </div>

            <div className="demo-body">
              <aside className="demo-sidebar">
                <div className="demo-sidebar-head">
                  <span>Deliveries</span>
                  <span className="demo-count">{WEBHOOKS.length}</span>
                </div>
                <ul className="event-list" role="listbox" aria-label="Webhook deliveries">
                  {WEBHOOKS.map((webhook) => (
                    <li key={webhook.id}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected.id === webhook.id}
                        className={`event-row${selected.id === webhook.id ? ' active' : ''}`}
                        onClick={() => setSelected(webhook)}
                      >
                        <span className={`event-source source-${webhook.source}`}>
                          {webhook.source}
                        </span>
                        <span className="event-name">{webhook.event}</span>
                        <span className="event-meta">
                          <span className={`status-badge status-${webhook.status}`}>
                            {webhook.status}
                          </span>
                          <span className="event-time">{webhook.time}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              <main className="demo-main">
                <div className="demo-toolbar">
                  <span className="toolbar-method">{selected.method}</span>
                  <span className="toolbar-path">/hooks/{selected.source}</span>
                  <span className="toolbar-latency">{selected.latency}</span>
                  <button
                    type="button"
                    className={`replay-btn${replaying ? ' replaying' : ''}`}
                    onClick={handleReplay}
                    disabled={replaying}
                  >
                    {replaying ? (
                      <>
                        <span className="replay-spinner" />
                        Dispatching
                      </>
                    ) : (
                      <>
                        <IconReplay />
                        Replay delivery
                      </>
                    )}
                  </button>
                </div>

                <div className="demo-payload">
                  <div className="payload-tabs" role="tablist" aria-label="Payload views">
                    <span className="tab active" role="tab" aria-selected="true">Body</span>
                    <span className="tab" role="tab" aria-selected="false">Headers</span>
                    <span className="tab" role="tab" aria-selected="false">Response</span>
                  </div>
                  <pre className="payload-code">
                    <code>{JSON.stringify(selected.payload, null, 2)}</code>
                  </pre>
                </div>

                {replayCount > 0 && (
                  <div className="replay-toast" role="status">
                    Replay {replayCount} sent to localhost:3000
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
