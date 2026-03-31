import React, { useState } from 'react';

const Footer = ({ scrollToSection }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleSend = () => {
    const mailto = `mailto:gabrielfernandes27041993@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setShowEmailModal(false);
    setSubject('');
    setBody('');
  };

  const handleClose = () => {
    setShowEmailModal(false);
    setSubject('');
    setBody('');
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Gabrial Fernandes</h3>
              <p>Planning Coordination Specialist</p>
              <p className="footer-tagline">Driving excellence in media operations</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <a href="https://in.linkedin.com/in/gabrial-fernandes-061909191" className="footer-social">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="#" onClick={handleEmailClick} className="footer-social">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Gabrial Fernandes. All rights reserved.</p>
            <p>Designed & Built with React</p>
          </div>
        </div>
      </footer>

      {showEmailModal && (
        <div style={styles.overlay} onClick={handleClose}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div style={styles.modalTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                New Message
              </div>
              <button style={styles.closeBtn} onClick={handleClose}>✕</button>
            </div>

            <div style={styles.toField}>
              <span style={styles.label}>To:</span>
              <span style={styles.toValue}>gabrielfernandes27041993@gmail.com</span>
            </div>

            <div style={styles.divider} />

            <div style={styles.fieldRow}>
              <span style={styles.label}>Subject:</span>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                autoFocus
              />
            </div>

            <div style={styles.divider} />

            <textarea
              style={styles.textarea}
              placeholder="Write your message here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <div style={styles.modalFooter}>
              <button style={styles.cancelBtn} onClick={handleClose}>Cancel</button>
              <button
                style={{
                  ...styles.sendBtn,
                  opacity: !subject.trim() && !body.trim() ? 0.5 : 1,
                  cursor: !subject.trim() && !body.trim() ? 'not-allowed' : 'pointer',
                }}
                onClick={handleSend}
                disabled={!subject.trim() && !body.trim()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modal: {
    background: '#1a1a2e',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '520px',
    margin: '0 16px',
    boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 20px',
    background: 'rgba(255,255,255,0.04)',
  },
  modalTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 600,
    fontSize: '15px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '4px 8px',
    borderRadius: '6px',
  },
  toField: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    gap: 10,
  },
  label: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '13px',
    minWidth: 56,
  },
  toValue: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '14px',
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.07)',
    margin: '0 20px',
  },
  fieldRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    gap: 10,
  },
  input: {
    flex: 1,
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#fff',
    fontSize: '14px',
    padding: 0,
  },
  textarea: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    lineHeight: '1.6',
    padding: '16px 20px',
    resize: 'none',
    minHeight: '180px',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    padding: '14px 20px',
    background: 'rgba(255,255,255,0.03)',
    borderTop: '1px solid rgba(255,255,255,0.07)',
  },
  cancelBtn: {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.7)',
    padding: '8px 18px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
  },
  sendBtn: {
    background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)',
    border: 'none',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s',
  },
};

export default Footer;