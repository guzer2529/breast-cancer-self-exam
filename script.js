const examSteps = [
    {
        title: "ขั้นตอนที่ 1: ตรวจดูหน้ากระจก",
        icon: "👀",
        instructionTitle: "วิธีการตรวจ",
        description: "ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม",
        voiceText: "ขั้นตอนที่หนึ่ง ตรวจดูหน้ากระจก ให้ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม",
        examples: [
            {
                title: "✅ ลักษณะปกติ",
                desc: "เต้านมทั้งสองข้างมีขนาดใกล้เคียงกัน ผิวหนังเรียบ หัวนมอยู่ในตำแหน่งเดิม",
                type: "normal",
                voiceText: "ลักษณะปกติ คือ เต้านมทั้งสองข้างมีขนาดใกล้เคียงกัน ผิวหนังเรียบ หัวนมอยู่ในตำแหน่งเดิม"
            },
            {
                title: "⚠️ อาการเตือนภัย",
                desc: "เต้านมข้างหนึ่งใหญ่กว่าปกติอย่างชัดเจน ผิวหนังเป็นคลื่นเหมือนเปลือกส้ม หัวนมบุ๋มเข้าไป",
                type: "danger",
                voiceText: "อาการเตือนภัย คือ เต้านมข้างหนึ่งใหญ่กว่าปกติอย่างชัดเจน ผิวหนังเป็นคลื่นเหมือนเปลือกส้ม หัวนมบุ๋มเข้าไป"
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
        voiceText: "ขั้นตอนที่สอง ตรวจดูท่ายกแขน ให้ยกแขนทั้งสองข้างขึ้นเหนือศีรษะ สังเกตการเปลี่ยนแปลงของเต้านม",
        examples: [
            {
                title: "✅ การเคลื่อนไหวปกติ",
                desc: "เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติ ไม่มีการดึงผิวหนังผิดปกติ",
                type: "normal",
                voiceText: "การเคลื่อนไหวปกติ คือ เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติ ไม่มีการดึงผิวหนังผิดปกติ"
            },
            {
                title: "⚠️ อาการผิดปกติ",
                desc: "เต้านมข้างหนึ่งไม่เคลื่อนไหวตามแขน มีการดึงผิวหนังเข้าหาข้างใน",
                type: "danger",
                voiceText: "อาการผิดปกติ คือ เต้านมข้างหนึ่งไม่เคลื่อนไหวตามแขน มีการดึงผิวหนังเข้าหาข้างใน"
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
        voiceText: "ขั้นตอนที่สาม ตรวจคลำท่านอน ให้นอนราบ ยกแขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ปลายนิ้วสามนิ้วคลำเป็นวงกลม",
        examples: [
            {
                title: "🔄 วิธีการคลำ",
                desc: "เริ่มจากด้านนอกเต้านม คลำเป็นวงกลมเล็กๆ เข้าหาหัวนม กดเบา-ปานกลาง-แรง",
                type: "normal",
                voiceText: "วิธีการคลำ เริ่มจากด้านนอกเต้านม คลำเป็นวงกลมเล็กๆ เข้าหาหัวนม กดเบา ปานกลาง และแรง"
            },
            {
                title: "🎯 พื้นที่ที่ต้องตรวจ",
                desc: "เต้านมทั้งหมด บริเวณรักแร้ ใต้กระดูกไหปลาร้า และเหนือกระดูกไหปลาร้า",
                type: "normal",
                voiceText: "พื้นที่ที่ต้องตรวจ ได้แก่ เต้านมทั้งหมด บริเวณรักแร้ ใต้กระดูกไหปลาร้า และเหนือกระดูกไหปลาร้า"
            },
            {
                title: "⚠️ สิ่งที่ต้องระวัง",
                desc: "พบก้อนแข็งหรือก้อนเนื้อผิดปกติ ความหนาผิดปกติของเนื้อเยื่อ",
                type: "danger",
                voiceText: "สิ่งที่ต้องระวัง คือ พบก้อนแข็งหรือก้อนเนื้อผิดปกติ ความหนาผิดปกติของเนื้อเยื่อ"
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
        voiceText: "ขั้นตอนที่สี่ ตรวจหัวนม ให้ใช้นิ้วหัวแม่มือและนิ้วชี้ บีบหัวนมเบาๆ จากโคนไปปลาย",
        examples: [
            {
                title: "✅ ลักษณะปกติ",
                desc: "ไม่มีของเหลวออกจากหัวนม หัวนมไม่เจ็บ ไม่แสบ ผิวหนังรอบหัวนมปกติ",
                type: "normal",
                voiceText: "ลักษณะปกติ คือ ไม่มีของเหลวออกจากหัวนม หัวนมไม่เจ็บ ไม่แสบ ผิวหนังรอบหัวนมปกติ"
            },
            {
                title: "⚠️ อาการเตือนภัย",
                desc: "มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม หัวนมเจ็บ แสบ หรือคัน",
                type: "danger",
                voiceText: "อาการเตือนภัย คือ มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม หัวนมเจ็บ แสบ หรือคัน"
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

// เสียงแนะนำ
function speakText(text, callback = null) {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
    
    // หยุดเสียงที่กำลังเล่นอยู่
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onstart = () => {
        const voiceBtn = document.querySelector('.voice-btn');
        if (voiceBtn) voiceBtn.classList.add('speaking');
    };
    
    utterance.onend = () => {
        const voiceBtn = document.querySelector('.voice-btn');
        if (voiceBtn) voiceBtn.classList.remove('speaking');
        if (callback) callback();
    };
    
    currentSpeech = utterance;
    window.speechSynthesis.speak(utterance);
}

// Animation สำหรับตัวอย่าง
function animateExamples() {
    const exampleItems = document.querySelectorAll('.example-item');
    exampleItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 300);
    });
}

// Animation สำหรับ check items
function animateCheckItems() {
    const checkItems = document.querySelectorAll('.check-item');
    checkItems.forEach((item, index) => {
        item.classList.remove('animate');
        setTimeout(() => {
            item.classList.add('animate');
        }, (index * 200) + 800);
    });
}

// Animation สำหรับ instruction box
function animateInstructionBox() {
    const instructionBox = document.querySelector('.instruction-box');
    if (instructionBox) {
        instructionBox.classList.remove('animate');
        setTimeout(() => {
            instructionBox.classList.add('animate');
        }, 200);
    }
}

// Animation สำหรับ step header
function animateStepHeader() {
    const stepHeader = document.querySelector('.step-header');
    if (stepHeader) {
        stepHeader.classList.remove('animate');
        setTimeout(() => {
            stepHeader.classList.add('animate');
        }, 100);
    }
}

function startExam() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {};
    
    // เพิ่มปุ่มควบคุมเสียง
    addVoiceControls();
    
    showStep(0);
}

function showStep(stepIndex) {
    const step = examSteps[stepIndex];
    const progress = ((stepIndex + 1) / examSteps.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-step').textContent = stepIndex + 1;
    document.getElementById('step-icon').textContent = step.icon;
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('instruction-title').textContent = step.instructionTitle;
    document.getElementById('step-description').textContent = step.description;
    
    // Animation สำหรับ header
    animateStepHeader();
    
    // Animation สำหรับ instruction box
    animateInstructionBox();
    
    // แสดงตัวอย่าง
    const exampleBox = document.getElementById('example-box');
    exampleBox.innerHTML = '<h4>💡 ตัวอย่างการตรวจ</h4>';
    
    step.examples.forEach(example => {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'example-item';
        exampleItem.innerHTML = `
            <div class="example-title ${example.type}-sign">${example.title}</div>
            <div class="example-desc">${example.desc}</div>
        `;
        exampleBox.appendChild(exampleItem);
    });
    
    // Animation สำหรับตัวอย่าง
    setTimeout(() => {
        animateExamples();
    }, 400);
    
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
    
    // Animation สำหรับ check items
    setTimeout(() => {
        animateCheckItems();
    }, 600);
    
    updateButtons();
    
    // เล่นเสียงแนะนำ
    setTimeout(() => {
        playStepVoiceGuide(step);
    }, 1000);
}

function playStepVoiceGuide(step) {
    if (!isVoiceEnabled) return;
    
    let voiceText = step.voiceText + ". ";
    
    // เพิ่มตัวอย่าง
    step.examples.forEach((example, index) => {
        voiceText += example.voiceText + ". ";
    });
    
    voiceText += "กรุณาตอบคำถามในแต่ละข้อ";
    
    speakText(voiceText);
}

function addVoiceControls() {
    // ลบปุ่มเก่าถ้ามี
    const existingControls = document.querySelector('.voice-controls');
    if (existingControls) {
        existingControls.remove();
    }
    
    const voiceControls = document.createElement('div');
    voiceControls.className = 'voice-controls';
    voiceControls.innerHTML = `
        <button class="voice-btn" onclick="toggleVoice()" title="${isVoiceEnabled ? 'ปิดเสียง' : 'เปิดเสียง'}">
            ${isVoiceEnabled ? '🔊' : '🔇'}
        </button>
    `;
    
    document.body.appendChild(voiceControls);
}

function toggleVoice() {
    isVoiceEnabled = !isVoiceEnabled;
    
    if (!isVoiceEnabled) {
        window.speechSynthesis.cancel();
    }
    
    const voiceBtn = document.querySelector('.voice-btn');
    if (voiceBtn) {
        voiceBtn.innerHTML = isVoiceEnabled ? '🔊' : '🔇';
        voiceBtn.title = isVoiceEnabled ? 'ปิดเสียง' : 'เปิดเสียง';
        voiceBtn.classList.remove('speaking');
    }
}

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
        speakText("เลือกใช่");
    } else {
        noBtn.classList.add('selected');
        checkItem.classList.add('answered-no');
        speakText("เลือกไม่ใช่");
    }
}

function nextStep() {
    window.speechSynthesis.cancel();
    
    if (currentStep < examSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        showResult();
    }
}

function prevStep() {
    window.speechSynthesis.cancel();
    
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
    window.speechSynthesis.cancel();
    
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
}

function restartExam() {
    window.speechSynthesis.cancel();
    currentStep = 0;
    answers = {};
    
    // ลบปุ่มควบคุมเสียง
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
