:root {
    --bg: #050505;
    --accent: #121212;
    --gold: #d4af37;
    --white: #ffffff;
    --leaf: #1a2609;
    --petal-light: #fef9f5;
    --petal-blush: #f5dcd2;
    --petal-rose: #ffc0cb;
    --petal-deep: #f5a9b3;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: radial-gradient(circle at center, var(--accent) 0%, var(--bg) 100%);
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.vignette {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 0;
    pointer-events: none;
    animation: vignetteGlow 4s ease-in-out infinite;
}

@keyframes vignetteGlow {
    0%, 100% { background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%); }
    50% { background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%); }
}

.spotlight {
    position: fixed;
    width: 80vw; 
    height: 80vh;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%);
    z-index: 1; 
    pointer-events: none;
    filter: blur(60px);
    animation: spotlightPulse 3s ease-in-out infinite;
}

@keyframes spotlightPulse {
    0%, 100% { 
        background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%);
        filter: blur(60px);
    }
    50% { 
        background: radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%);
        filter: blur(50px);
    }
}

#sparkle-canvas {
    position: fixed;
    inset: 0;
    z-index: 5;
    pointer-events: none;
}

/* --- LILY ARCHITECTURE --- */
.bouquet-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1500px;
    z-index: 10;
    animation: bouquetEntrance 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes bouquetEntrance {
    0% {
        opacity: 0;
        transform: scale(0.3) translateY(100px) rotateX(45deg);
    }
    60% {
        opacity: 1;
        transform: scale(1.1) translateY(-10px) rotateX(0deg);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0) rotateX(0deg);
    }
}

.grand-bouquet {
    position: relative;
    width: 450px;
    height: 450px;
    animation: gentleSway 8s ease-in-out infinite, bouquetGlow 4s ease-in-out infinite;
    filter: drop-shadow(0 25px 80px rgba(212, 175, 55, 0.2));
}

@keyframes bouquetGlow {
    0%, 100% { filter: drop-shadow(0 25px 80px rgba(212, 175, 55, 0.2)); }
    50% { filter: drop-shadow(0 30px 100px rgba(212, 175, 55, 0.35)); }
}

.lily-system { 
    position: absolute; 
    bottom: 80px; 
    left: 50%; 
    transform-origin: bottom center;
}

/* Positioning 6 Lilies */
.center { transform: translateX(-50%) scale(1.4); z-index: 30; }
.left-1 { transform: translateX(-160px) rotate(-35deg) scale(1.1); z-index: 20; }
.right-1 { transform: translateX(40px) rotate(35deg) scale(1.1); z-index: 20; }
.back-high { transform: translateX(-50%) translateY(-70px) scale(0.9); z-index: 10; opacity: 0.8; }
.tuck-left { transform: translateX(-240px) translateY(40px) rotate(-50deg) scale(0.8); z-index: 15; }
.tuck-right { transform: translateX(120px) translateY(40px) rotate(50deg) scale(0.8); z-index: 15; }

.lily-head { 
    position: relative; 
    width: 100px; 
    height: 100px; 
    transform-style: preserve-3d;
    filter: drop-shadow(0 12px 40px rgba(255, 192, 203, 0.5));
    animation: headGlow 2.5s ease-in-out infinite;
}

@keyframes headGlow {
    0%, 100% { filter: drop-shadow(0 12px 40px rgba(255, 192, 203, 0.5)); }
    50% { filter: drop-shadow(0 15px 50px rgba(255, 192, 203, 0.7)); }
}

.lily-head.small { transform: scale(0.7); }

