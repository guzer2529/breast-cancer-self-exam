const examSteps = [
    {
        title: "ขั้นตอนที่ 1: ตรวจดูหน้ากระจก",
        icon: "👀",
        instructionTitle: "วิธีการตรวจ",
        description: "ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม",
        voiceText: "ขั้นตอนที่หนึ่ง ตรวจดูหน้ากระจก ให้ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม ลักษณะปกติ คือ เต้านมทั้งสองข้างมีขนาดใกล้เคียงกัน ผิวหนังเรียบ หัวนมอยู่ในตำแหน่งเดิม อาการเตือนภัย คือ เต้านมข้างหนึ่งใหญ่กว่าปกติอย่างชัดเจน ผิวหนังเป็นคลื่นเหมือนเปลือกส้ม หัวนมบุ๋มเข้าไป",
        examples: [
            {
                title: "✅ ลักษณะปกติ",
                desc: "เต้านมทั้งสองข้างมีขนาดใกล้เคียงกัน ผิวหนังเรียบ หัวนมอยู่ในตำแหน่งเดิม",
                type: "normal"
            },
            {
                title: "⚠️ อาการเตือนภัย",
                desc: "เต้านมข้างหนึ่งใหญ่กว่าปกติอย่างชัดเจน ผิวหนังเป็นคลื่นเหมือนเปลือกส้ม หัวนมบุ๋มเข้าไป",
                type: "danger"
            }
        ],
        checks: [
            { text: "เต้านมทั้งสองข้างมีขนาดและรูปร่างใกล้เคียงกัน", risk: "high", riskText: "สูง" },
            { text: "ผิวหนังเต้านมเรียบ ไม่มีการเปลี่ยนแปลง ไม่เป็นคลื่น", risk: "high", riskText: "สูง" },
            { text: "หัวนมอยู่ในตำแหน่งปกติ ไม่บุ๋มเข้าไป", risk: "high", riskText: "สูง" },
            { text: "ไม่มีการบวม แดง หรือผื่นผิดปกติ", risk: "medium", riskText: "ปานกลาง" }
        ]
    },
    {
        title: "ขั้นตอนที่ 2: ตรวจดูท่ายกแขน",
        icon: "🙋‍♀️",
        instructionTitle: "วิธีการตรวจ",
        description: "ยกแขนทั้งสองข้างขึ้นเหนือศีรษะ สังเกตการเปลี่ยนแปลงของเต้านม",
        voiceText: "ขั้นตอนที่สอง ตรวจดูท่ายกแขน ให้ยกแขนทั้งสองข้างขึ้นเหนือศีรษะ สังเกตการเปลี่ยนแปลงของเต้านม การเคลื่อนไหวปกติ คือ เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติ ไม่มีการดึงผิวหนังผิดปกติ อาการผิดปกติ คือ เต้านมข้างหนึ่งไม่เคลื่อนไหวตามแขน มีการดึงผิวหนังเข้าหาข้างใน",
        examples: [
            {
                title: "✅ การเคลื่อนไหวปกติ",
                desc: "เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติ ไม่มีการดึงผิวหนังผิดปกติ",
                type: "normal"
            },
            {
                title: "⚠️ อาการผิดปกติ",
                desc: "เต้านมข้างหนึ่งไม่เคลื่อนไหวตามแขน มีการดึงผิวหนังเข้าหาข้างใน",
                type: "danger"
            }
        ],
        checks: [
            { text: "เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติเมื่อยกแขน", risk: "high", riskText: "สูง" },
            { text: "ไม่มีการดึงผิวหนังผิดปกติ", risk: "high", riskText: "สูง" },
            { text: "ไม่มีบริเวณที่ติดหรือไม่เคลื่อนไหวตามแขน", risk: "medium", riskText: "ปานกลาง" }
        ]
    },
    {
        title: "ขั้นตอนที่ 3: ตรวจคลำท่านอน",
        icon: "🤲",
        instructionTitle: "เทคนิคการคลำ",
        description: "นอนราบ ยกแขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ปลายนิ้ว 3 นิ้วคลำเป็นวงกลม",
        voiceText: "ขั้นตอนที่สาม ตรวจคลำท่านอน ให้นอนราบ ยกแขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ปลายนิ้วสามนิ้วคลำเป็นวงกลม วิธีการคลำ เริ่มจากด้านนอกเต้านม คลำเป็นวงกลมเล็กๆ เข้าหาหัวนม กดเบา ปานกลาง และแรง พื้นที่ที่ต้องตรวจ ได้แก่ เต้านมทั้งหมด บริเวณรักแร้ ใต้กระดูกไหปลาร้า และเหนือกระดูกไหปลาร้า สิ่งที่ต้องระวัง คือ พบก้อนแข็งหรือก้อนเนื้อผิดปกติ ความหนาผิดปกติของเนื้อเยื่อ",
        examples: [
            {
                title: "🔄 วิธีการคลำ",
                desc: "เริ่มจากด้านนอกเต้านม คลำเป็นวงกลมเล็กๆ เข้าหาหัวนม กดเบา-ปานกลาง-แรง",
                type: "normal"
            },
            {
                title: "🎯 พื้นที่ที่ต้องตรวจ",
                desc: "เต้านมทั้งหมด บริเวณรักแร้ ใต้กระดูกไหปลาร้า และเหนือกระดูกไหปลาร้า",
                type: "normal"
            },
            {
                title: "⚠️ สิ่งที่ต้องระวัง",
                desc: "พบก้อนแข็งหรือก้อนเนื้อผิดปกติ ความหนาผิดปกติของเนื้อเยื่อ",
                type: "danger"
            }
        ],
        checks: [
            { text: "ไม่พบก้อนแข็งหรือก้อนเนื้อผิดปกติ", risk: "high", riskText: "สูง" },
            { text: "ไม่มีความหนาผิดปกติของเนื้อเยื่อ", risk: "medium", riskText: "ปานกลาง" },
            { text: "บริเวณรักแร้ไม่มีก้อนบวม", risk: "high", riskText: "สูง" },
            { text: "ไม่มีความเจ็บปวดผิดปกติ", risk: "low", riskText: "ต่ำ" }
        ]
    },
    {
        title: "ขั้นตอนที่ 4: ตรวจหัวนม",
        icon: "🔍",
        instructionTitle: "วิธีการตรวจ",
        description: "ใช้นิ้วหัวแม่มือและนิ้วชี้ บีบหัวนมเบาๆ จากโคนไปปลาย",
        voiceText: "ขั้นตอนที่สี่ ตรวจหัวนม ให้ใช้นิ้วหัวแม่มือและนิ้วชี้ บีบหัวนมเบาๆ จากโคนไปปลาย ลักษณะปกติ คือ ไม่มีของเหลวออกจากหัวนม หัวนมไม่เจ็บ ไม่แสบ ผิวหนังรอบหัวนมปกติ อาการเตือนภัย คือ มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม หัวนมเจ็บ แสบ หรือคัน",
        examples: [
            {
                title: "✅ ลักษณะปกติ",
                desc: "ไม่มีของเหลวออกจากหัวนม หัวนมไม่เจ็บ ไม่แสบ ผิวหนังรอบหัวนมปกติ",
                type: "normal"
            },
            {
                title: "⚠️ อาการเตือนภัย",
                desc: "มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม หัวนมเจ็บ แสบ หรือคัน",
                type: "danger"
            }
        ],
        checks: [
            { text: "ไม่มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม", risk: "high", riskText: "สูง" },
            { text: "หัวนมไม่เจ็บ ไม่แสบ ไม่คัน", risk: "medium", riskText: "ปานกลาง" },
            { text: "ไม่มีแผล ตุ่ม หรือสะเก็ดที่หัวนม", risk: "medium", riskText: "ปานกลาง" }
        ]
    }
];

