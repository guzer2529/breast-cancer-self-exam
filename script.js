const examSteps = [
    {
        title: "ขั้นตอนที่ 1: ตรวจดูหน้ากระจก",
        icon: "👀",
        instructionTitle: "วิธีการตรวจ",
        description: "ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม",
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
let answers = {}; // เก็บคำตอบของแต่ละข้อ

function startExam() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {}; // รีเซ็ตคำตอบ
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
        
        // ใส่สีตามคำตอบที่เลือก
        if (currentAnswer === 'yes') {
            checkItem.classList.add('answered-yes');
        } else if (currentAnswer === 'no') {
            checkItem.classList.add('answered-no');
        }
        
        checklist.appendChild(checkItem);
    });
    
    updateButtons();
}

function selectChoice(stepIndex, checkIndex, choice) {
    const answerKey = `${stepIndex}-${checkIndex}`;
    answers[answerKey] = choice;
    
    const checkItem = document.getElementById(`item-${stepIndex}-${checkIndex}`);
    const yesBtn = checkItem.querySelector('.choice-btn.yes');
    const noBtn = checkItem.querySelector('.choice-btn.no');
    
    // รีเซ็ตสีของ item
    checkItem.classList.remove('answered-yes', 'answered-no');
    
    // รีเซ็ตปุ่ม
    yesBtn.classList.remove('selected');
    noBtn.classList.remove('selected');
    
    if (choice === 'yes') {
        yesBtn.classList.add('selected');
        checkItem.classList.add('answered-yes');
    } else {
        noBtn.classList.add('selected');
        checkItem.classList.add('answered-no');
    }
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
    
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === examSteps.length - 1 ? 'ดูผลลัพธ์' : 'ถัดไป';
}

function showResult() {
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    const resultContent = document.getElementById('result-content');
    
    // นับจำนวนคำตอบ "ไม่ใช่" และแยกตามระดับความเสี่ยง
    let highRiskCount = 0;
    let mediumRiskCount = 0;
    let lowRiskCount = 0;
    let totalAnswered = 0;
    
    Object.keys(answers).forEach(answerKey => {
        if (answers[answerKey] === 'no') {
            const [stepIndex, checkIndex] = answerKey.split('-').map(Number);
            const riskLevel = examSteps[stepIndex].checks[checkIndex].risk;
            
            if (riskLevel === 'high') highRiskCount++;
            else if (riskLevel === 'medium') mediumRiskCount++;
            else lowRiskCount++;
        }
        totalAnswered++;
    });
    
    const totalRiskCount = highRiskCount + mediumRiskCount + lowRiskCount;
    
    if (highRiskCount > 0 || totalRiskCount >= 4) {
        // มีความเสี่ยงสูง
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
    } else if (totalRiskCount > 0) {
        // มีความเสี่ยงปานกลาง
        resultContent.innerHTML = `
            <div class="result-box warning">
                <h3>⚠️ ควรติดตามอาการ</h3>
                <p>พบความผิดปกติเล็กน้อย ${totalRiskCount} รายการ</p>
                <p><strong>พบความผิดปกติ:</strong></p>
                <p>• ความเสี่ยงปานกลาง: ${mediumRiskCount} รายการ</p>
                <p>• ความเสี่ยงต่ำ: ${lowRiskCount} รายการ</p>
                <p><strong>แนะนำ:</strong></p>
                <p>• สังเกตอาการต่อไปอีก 1-2 สัปดาห์</p>
                <p>• หากอาการไม่ดีขึ้น ควรพบแพทย์</p>
                <p>• ตรวจเต้านมด้วยตัวเองเป็นประจำ</p>
                <div class="contact-info">
                    <p><strong>📞 ปรึกษาแพทย์: 045-317133</strong></p>
                </div>
            </div>
        `;
    } else {
        // ปกติ
        resultContent.innerHTML = `
            <div class="result-box safe">
                <h3>✅ ผลการตรวจปกติ</h3>
                <p>ไม่พบอาการที่น่าเป็นห่วง แต่ควรตรวจเป็นประจำ</p>
                <p><strong>📅 แนะนำการตรวจต่อไป:</strong></p>
                <p>• ตรวจเต้านมด้วยตัวเองทุกเดือน</p>
                <p>• ตรวจกับแพทย์ทุก 1-3 ปี (อายุ 20-39 ปี)</p>
                <p>• ตรวจกับแพทย์ทุกปี (อายุ 40+ ปี)</p>
                <p>• Mammogram เมื่ออายุ 40 ปีขึ้นไป</p>
                <p><strong>🎯 วันตรวจครั้งถัดไป: ${getNextExamDate()}</strong></p>
            </div>
        `;
    }
}

function getNextExamDate() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    return nextMonth.toLocaleDateString('th-TH', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function restartExam() {
    currentStep = 0;
    answers = {};
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
