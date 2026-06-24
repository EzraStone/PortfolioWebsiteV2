"use client";

import Image from "next/image";

const themeRed = 'oklch(0.577 0.245 27.325)';
const buttonStyle: React.CSSProperties = {
    border: '2px solid #fff',
    borderRadius: '24px',
    padding: '12px 24px',
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    background: 'transparent',
    cursor: 'default',
    transition: 'background 0.2s, color 0.2s',
    boxShadow: '0 0 0 0',
    outline: 'none',
    margin: '0',
    textAlign: 'center',
    letterSpacing: '0.02em',
};

export default function AboutPage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#0d0d0d',
            backgroundImage: 'linear-gradient(180deg, #0d0d0d 0%, #330000 100%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 16px',
            overflow: 'hidden',
        }}>
            {/* Centered name and image above sections */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
            }}>
                <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&h=200&facepad=2&q=80"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full object-cover bg-black mb-4"
                />
                <h1 style={{
                    fontSize: '2.8rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.04em',
                    marginBottom: '8px',
                    textAlign: 'center',
                }}>
                    EZRA STONE
                </h1>
                <div style={{
                    color: '#eaeaea',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    marginBottom: '0',
                    textAlign: 'center',
                }}>
                    CYBERSECURITY · DEVELOPER · RESEARCHER
                </div>
            </div>

            {/* About Me and What I Do stacked, Technical Skills to the right */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '48px',
                width: '100%',
                maxWidth: '1400px',
            }}>
                <div style={{ maxWidth: '600px', width: '100%', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h2 style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1.4rem',
                            marginBottom: '12px',
                            letterSpacing: '0.04em',
                        }}>ABOUT ME</h2>
                        <p style={{
                            color: '#eaeaea',
                            fontSize: '1.1rem',
                            lineHeight: '1.7',
                            marginBottom: '0',
                        }}>
                            I&apos;m a Computer Science major passionate about cybersecurity, artificial intelligence, and innovative software development. I combine technical expertise with a creative mindset to design effective, forward-thinking solutions to complex problems
                        </p>
                        <div style={{
                            borderBottom: `2px solid ${themeRed}`,
                            margin: '32px 0 24px 0',
                            opacity: 0.2,
                        }} />
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 auto', marginTop: '32px' }}>
                        <h2 style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1.4rem',
                            marginBottom: '18px',
                            letterSpacing: '0.04em',
                        }}>WHAT I DO</h2>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '16px',
                            justifyContent: 'center',
                        }}>
                            <div style={buttonStyle}>Cybersecurity Research</div>
                            <div style={buttonStyle}>Web Development</div>
                            <div style={buttonStyle}>AI & Machine Learning</div>
                            <div style={buttonStyle}>Software Engineering</div>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', margin: '0 auto', zIndex: 1 }}>
                    <h2 style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                        marginBottom: '18px',
                        letterSpacing: '0.04em',
                    }}>TECHNICAL SKILLS</h2>
                    <ul style={{ color: '#eaeaea', fontSize: '1.05rem', lineHeight: '1.7', paddingLeft: '18px', marginBottom: '0', listStyle: 'disc', textAlign: 'left', display: 'inline-block' }}>
                        <li><strong>Programming Languages:</strong> C, C++, C#, Python, Java, JavaScript, TypeScript, HTML, CSS, Bash</li>
                        <li><strong>Tools & Technologies:</strong> Git, GitHub, Docker, Visual Studio Code, Postman, npm, pip, CMake</li>
                        <li><strong>Software Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), API Development, Software Design Patterns</li>
                        <li><strong>Operating Systems:</strong> Linux, Windows, macOS</li>
                        <li><strong>Cybersecurity & DevOps:</strong> System Administration, Command-line Tools, Wireshark, Nmap, Metasploit, Containerization, Version Control</li>
                        <li><strong>AI / Machine Learning:</strong> OpenEvolve, Pandas, TensorFlow, PyTorch, OpenAI GPT Models (ChatGPT API), LangChain, Rasa, Dialogflow, Prompt Engineering</li>
                        <li><strong>Databases:</strong> MongoDB, MySQL, SQLite, REST APIs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