let currentStep = 0;
let answers = {};
let isVoiceEnabled = true;
let currentSpeech = null;
let speechSupported = false;
let isAudioPlaying = false;

// ตรวจสอบการรองรับเสียง
function checkSpeechSupport() {
    if ('speechSynthesis' in window) {
        speechSupported = true;
        if (speechSynthesis.getVoices().length === 0) {
            speechSynthesis.addEventListener('voiceschanged', () => {
                console.log('Voices loaded:', speechSynthesis.getVoices().length);
            });
        }
    } else {
        speechSupported = false;
        console.log('Speech synthesis not supported');
    }
}

// ฟังก์ชันเสียงที่ปรับปรุงแล้ว
function speakText(text, callback = null) {
    if (!isVoiceEnabled || !speechSupported) {
        console.log('Voice disabled or not supported');
        if (callback) callback();
        return;
    }
    
    speechSynthesis.cancel();
    
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        
        const voices = speechSynthesis.getVoices();
        const thaiVoice = voices.find(voice => voice.lang.includes('th')) || 
                         voices.find(voice => voice.lang.includes('TH'));
        
        if (thaiVoice) {
            utterance.voice = thaiVoice;
        }
        
        utterance.lang = 'th-TH';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 0.9;
        
        utterance.onstart = () => {
            console.log('Speech started');
            isAudioPlaying = true;
            updateAudioButton();
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.add('speaking');
        };
        
        utterance.onend = () => {
            console.log('Speech ended');
            isAudioPlaying = false;
            updateAudioButton();
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.remove('speaking');
            if (callback) callback();
        };
        
        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            isAudioPlaying = false;
            updateAudioButton();
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.remove('speaking');
            if (callback) callback();
        };
        
        currentSpeech = utterance;
        speechSynthesis.speak(utterance);
    }, 100);
}

