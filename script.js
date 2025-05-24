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
let riskFactors = [];

function startExam() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
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
        checkItem.innerHTML = `
            <input type="checkbox" id="check-${stepIndex}-${index}" onchange="handleCheckChange(${stepIndex}, ${index})">
            <label for="check-${stepIndex}-${index}">${check.text}</label>
            <span class="risk-indicator risk-${check.risk}">ความเสี่ยง: ${check.riskText}</span>
        `;
        checklist.appendChild(checkItem);
    });
    
    updateButtons();
}

function handleCheckChange(stepIndex, checkIndex) {
    const checkbox = document.getElementById(`check-${stepIndex}-${checkIndex}`);
    const checkItem = checkbox.parentElement;
    const check = examSteps[stepIndex].checks[checkIndex];
    
    if (!checkbox.checked) {
        // ถ้าไม่ติ๊ก (มีอาการ) = มีความเสี่ยง
        checkItem.classList.add(check.risk === 'high' ? 'danger' : check.risk === 'medium' ? 'warning' : 'checked');
        
        const riskKey = `${stepIndex}-${checkIndex}`;
        if (!riskFactors.includes(riskKey)) {
            riskFactors.push(riskKey);
        }
    } else {
        // ถ้าติ๊ก (ไม่มีอาการ) = ปกติ
        checkItem.classList.remove('danger', 'warning');
        checkItem.classList.add('checked');
        
        const riskKey = `${stepIndex}-${checkIndex}`;
        riskFactors = riskFactors.filter(risk => risk !== riskKey);
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
    const hasHighRisk = riskFactors.some(risk => {
        const [stepIndex, checkIndex] = risk.split('-').map(Number);
        return examSteps[stepIndex].checks[checkIndex].risk === 'high';
    });
    
    const riskCount = riskFactors.length;
    
    if (hasHighRisk || riskCount >= 3) {
        // มีความเสี่ยงสูง
        resultContent.innerHTML = `
            <div class="result-box risk">
                <h3>⚠️ คุณมีความเสี่ยง</h3>
                <p>จากการตรวจพบอาการที่ควรได้รับการตรวจสอบเพิ่มเติม</p>
                <p><strong>พบความผิดปกติ: ${riskCount} รายการ</strong></p>
                <div class="contact-info">
                    <p><strong>🏥 ติดต่อ: โรงพยาบาลมะเร็งอุบลราชธานี</strong></p>
                    <p>📞 โทร: 045-317133, 045-317134</p>
                    <p>📍 405 ถนนคลังอาวุธ ตำบลขามใหญ่ อำเภอเมือง จังหวัดอุบลราชธานี 34000</p>
                    <p>🕐 เวลาทำการ: จันทร์-ศุกร์ 08:00-16:30</p>
                    <p><strong>⚡ สายด่วนฉุกเฉิน: 1669</strong></p>
                </div>
            </div>
        `;
    } else if (riskCount > 0) {
        // มีความเสี่ยงปานกลาง
        resultContent.innerHTML = `
            <div class="result-box warning" style="background: #fff3cd; border-color: #ffc107; color: #856404;">
                <h3>⚠️ ควรติดตามอาการ</h3>
                <p>พบความผิดปกติเล็กน้อย ${riskCount} รายการ</p>
                <p><strong>แนะนำ:</strong></p>
                <p>• สังเกตอาการต่อไปอีก 1-2 สัปดาห์</p>
                <p>• หากอาการไม่ดีขึ้น ควรพบแพทย์</p>
                <p>• ตรวจเต้านมด้วยตัวเองเป็นประจำ</p>
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
            </div>
        `;
    }
}

function restartExam() {
    currentStep = 0;
    riskFactors = [];
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