.petal-layer {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.lily-petal {
    position: absolute;
    bottom: 50%; 
    left: 50%;
    width: 56px; 
    height: 165px;
    background: linear-gradient(
        135deg,
        var(--petal-light) 0%,
        var(--petal-blush) 40%,
        var(--petal-rose) 75%,
        var(--petal-deep) 100%
    );
    border-radius: 50% 50% 30% 20% / 70% 70% 30% 20%;
    transform-origin: bottom center;
    clip-path: polygon(45% 0%, 100% 32%, 88% 100%, 12% 100%, 0% 32%);
    opacity: 0;
    box-shadow: 
        inset -12px 8px 20px rgba(255, 255, 255, 0.6),
        inset 8px -8px 20px rgba(220, 100, 140, 0.25),
        0 15px 40px rgba(255, 192, 203, 0.4),
        0 0 40px rgba(212, 175, 55, 0.2),
        0 0 80px rgba(255, 192, 203, 0.15);
    animation: lilyBloom 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
               petalGlow 3.5s ease-in-out infinite,
               petalShimmer 2.8s ease-in-out infinite,
               petalFlutter 2s ease-in-out infinite;
    filter: saturate(1.3) brightness(1.08) hue-rotate(2deg);
}

/* Petal Orientations */
.lp-1 { 
    transform: translateX(-50%) rotateY(0deg) rotateX(-30deg); 
    animation-delay: 0.1s, 1.2s, 0.8s, 0.3s;
}
.lp-2 { 
    transform: translateX(-50%) rotateY(60deg) rotateX(-30deg); 
    animation-delay: 0.2s, 1.4s, 1.1s, 0.5s;
}
.lp-3 { 
    transform: translateX(-50%) rotateY(120deg) rotateX(-30deg); 
    animation-delay: 0.3s, 1.6s, 1.4s, 0.7s;
}
.lp-4 { 
    transform: translateX(-50%) rotateY(180deg) rotateX(-30deg); 
    animation-delay: 0.4s, 1.8s, 1.7s, 0.9s;
}
.lp-5 { 
    transform: translateX(-50%) rotateY(240deg) rotateX(-30deg); 
    animation-delay: 0.5s, 2s, 2s, 1.1s;
}
.lp-6 { 
    transform: translateX(-50%) rotateY(300deg) rotateX(-30deg); 
    opacity: 0.4;
    animation-delay: 0.6s, 2.2s, 2.3s, 1.3s;
}

@keyframes lilyBloom {
    0% { 
        transform: translateX(-50%) rotateY(inherit) rotateX(-120deg) scale(0.05); 
        opacity: 0; 
    }
    20% {
        transform: translateX(-50%) rotateY(inherit) rotateX(-80deg) scale(0.5);
        opacity: 0.8;
    }
    50% {
        transform: translateX(-50%) rotateY(inherit) rotateX(-50deg) scale(1.15);
        opacity: 1;
    }
    75% {
        transform: translateX(-50%) rotateY(inherit) rotateX(-35deg) scale(1.05);
        opacity: 1;
    }
    100% { 
        transform: translateX(-50%) rotateY(inherit) rotateX(-30deg) scale(1); 
        opacity: 1;
    }
}

@keyframes petalGlow {
    0%, 100% { 
        box-shadow: 
            inset -12px 8px 20px rgba(255, 255, 255, 0.6),
            inset 8px -8px 20px rgba(220, 100, 140, 0.25),
            0 15px 40px rgba(255, 192, 203, 0.4),
            0 0 40px rgba(212, 175, 55, 0.2),
            0 0 80px rgba(255, 192, 203, 0.15);
        filter: saturate(1.3) brightness(1.08) hue-rotate(2deg);
    }
    50% { 
        box-shadow: 
            inset -12px 8px 25px rgba(255, 255, 255, 0.8),
            inset 8px -8px 25px rgba(220, 100, 140, 0.35),
            0 20px 50px rgba(255, 192, 203, 0.6),
            0 0 60px rgba(212, 175, 55, 0.4),
            0 0 120px rgba(255, 192, 203, 0.3);
        filter: saturate(1.5) brightness(1.2) hue-rotate(4deg);
    }
}

@keyframes petalShimmer {
    0%, 100% {
        background: linear-gradient(
            135deg,
            var(--petal-light) 0%,
            var(--petal-blush) 40%,
            var(--petal-rose) 75%,
            var(--petal-deep) 100%
        );
    }
    25% {
        background: linear-gradient(
            135deg,
            #ffffff 0%,
            #fce6e1 40%,
            #ffe0e6 75%,
            #ffc9d1 100%
        );
    }
    50% {
        background: linear-gradient(
            135deg,
            #fffbf8 0%,
            #f5dcd2 40%,
            #ffc0cb 75%,
            #f5a9b3 100%
        );
    }
    75% {
        background: linear-gradient(
            135deg,
            #fff5f0 0%,
            #ffd4ce 40%,
            #ffc9d1 75%,
            #ffb3c0 100%
        );
    }
}

@keyframes petalFlutter {
    0%, 100% { 
        transform: translateX(inherit) rotateZ(0deg);
    }
    25% { 
        transform: translateX(inherit) rotateZ(1.5deg);
    }
    50% { 
        transform: translateX(inherit) rotateZ(-1.5deg);
    }
    75% { 
        transform: translateX(inherit) rotateZ(1deg);
    }
}

.stamen-group { 
    position: absolute; 
    bottom: 40%; 
    left: 50%; 
    transform: translateX(-50%); 
    z-index: 25;
}

.stamen {
    width: 3px; 
    height: 58px; 
    background: linear-gradient(to top, var(--gold), #fff8d7, var(--gold));
    position: absolute; 
    bottom: 0; 
    transform-origin: bottom center;
    border-radius: 50%;
    opacity: 0; 
    animation: stamenAppear 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
               stamenGlow 2s ease-in-out infinite,
               stamenWave 1.5s ease-in-out infinite;
    box-shadow: 
        0 0 15px var(--gold),
        0 0 35px rgba(212, 175, 55, 0.6),
        0 0 60px rgba(255, 255, 200, 0.3);
}

.s1 { 
    transform: rotate(25deg); 
    animation-delay: 0.8s, 2s, 1.5s;
}
.s2 { 
    transform: rotate(-25deg); 
    animation-delay: 0.95s, 2.2s, 1.7s;
}
.s3 { 
    transform: rotate(0deg); 
    height: 70px;
    animation-delay: 1.1s, 2.4s, 1.9s;
}

@keyframes stamenAppear {
    0% { 
        opacity: 0;
        transform: rotate(inherit) scaleY(0) scaleX(0.3);
    }
    60% {
        opacity: 1.3;
        transform: rotate(inherit) scaleY(1.1) scaleX(1.1);
    }
    100% { 
        opacity: 1;
        transform: rotate(inherit) scaleY(1) scaleX(1);
    }
}

@keyframes stamenGlow {
    0%, 100% {
        box-shadow: 
            0 0 15px var(--gold),
            0 0 35px rgba(212, 175, 55, 0.6),
            0 0 60px rgba(255, 255, 200, 0.3);
        filter: brightness(1);
    }
    50% {
        box-shadow: 
            0 0 28px var(--gold),
            0 0 55px rgba(212, 175, 55, 1),
            0 0 100px rgba(255, 255, 200, 0.6);
        filter: brightness(1.4);
    }
}

@keyframes stamenWave {
    0%, 100% { transform: rotate(inherit) scaleX(1); }
    50% { transform: rotate(inherit) scaleX(1.15); }
}

.stem {
    position: absolute; 
    bottom: -200px; 
    left: 50%;
    width: 6px; 
    height: 210px; 
    background: linear-gradient(to bottom, var(--leaf), #050b00);
    transform: translateX(-50%); 
    border-radius: 5px;
    box-shadow: inset -2px 0 4px rgba(255, 255, 255, 0.08);
    animation: stemGrow 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
}

@keyframes stemGrow {
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 210px;
    }
}

.foliage {
    position: absolute; 
    background: linear-gradient(135deg, var(--leaf) 0%, #080c01 100%); 
    width: 160px; 
    height: 50px;
    border-radius: 100% 0%; 
    bottom: 40px; 
    left: 50%; 
    opacity: 0.8;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    animation: foliageAppear 1.8s ease-out forwards;
}

@keyframes foliageAppear {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 0.8;
        transform: scale(1);
    }
}

.f1 { 
    transform: translateX(-120%) rotate(-30deg); 
    animation-delay: 0.4s;
}
.f2 { 
    transform: translateX(20%) rotate(210deg); 
    animation-delay: 0.6s;
}
.f3 { 
    transform: translateX(-50%) rotate(90deg) scale(1.5); 
    bottom: 10px;
    animation-delay: 0.8s;
}

@keyframes gentleSway { 
    0%, 100% { transform: rotate(-1.5deg); } 
    50% { transform: rotate(1.5deg); } 
}

/* --- UI --- */
.ui-layer {
    margin-top: 50px;
    text-align: center;
    animation: uiLayerFade 1.2s ease-out 0.8s forwards;
    opacity: 0;
}

@keyframes uiLayerFade {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.main-title { 
    font-family: 'Playfair Display', serif; 
    font-size: 2.8rem; 
    color: var(--gold); 
    margin-bottom: 8px; 
    text-shadow: 0 3px 15px rgba(212, 175, 55, 0.4);
    animation: titleGlow 2s ease-in-out infinite;
}

@keyframes titleGlow {
    0%, 100% { 
        text-shadow: 0 3px 15px rgba(212, 175, 55, 0.4);
    }
    50% { 
        text-shadow: 0 4px 25px rgba(212, 175, 55, 0.7);
    }
}

.sub-title { 
    font-weight: 200; 
    letter-spacing: 4px; 
    opacity: 0.65; 
    font-size: 0.85rem; 
    text-transform: uppercase;
    margin-bottom: 30px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    animation: subtitlePulse 2.5s ease-in-out infinite;
}

@keyframes subtitlePulse {
    0%, 100% { opacity: 0.65; }
    50% { opacity: 0.9; }
}

.bloom-trigger {
    display: inline-block;
    margin-top: 0; 
    padding: 16px 45px; 
    background: transparent;
    border: 2px solid var(--gold); 
    color: var(--gold); 
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px; 
    text-transform: uppercase; 
    cursor: pointer; 
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-weight: 600;
    animation: buttonPulse 2s ease-in-out infinite 1.5s;
}

@keyframes buttonPulse {
    0%, 100% {
        box-shadow: 0 0 30px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.1);
        transform: scale(1);
    }
    50% {
        box-shadow: 0 0 50px rgba(212, 175, 55, 0.7), inset 0 0 30px rgba(212, 175, 55, 0.2);
        transform: scale(1.02);
    }
}

.bloom-trigger:hover { 
    background: var(--gold); 
    color: #000; 
    box-shadow: 0 0 80px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3);
    transform: translateY(-4px) scale(1.05);
    animation: none;
}

.bloom-trigger:active {
    transform: translateY(-1px) scale(0.98);
}

/* --- CARD --- */
.stage { 
    position: absolute; 
    opacity: 0; 
    pointer-events: none; 
    transition: opacity 2s ease; 
}

.stage.active { 
    opacity: 1; 
    pointer-events: all; 
}

.luxury-card { 
    background: linear-gradient(135deg, #fffdfb 0%, #fef8f5 100%); 
    padding: 12px; 
    max-width: 520px; 
    width: 90%; 
    box-shadow: 0 50px 120px rgba(0, 0, 0, 0.9), 0 0 50px rgba(212, 175, 55, 0.15); 
    border-radius: 2px;
    animation: cardEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes cardEntrance {
    0% {
        opacity: 0;
        transform: scale(0.8) translateY(50px) rotateY(30deg);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0) rotateY(0deg);
    }
}

.card-content { 
    border: 1px solid #e8dcc8; 
    padding: 70px 50px; 
    text-align: center; 
    color: #2c2c2c; 
}

.wax-seal {
    width: 70px; 
    height: 70px; 
    background: linear-gradient(135deg, #a82e3e 0%, #7a1f2e 100%); 
    border-radius: 50%; 
    margin: -100px auto 40px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    color: white; 
    font-size: 2.2rem;
    box-shadow: 0 15px 35px rgba(156, 42, 56, 0.5), inset -3px -3px 8px rgba(0, 0, 0, 0.4);
    animation: sealPulse 2s ease-in-out infinite 0.5s;
}

@keyframes sealPulse {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 15px 35px rgba(156, 42, 56, 0.5), inset -3px -3px 8px rgba(0, 0, 0, 0.4);
    }
    50% { 
        transform: scale(1.08);
        box-shadow: 0 20px 50px rgba(156, 42, 56, 0.7), inset -3px -3px 8px rgba(0, 0, 0, 0.5);
    }
}

.script-name { 
    font-family: 'Dancing Script', cursive; 
    font-size: 3.5rem; 
    color: #8b5a5a; 
    font-weight: 700;
}

.ornament { 
    color: var(--gold); 
    margin: 25px 0; 
    font-size: 1.8rem; 
    opacity: 0.85;
    animation: ornamentSpin 3s ease-in-out infinite;
}

@keyframes ornamentSpin {
    0%, 100% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(180deg) scale(1.1); }
}

.romantic-text { 
    line-height: 1.9; 
    color: #4a4a4a; 
    margin-bottom: 45px; 
    font-size: 1rem; 
    font-weight: 300;
}

.gift-button { 
    display: block; 
    text-decoration: none; 
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); 
    padding: 35px 30px; 
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
    margin: 30px 0;
    border: 1px solid #333;
}

.gift-button:hover { 
    transform: translateY(-10px);
    background: linear-gradient(135deg, #2a2a2a 0%, #000 100%); 
    box-shadow: 0 30px 60px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2);
}

.btn-top { 
    display: block; 
    color: var(--gold); 
    font-weight: 700; 
    font-size: 1.3rem; 
    letter-spacing: 1px;
    margin-bottom: 8px;
}

.btn-bottom { 
    color: #888; 
    font-size: 0.75rem; 
    text-transform: uppercase; 
    letter-spacing: 1.5px; 
    display: block; 
    font-weight: 500;
}

.signature-block {
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid #e0d5c7;
}

.signature-block p {
    color: #6a6a6a;
    font-size: 0.95rem;
    margin: 5px 0;
}

.sig-name { 
    font-family: 'Dancing Script', cursive; 
    font-size: 2.2rem; 
    color: var(--gold); 
    margin-top: 8px !important; 
    font-weight: 700;
}

@keyframes fadeIn { to { opacity: 1; } }