// ฟังก์ชันเล่นเสียงขั้นตอน
function playStepAudio() {
    const step = examSteps[currentStep];
    if (step && step.voiceText) {
        if (isAudioPlaying) {
            speechSynthesis.cancel();
            isAudioPlaying = false;
            updateAudioButton();
        } else {
            speakText(step.voiceText);
        }
    }
}

// อัพเดทปุ่มเสียง
function updateAudioButton() {
    const audioBtn = document.querySelector('.play-audio-btn');
    if (audioBtn) {
        if (isAudioPlaying) {
            audioBtn.classList.add('playing');
            audioBtn.querySelector('.audio-text').textContent = 'หยุดเสียง';
        } else {
            audioBtn.classList.remove('playing');
            audioBtn.querySelector('.audio-text').textContent = 'ฟังคำแนะนำ';
        }
    }
}

// สร้าง ripple effect
function createRipple(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.className = 'btn-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// เพิ่ม event listeners สำหรับปุ่ม
function addButtonEffects() {
    document.querySelectorAll('.animated-button').forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

// Animation functions
function createFloatingAnimation() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 3; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 3 + 's';
        bubble.style.animationDuration = (4 + Math.random() * 2) + 's';
        container.appendChild(bubble);
        
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 8000);
    }
}

function animateExamples() {
    const exampleItems = document.querySelectorAll('.example-item');
    exampleItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
            item.style.animationDelay = (index * 0.2) + 's';
        }, index * 200);
    });
}

function animateCheckItems() {
    const checkItems = document.querySelectorAll('.check-item');
    checkItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
            item.style.animationDelay = (index * 0.1) + 's';
        }, (index * 150) + 600);
    });
}

function animateInstructionBox() {
    const instructionBox = document.querySelector('.instruction-box');
    if (instructionBox) {
        instructionBox.classList.remove('animate');
        setTimeout(() => {
            instructionBox.classList.add('animate');
        }, 200);
    }
}

function animateStepHeader() {
    const stepHeader = document.querySelector('.step-header');
    if (stepHeader) {
        stepHeader.classList.remove('animate');
        setTimeout(() => {
            stepHeader.classList.add('animate');
        }, 100);
    }
}

function animateProgressBar() {
    const progress = document.getElementById('progress');
    if (progress) {
        progress.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }
}

function startExam() {
    checkSpeechSupport();
    
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {};
    
    addVoiceControls();
    addButtonEffects();
    createFloatingAnimation();
    
    showStep(0);
}

function showStep(stepIndex) {
    const step = examSteps[stepIndex];
    const progress = ((stepIndex + 1) / examSteps.length) * 100;
    
    // หยุดเสียงที่กำลังเล่น
    speechSynthesis.cancel();
    isAudioPlaying = false;
    
    animateProgressBar();
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-step').textContent = stepIndex + 1;
    document.getElementById('step-icon').textContent = step.icon;
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('instruction-title').textContent = step.instructionTitle;
    document.getElementById('step-description').textContent = step.description;
    
    animateStepHeader();
    animateInstructionBox();
    
    // สร้าง Motion Graphics Demo
    const exampleBox = document.getElementById('example-box');
    exampleBox.innerHTML = '<h4>💡 ตัวอย่างการตรวจ</h4>';
    
    const motionContainer = document.createElement('div');
    motionContainer.className = 'motion-graphics-container';
    exampleBox.appendChild(motionContainer);
    
    const motionDemo = new MotionGraphicsDemo();
    motionDemo.createMotionDemo(stepIndex, motionContainer);
    
    setTimeout(() => {
        motionDemo.startAnimation(motionContainer);
    }, 500);
    
    step.examples.forEach(example => {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'example-item';
        exampleItem.innerHTML = `
            <div class="example-title ${example.type}-sign">${example.title}</div>
            <div class="example-desc">${example.desc}</div>
        `;
        exampleBox.appendChild(exampleItem);
    });
    
    setTimeout(() => {
        animateExamples();
    }, 800);
    
    const checklist = document.getElementById('checklist');
