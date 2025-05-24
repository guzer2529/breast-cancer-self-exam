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
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.add('speaking');
        };
        
        utterance.onend = () => {
            console.log('Speech ended');
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.remove('speaking');
            if (callback) callback();
        };
        
        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            const voiceBtn = document.querySelector('.voice-btn');
            if (voiceBtn) voiceBtn.classList.remove('speaking');
            if (callback) callback();
        };
        
        currentSpeech = utterance;
        speechSynthesis.speak(utterance);
    }, 100);
}

// Animation functions
function createFloatingAnimation() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 3 + 's';
        bubble.style.animationDuration = (3 + Math.random() * 2) + 's';
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
        progress.style.transition = 'width 1s ease-in-out';
    }
}

// เพิ่มฟังก์ชันสำหรับเพิ่ม event listener ให้หัวข้อ
function addStepTitleVoiceListener() {
    const stepTitle = document.getElementById('step-title');
    if (stepTitle) {
        stepTitle.style.cursor = 'pointer';
        stepTitle.style.userSelect = 'none';
        stepTitle.title = 'คลิกเพื่อฟังเสียงแนะนำ';
        
        // ลบ event listener เก่า
        stepTitle.replaceWith(stepTitle.cloneNode(true));
        const newStepTitle = document.getElementById('step-title');
        
        newStepTitle.addEventListener('click', () => {
            const step = examSteps[currentStep];
            if (step && step.voiceText) {
                speakText(step.voiceText);
            }
        });
        
        // เพิ่ม visual feedback
        newStepTitle.addEventListener('mouseenter', () => {
            newStepTitle.style.color = '#ff6b9d';
            newStepTitle.style.transform = 'scale(1.05)';
        });
        
        newStepTitle.addEventListener('mouseleave', () => {
            newStepTitle.style.color = '#2c3e50';
            newStepTitle.style.transform = 'scale(1)';
        });
    }
}

function startExam() {
    checkSpeechSupport();
    
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {};
    
    addVoiceControls();
    createFloatingAnimation();
    
    showStep(0);
}

function showStep(stepIndex) {
    const step = examSteps[stepIndex];
    const progress = ((stepIndex + 1) / examSteps.length) * 100;
    
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
                        onclick="selectChoice(${stepIndex}, ${index}, 'yes')">
                    ✓ ใช่
                </button>
                <button class="choice-btn no ${currentAnswer === 'no' ? 'selected' : ''}" 
                        onclick="selectChoice(${stepIndex}, ${index}, 'no')">
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
    
    setTimeout(() => {
        animateCheckItems();
    }, 1000);
    
    updateButtons();
    
    // เพิ่ม voice listener ให้หัวข้อ
    setTimeout(() => {
        addStepTitleVoiceListener();
    }, 500);
    
    setTimeout(() => {
        createFloatingAnimation();
    }, 2000);
}

function addVoiceControls() {
    const existingControls = document.querySelector('.voice-controls');
    if (existingControls) {
        existingControls.remove();
    }
    
    const voiceControls = document.createElement('div');
    voiceControls.className = 'voice-controls';
    
    const statusText = speechSupported ? 
        (isVoiceEnabled ? 'ปิดเสียง' : 'เปิดเสียง') : 
        'ไม่รองรับเสียง';
    
    voiceControls.innerHTML = `
        <button class="voice-btn ${!speechSupported ? 'disabled' : ''}" 
                onclick="toggleVoice()" 
                title="${statusText}"
                ${!speechSupported ? 'disabled' : ''}>
            ${speechSupported ? (isVoiceEnabled ? '🔊' : '🔇') : '🚫'}
        </button>
    `;
    
    document.body.appendChild(voiceControls);
}

function toggleVoice() {
    if (!speechSupported) return;
    
    isVoiceEnabled = !isVoiceEnabled;
    
    if (!isVoiceEnabled) {
        speechSynthesis.cancel();
    }
    
    const voiceBtn = document.querySelector('.voice-btn');
    if (voiceBtn) {
        voiceBtn.innerHTML = isVoiceEnabled ? '🔊' : '🔇';
        voiceBtn.title = isVoiceEnabled ? 'ปิดเสียง' : 'เปิดเสียง';
        voiceBtn.classList.remove('speaking');
    }
    
    if (isVoiceEnabled) {
        speakText("เปิดเสียงแล้ว");
    }
}

// ปรับปรุงฟังก์ชัน selectChoice - ลบเสียงออก
function selectChoice(stepIndex, checkIndex, choice) {
    const answerKey = `${stepIndex}-${checkIndex}`;
    answers[answerKey] = choice;
    
    const checkItem = document.getElementById(`item-${stepIndex}-${checkIndex}`);
    const yesBtn = checkItem.querySelector('.choice-btn.yes');
    const noBtn = checkItem.querySelector('.choice-btn.no');
    
    checkItem.classList.remove('answered-yes', 'answered-no');
    yesBtn.classList.remove('selected');
    noBtn.classList.remove('selected');
    
    if (choice === 'yes') {
        yesBtn.classList.add('selected');
        checkItem.classList.add('answered-yes');
        // ลบเสียง speakText("เลือกใช่");
    } else {
        noBtn.classList.add('selected');
        checkItem.classList.add('answered-no');
        // ลบเสียง speakText("เลือกไม่ใช่");
    }
    
    // เพิ่ม animation เมื่อเลือก
    checkItem.style.transform = 'scale(1.02)';
    setTimeout(() => {
        checkItem.style.transform = 'scale(1)';
    }, 200);
}

function nextStep() {
    speechSynthesis.cancel(); // หยุดเสียงเมื่อเปลี่ยนหน้า
    
    if (currentStep < examSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        showResult();
    }
}

function prevStep() {
    speechSynthesis.cancel(); // หยุดเสียงเมื่อเปลี่ยนหน้า
    
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === examSteps.length - 1 ? 'ดูผลลัพธ์' : 'ถัดไป';
}

function showResult() {
    speechSynthesis.cancel();
    
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
                    <p><strong>⚡ สายด่วนฉุกเฉิน: 1669</strong></p>
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
    
    const resultBox = document.querySelector('.result-box');
    if (resultBox) {
        resultBox.style.opacity = '0';
        resultBox.style.transform = 'translateY(30px)';
        setTimeout(() => {
            resultBox.style.transition = 'all 0.6s ease';
            resultBox.style.opacity = '1';
            resultBox.style.transform = 'translateY(0)';
        }, 100);
    }
}

function restartExam() {
    speechSynthesis.cancel();
    currentStep = 0;
    answers = {};
    
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

function showComparisonInWelcome() {
    const welcomeContent = document.querySelector('.welcome-content');
    const comparisonContainer = document.createElement('div');
    comparisonContainer.className = 'comparison-container';
    
    const motionDemo = new MotionGraphicsDemo();
    motionDemo.createComparisonAnimation(comparisonContainer);
    
    const startButton = welcomeContent.querySelector('.btn-primary');
    welcomeContent.insertBefore(comparisonContainer, startButton);
}

document.addEventListener('DOMContentLoaded', function() {
    checkSpeechSupport();
    console.log('Page loaded, speech support:', speechSupported);
});
