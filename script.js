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
let isInitialized = false;

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
    
    // หยุดเสียงเฉพาะเมื่อจำเป็น
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
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
            isAudioPlaying = true;
            updateAudioButton();
            updateVoiceButton();
        };
        
        utterance.onend = () => {
            isAudioPlaying = false;
            updateAudioButton();
            updateVoiceButton();
            if (callback) callback();
        };
        
        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            isAudioPlaying = false;
            updateAudioButton();
            updateVoiceButton();
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
        const audioText = audioBtn.querySelector('.audio-text');
        const audioWaves = audioBtn.querySelector('.audio-waves');
        const audioIcon = audioBtn.querySelector('.audio-icon');
        
        if (isAudioPlaying) {
            audioBtn.classList.add('playing');
            if (audioText) audioText.textContent = 'หยุดเสียง';
            if (audioWaves) audioWaves.style.display = 'flex';
            if (audioIcon) audioIcon.style.display = 'none';
        } else {
            audioBtn.classList.remove('playing');
            if (audioText) audioText.textContent = 'ฟังคำแนะนำ';
            if (audioWaves) audioWaves.style.display = 'none';
            if (audioIcon) audioIcon.style.display = 'inline';
        }
    }
}

// อัพเดทปุ่มเสียงหลัก
function updateVoiceButton() {
    const voiceBtn = document.querySelector('.voice-btn');
    if (voiceBtn) {
        if (isAudioPlaying) {
            voiceBtn.classList.add('speaking');
        } else {
            voiceBtn.classList.remove('speaking');
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
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// เพิ่ม event listeners สำหรับปุ่ม (ครั้งเดียว)
function addButtonEffects() {
    if (isInitialized) return;
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.animated-button')) {
            createRipple(e, e.target.closest('.animated-button'));
        }
    });
    
    isInitialized = true;
}

// Animation functions (ลด setTimeout)
function createFloatingAnimation() {
    const container = document.querySelector('.container');
    if (!container) return;
    
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

// ใช้ requestAnimationFrame แทน setTimeout
function animateElements(elements, className, delay = 0) {
    elements.forEach((element, index) => {
        element.classList.remove(className);
        requestAnimationFrame(() => {
            setTimeout(() => {
                element.classList.add(className);
            }, delay + (index * 100));
        });
    });
}

function animateExamples() {
    const exampleItems = document.querySelectorAll('.example-item');
    animateElements(exampleItems, 'animate', 0);
}

function animateCheckItems() {
    const checkItems = document.querySelectorAll('.check-item');
    animateElements(checkItems, 'animate', 200);
}

function animateInstructionBox() {
    const instructionBox = document.querySelector('.instruction-box');
    if (instructionBox) {
        instructionBox.classList.remove('animate');
        requestAnimationFrame(() => {
            instructionBox.classList.add('animate');
        });
    }
}

function animateStepHeader() {
    const stepHeader = document.querySelector('.step-header');
    if (stepHeader) {
        stepHeader.classList.remove('animate');
        requestAnimationFrame(() => {
            stepHeader.classList.add('animate');
        });
    }
}

function animateProgressBar() {
    const progress = document.getElementById('progress');
    if (progress) {
        progress.style.transition = 'width 1s ease-out';
    }
}

function startExam() {
    checkSpeechSupport();
    
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {};
    currentStep = 0;
    
    initializeVoiceControls();
    addButtonEffects();
    createFloatingAnimation();
    
    showStep(0);
}

// ปรับปรุง showStep ให้ใช้ async/await
async function showStep(stepIndex) {
    const step = examSteps[stepIndex];
    const progress = ((stepIndex + 1) / examSteps.length) * 100;
    
    // หยุดเสียงเฉพาะเมื่อจำเป็น
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isAudioPlaying = false;
        updateAudioButton();
    }
    
    // อัพเดท UI
    animateProgressBar();
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-step').textContent = stepIndex + 1;
    document.getElementById('step-icon').textContent = step.icon;
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('instruction-title').textContent = step.instructionTitle;
    document.getElementById('step-description').textContent = step.description;
    
    // Animation แบบ sequential
    animateStepHeader();
    await new Promise(resolve => setTimeout(resolve, 100));
    
    animateInstructionBox();
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // สร้าง Motion Graphics Demo
    const exampleBox = document.getElementById('example-box');
    exampleBox.innerHTML = '<h4>💡 ตัวอย่างการตรวจ</h4>';
    
    const motionContainer = document.createElement('div');
    motionContainer.className = 'motion-graphics-container';
    exampleBox.appendChild(motionContainer);
    
    const motionDemo = new MotionGraphicsDemo();
    motionDemo.createMotionDemo(stepIndex, motionContainer);
    motionDemo.startAnimation(motionContainer);
    
    // เพิ่มตัวอย่าง
    step.examples.forEach(example => {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'example-item';
        exampleItem.innerHTML = `
            <div class="example-title ${example.type}-sign">${example.title}</div>
            <div class="example-desc">${example.desc}</div>
        `;
        exampleBox.appendChild(exampleItem);
    });
    
    await new Promise(resolve => setTimeout(resolve, 300));
    animateExamples();
    
    // สร้าง checklist
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = '';
    
    step.checks.forEach((check, index) => {
        const checkItem = document.createElement('div');
        checkItem.className = 'check-item';
        checkItem.id = `item-${stepIndex}-${index}`;
        
        const currentAnswer = answers[`${stepIndex}-${index}`];
        
        checkItem.innerHTML = `
            <div class="check-question">${check.text}</div>
            <div class="choice-buttons">
                <button class="choice-btn yes ${currentAnswer === 'yes' ? 'selected' : ''}" 
                        data-step="${stepIndex}" data-check="${index}" data-choice="yes">
                    ✓ ใช่
                </button>
                <button class="choice-btn no ${currentAnswer === 'no' ? 'selected' : ''}" 
                        data-step="${stepIndex}" data-check="${index}" data-choice="no">
                    ✗ ไม่ใช่
                </button>
            </div>
            <div class="risk-indicator risk-${check.risk}">
                ระดับความเสี่ยง: ${check.riskText}
            </div>
        `;
        
        if (currentAnswer === 'yes') {
            checkItem.classList.add('answered-yes');
        } else if (currentAnswer === 'no') {
            checkItem.classList.add('answered-no');
        }
        
        checklist.appendChild(checkItem);
    });
    
    await new Promise(resolve => setTimeout(resolve, 400));
    animateCheckItems();
    
    updateButtons();
    setupChoiceButtons();
}

