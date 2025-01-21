import { useState } from 'react';
import './Customize.css';
import HeartShape from '../assets/shapes/heart.svg';
import StarShape from '../assets/shapes/star.svg';
import CircleShape from '../assets/shapes/circle.svg';
import flower1 from '../assets/flowers/flower1.svg';
import flower2 from '../assets/flowers/flower2.svg';

function Customize() {
    const [shape, setShape] = useState('');
    const [contentType, setContentType] = useState(''); // 'letter' or 'flower'
    const [letter, setLetter] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [fontStyle, setFontStyle] = useState('normal');
    const [isItalic, setIsItalic] = useState(false);
    const [flower, setFlower] = useState(null);

    const shapes = {
        Heart: HeartShape,
        Star: StarShape,
        Circle: CircleShape,
    };

    return (
        <div className="customize">
            <h1>Customize Your Jewelry</h1>

            {/* Shape Selection */}
            <h2>Choose a Shape</h2>
            <div className="options">
                <button onClick={() => setShape('Heart')}>Heart</button>
                <button onClick={() => setShape('Star')}>Star</button>
                <button onClick={() => setShape('Circle')}>Circle</button>
            </div>

            {/* Content Type Selection */}
            <h2>Choose Content Type</h2>
            <div className="options">
                <button onClick={() => setContentType('letter')}>Customize Letter</button>
                <button onClick={() => setContentType('flower')}>Add Flower</button>
            </div>

            {/* Letter Customization Tools */}
            {contentType === 'letter' && (
                <div className="letter-tools">
                    <h3>Enter a Letter</h3>
                    <input
                        type="text"
                        maxLength="1"
                        placeholder="Enter a letter"
                        value={letter}
                        onChange={(e) => setLetter(e.target.value)}
                    />
                    <h3>Font Size</h3>
                    <input
                        type="range"
                        min="10"
                        max="50"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                    />
                    <h3>Font Style</h3>
                    <div>
                        <input
                            type="checkbox"
                            checked={fontStyle === 'bold'}
                            onChange={(e) => setFontStyle(e.target.checked ? 'bold' : 'normal')}
                        />
                        <label>Bold</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={isItalic}
                            onChange={(e) => setIsItalic(e.target.checked)}
                        />
                        <label>Italic</label>
                    </div>

                    <h3>Font Theme</h3>
                    <select onChange={(e) => setFontStyle(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Verdana">Verdana</option>
                    </select>

                </div>
            )}

            {/* Flower Selection */}
            {contentType === 'flower' && (
                <div className="flower-tools">
                    <h3>Choose a Flower</h3>
                    <div className="options">
                        <button onClick={() => setFlower(flower1)}>Flower 1</button>
                        <button onClick={() => setFlower(flower2)}>Flower 2</button>
                    </div>
                </div>
            )}

            {/* Preview Section */}
            <h2>Preview</h2>
            <div className="preview">
                {shape && (
                    <div className="shape-container">
                        <img src={shapes[shape]} alt={shape} className="shape" />
                        {contentType === 'letter' && letter && (
                            <span
                                className="letter"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    fontWeight: fontStyle === 'bold' ? 'bold' : 'normal',
                                    fontStyle: isItalic ? 'italic' : 'normal',
                                    fontFamily: fontStyle, // Apply selected font family
                                }}
                            >
                                {letter}
                            </span>
                        )}
                        {contentType === 'flower' && flower && (
                            <img src={flower} alt="Flower" className="flower" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Customize;
