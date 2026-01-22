import React, {useState, useEffect} from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({onLoadComplete}) => {
    const [lines, setLines] = useState([]);
    const [stage, setStage] = useState(0);

    const hackingSequence = [
        '> Initializing security protocols...',
        '> Scanning network perimeter...',
        '> Bypassing firewall... [██████] 100%',
        '> Accessing secure server...',
        '> Establishing secure connection...',
        '> Connection established ✓',
        '',
        'ACCESS GRANTED',
        'WELCOME TO OSEC'
    ];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < hackingSequence.length) {
                setLines(prevLines => [...prevLines, hackingSequence[currentIndex]]);
                currentIndex++;

                if (currentIndex === hackingSequence.length - 2) {
                    setStage(1);
                }
                if (currentIndex === hackingSequence.length - 1) {
                    setStage(2);
                }
            } else {
                clearInterval(interval);
                setTimeout(() => onLoadComplete(), 1000);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <div className="loading-screen">
            <div className="scanline"></div>
            <div className="terminal-container">
                <div className="terminal-header">
                    <span className="terminal-title">OSEC Terminal</span>
                    <span className="terminal-status">● LIVE</span>
                </div>
                <div className="terminal-body">
                    {lines.map((line, index) => (
                        <div
                            key={index}
                            className={`terminal-line ${
                                index === lines.length - 2 ? 'access-granted' : ''
                            } ${index === lines.length - 1 ? 'welcome-text' : ''
                            }`}
                            
                        >
                            {line}
                            {index === lines.length - 1 && <span className="cursor">_</span>}

                        </div>
                    ))}
                </div>
            </div>
            <div className="glitch-overlay"></div>
        </div>
    );

};

export default LoadingScreen;