// ใช้ event delegation แทนการเพิ่ม onclick
function setupChoiceButtons() {
    const checklist = document.getElementById('checklist');
    if (!checklist) return;
    
    // ลบ event listener เก่า
    checklist.removeEventListener('click', handleChoiceClick);
    // เพิ่ม event listener ใหม่
    checklist.addEventListener('click', handleChoiceClick);
}

function handleChoiceClick(event) {
    const button = event.target.closest('.choice-btn');
    if (!button) return;
    
    const stepIndex = parseInt(button.dataset.step);
    const checkIndex = parseInt(button.dataset.check);
    const choice = button.dataset.choice;
    
    selectChoice(stepIndex, checkIndex, choice);
}

// สร้างปุ่มเสียงครั้งเดียว
function initializeVoiceControls() {
    let voiceControls = document.querySelector('.voice-controls');
    
    if (!voiceControls) {
        voiceControls = document.createElement('div');
        voiceControls.className = 'voice-controls';
        voiceControls.innerHTML = `
            <button class="voice-btn" title="เปิด/ปิดเสียง">
                <span class="voice-icon">🔊</span>
            </button>
        `;
        document.body.appendChild(voiceControls);
        
        // เพิ่ม event listener ครั้งเดียว
        voiceControls.querySelector('.voice-btn').addEventListener('click', toggleVoice);
    }
    
    updateVoiceButtonState();
}

function updateVoiceButtonState() {
    const voiceBtn = document.querySelector('.voice-btn');
    const voiceIcon = document.querySelector('.voice-icon');
    
    if (voiceBtn && voiceIcon) {
        if (!speechSupported) {
            voiceBtn.disabled = true;
            voiceBtn.title = 'ไม่รองรับเสียง';
            voiceIcon.textContent = '🚫';
            voiceBtn.classList.add('disabled');
        } else {
            voiceBtn.disabled = false;
            voiceBtn.title = isVoiceEnabled ? 'ปิดเสียง' : 'เปิดเสียง';
            voiceIcon.textContent = isVoiceEnabled ? '🔊' : '🔇';
            voiceBtn.classList.remove('disabled');
        }
    }
}

function toggleVoice() {
    if (!speechSupported) return;
    
    isVoiceEnabled = !isVoiceEnabled;
    
    if (!isVoiceEnabled && speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isAudioPlaying = false;
        updateAudioButton();
    }
    
    updateVoiceButtonState();
    
    if (isVoiceEnabled) {
        speakText("เปิดเสียงแล้ว");
    }
}

function selectChoice(stepIndex, checkIndex, choice) {
    const answerKey = `${stepIndex}-${checkIndex}`;
    answers[answerKey] = choice;
    
    const checkItem = document.getElementById(`item-${stepIndex}-${checkIndex}`);
    if (!checkItem) return;
    
    const yesBtn = checkItem.querySelector('.choice-btn.yes');
    const noBtn = checkItem.querySelector('.choice-btn.no');
    
    // รีเซ็ตสถานะ
    checkItem.classList.remove('answered-yes', 'answered-no');
    yesBtn.classList.remove('selected');
    noBtn.classList.remove('selected');
    
    // ตั้งสถานะใหม่
    if (choice === 'yes') {
        yesBtn.classList.add('selected');
        checkItem.classList.add('answered-yes');
    } else {
        noBtn.classList.add('selected');
        checkItem.classList.add('answered-no');
    }
    
    // Animation feedback
    checkItem.style.transform = 'scale(1.02)';
    requestAnimationFrame(() => {
        setTimeout(() => {
            checkItem.style.transform = 'scale(1)';
        }, 200);
    });
}

function nextStep() {
    if (currentStep < examSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        showResult();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) prevBtn.disabled = currentStep === 0;
    if (nextBtn) nextBtn.textContent = currentStep === examSteps.length - 1 ? 'ดูผลลัพธ์' : 'ถัดไป';
}

function showResult() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isAudioPlaying = false;
    }
    
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    const resultContent = document.getElementById('result-content');
    
    let highRiskCount = 0;
    let mediumRiskCount = 0;
    let lowRiskCount = 0;
    
    Object.keys(answers).forEach(answerKey => {
        if (answers[answerKey] === 'no') {
            const [stepIndex, checkIndex] = answerKey.split('-').map(Number);
            const riskLevel = examSteps[stepIndex].checks[checkIndex].risk;
            
            if (riskLevel === 'high') highRiskCount++;
            else if (riskLevel === 'medium') mediumRiskCount++;
            else lowRiskCount++;
        }
    });
    
    const totalRiskCount = highRiskCount + mediumRiskCount + lowRiskCount;
    
    if (highRiskCount > 0 || totalRiskCount >= 4) {
        resultContent.innerHTML = `
            <div class="result-box risk">
                <h3>🚨 คุณมีความเสี่ยงสูง</h3>
                <p>จากการตรวจพบอาการที่ต้องได้รับการตรวจสอบจากแพทย์ทันที</p>
                <p><strong>พบความผิดปกติ:</strong></p>
                <p>• ความเสี่ยงสูง: ${highRiskCount} รายการ</p>
                <p>• ความเสี่ยงปานกลาง: ${mediumRiskCount} รายการ</p>
                <p>• ความเสี่ยงต่ำ: ${lowRiskCount} รายการ</p>
                <div class="contact-info">
                    <p><strong>🏥 ติดต่อทันที: โรงพยาบาลมะเร็งอุบลราชธานี</strong></p>
                    <p>📞 โทร: 045-317133, 045-317134</p>
                    <p>📍 405 ถนนคลังอาวุธ ตำบลขามใหญ่ อำเภอเมือง จังหวัดอุบลราชธานี 34000</p>
                    <p>🕐 เวลาทำการ: จันทร์-ศุกร์ 08:00-16:30</p>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            speakText("คุณมีความเสี่ยงสูง ควรติดต่อแพทย์ทันที");
        }, 500);
        
    } else if (totalRiskCount > 0) {
        resultContent.innerHTML = `
            <div class="result-box warning">
                <h3>⚠️ ควรติดตามอาการ</h3>
                <p>พบความผิดปกติเล็กน้อย ${totalRiskCount} รายการ</p>
                <p><strong>แนะนำ:</strong></p>
                <p>• สังเกตอาการต่อไปอีก 1-2 สัปดาห์</p>
                <p>• หากอาการไม่ดีขึ้น ควรพบแพทย์</p>
                <p>• ตรวจเต้านมด้วยตัวเองเป็นประจำ</p>
            </div>
        `;
        
        setTimeout(() => {
            speakText("ควรติดตามอาการ พบความผิดปกติเล็กน้อย แนะนำให้สังเกตอาการต่อไป");
        }, 500);
        
    } else {
        resultContent.innerHTML = `
            <div class="result-box safe">
                <h3>✅ ผลการตรวจปกติ</h3>
                <p>ไม่พบอาการที่น่าเป็นห่วง แต่ควรตรวจเป็นประจำ</p>
                <p><strong>📅 แนะนำการตรวจต่อไป:</strong></p>
                <p>• ตรวจเต้านมด้วยตัวเองทุกเดือน</p>
                <p>• ตรวจกับแพทย์ทุก 1-3 ปี (อายุ 20-39 ปี)</p>
                <p>• ตรวจกับแพทย์ทุกปี (อายุ 40+ ปี)</p>
                <p>• Mammogram เมื่ออายุ 40 ปีขึ้นไป</p>
            </div>
        `;
        
        setTimeout(() => {
            speakText("ผลการตรวจปกติ ไม่พบอาการที่น่าเป็นห่วง แต่ควรตรวจเป็นประจำทุกเดือน");
        }, 500);
    }
    
    // Animation สำหรับผลลัพธ์
    const resultBox = document.querySelector('.result-box');
    if (resultBox) {
        resultBox.style.opacity = '0';
        resultBox.style.transform = 'translateY(30px) scale(0.95)';
        requestAnimationFrame(() => {
            setTimeout(() => {
                resultBox.style.transition = 'all 0.6s ease';
                resultBox.style.opacity = '1';
                resultBox.style.transform = 'translateY(0) scale(1)';
            }, 100);
        });
    }
}

function restartExam() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isAudioPlaying = false;
    }
    
    currentStep = 0;
    answers = {};
    
    // ลบปุ่มเสียง
    const voiceControls = document.querySelector('.voice-controls');
    if (voiceControls) {
        voiceControls.remove();
    }
    
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

function showTips() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('tips-screen').classList.add('active');
}

function backToResult() {
    document.getElementById('tips-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
}

// Motion Graphics Demo Class
class MotionGraphicsDemo {
    constructor() {
        this.currentDemo = null;
        this.isPlaying = false;
    }

    createMotionDemo(stepIndex, container) {
        container.innerHTML = '';
        
        switch(stepIndex) {
            case 0:
                this.createVisualExamDemo(container);
                break;
            case 1:
                this.createArmRaiseDemo(container);
                break;
            case 2:
                this.createPalpationDemo(container);
                break;
            case 3:
                this.createNippleExamDemo(container);
                break;
        }
    }

    createVisualExamDemo(container) {
        container.innerHTML = `
            <div class="motion-demo">
                <div class="visual-exam-demo">
                    <div class="mirror-frame">
                        <div class="body-silhouette">
                            <div class="breast-area breast-left"></div>
                            <div class="breast-area breast-right"></div>
                            <div class="normal-indicator" style="top: 25px; left: 20px;"></div>
                            <div class="normal-indicator" style="top: 25px; right: 20px;"></div>
                        </div>
                    </div>
                </div>
                <div class="instruction-text">สังเกตรูปร่างและผิวหนังเต้านม</div>
                <div class="time-comparison">⏱️ 30 วินาที</div>
            </div>
        `;
    }

    createArmRaiseDemo(container) {
        container.innerHTML = `
            <div class="motion-demo">
                <div class="arm-raise-demo">
                    <div class="figure">
                        <div class="figure-head"></div>
                        <div class="figure-body">
                            <div class="breast-area breast-left"></div>
                            <div class="breast-area breast-right"></div>
                        </div>
                        <div class="arm arm-left"></div>
                        <div class="arm arm-right"></div>
                        <div class="normal-indicator" style="top: 70px; left: 25px;"></div>
                        <div class="normal-indicator" style="top: 70px; right: 25px;"></div>
                    </div>
                </div>
                <div class="instruction-text">ยกแขนขึ้นสังเกตการเปลี่ยนแปลง</div>
                <div class="time-comparison">⏱️ 30 วินาที</div>
            </div>
        `;
    }

    createPalpationDemo(container) {
        container.innerHTML = `
            <div class="motion-demo">
                <div class="palpation-demo">
                    <div class="breast-outline">
                        <div class="palpation-hand"></div>
                        <div class="palpation-points point-1"></div>
                        <div class="palpation-points point-2"></div>
                        <div class="palpation-points point-3"></div>
                        <div class="palpation-points point-4"></div>
                        <div class="normal-indicator" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                    </div>
                </div>
                <div class="instruction-text">คลำเป็นวงกลมครอบคลุมทั้งเต้านม</div>
                <div class="time-comparison">⏱️ 2 นาที</div>
            </div>
        `;
    }

    createNippleExamDemo(container) {
        container.innerHTML = `
            <div class="motion-demo">
                <div class="nipple-exam-demo">
                    <div class="nipple-area">
                        <div class="nipple-center"></div>
                        <div class="examination-fingers"></div>
                        <div class="normal-indicator" style="top: -10px; right: -10px;"></div>
                    </div>
                </div>
                <div class="instruction-text">บีบหัวนมเบาๆ ตรวจสอบการมีของเหลว</div>
                <div class="time-comparison">⏱️ 30 วินาที</div>
            </div>
        `;
    }

    startAnimation(container) {
        this.isPlaying = true;
        container.classList.add('playing');
    }

    stopAnimation(container) {
        this.isPlaying = false;
        container.classList.remove('playing');
    }
}

// เรียกใช้เมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', function() {
    checkSpeechSupport();
    addButtonEffects();
    console.log('Page loaded, speech support:', speechSupported);
});
