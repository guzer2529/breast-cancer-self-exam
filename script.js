const examSteps = [
    {
        title: "ขั้นตอนที่ 1: ตรวจดู",
        icon: "👀",
        description: "ยืนหน้ากระจก แขนห้อยธรรมชาติ สังเกตรูปร่างและผิวหนังเต้านม",
        checks: [
            { text: "เต้านมทั้งสองข้างมีขนาดและรูปร่างปกติ", risk: "high" },
            { text: "ผิวหนังเต้านมเรียบ ไม่มีการเปลี่ยนแปลง", risk: "high" },
            { text: "หัวนมอยู่ในตำแหน่งปกติ ไม่บุ๋ม", risk: "high" },
            { text: "ไม่มีการบวม หรือแดง", risk: "medium" }
        ]
    },
    {
        title: "ขั้นตอนที่ 2: ตรวจด้วยการยกแขน",
        icon: "🙋‍♀️",
        description: "ยกแขนทั้งสองข้างขึ้นเหนือศีรษะ สังเกตการเปลี่ยนแปลง",
        checks: [
            { text: "ไม่มีการย่นหรือบุ๋มของผิวหนัง", risk: "high" },
            { text: "เต้านมเคลื่อนไหวเป็นธรรมชาติ", risk: "medium" },
            { text: "ไม่มีการดึงผิวหนังผิดปกติ", risk: "high" }
        ]
    },
    {
        title: "ขั้นตอนที่ 3: ตรวจคลำ (นอน)",
        icon: "🤲",
        description: "นอนราบ ใช้ปลายนิ้ว 3 นิ้ว คลำเต้านมเป็นวงกลม",
        checks: [
            { text: "ไม่พบก้อนแข็งหรือก้อนเนื้อผิดปกติ", risk: "high" },
            { text: "ไม่มีความหนาผิดปกติของเนื้อเยื่อ", risk: "medium" },
            { text: "บริเวณรักแร้ไม่มีก้อนบวม", risk: "high" },
            { text: "ไม่มีความเจ็บปวดผิดปกติ", risk: "low" }
        ]
    },
    {
        title: "ขั้นตอนที่ 4: ตรวจหัวนม",
        icon: "🔍",
        description: "บีบหัวนมเบาๆ ตรวจสอบการมีของเหลวออกมา",
        checks: [
            { text: "ไม่มีของเหลวใสหรือเลือดออกจากหัวนม", risk: "high" },
            { text: "หัวนมไม่เจ็บหรือแสบ", risk: "medium" },
            { text: "ไม่มีแผลหรือตุ่มที่หัวนม", risk: "medium" }
        ]
    }
];

let currentStep = 0;
let riskFactors = [];

function startExam() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    showStep(0);
}

function showStep(stepIndex) {
    const step = examSteps[stepIndex];
    const progress = ((stepIndex + 1) / examSteps.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('step-icon').textContent = step.icon;
    document.getElementById('step-title').textContent = step.title;
    document.getElementById('step-description').textContent = step.description;
    
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = '';
    
    step.checks.forEach((check, index) => {
        const checkItem = document.createElement('div');
        checkItem.className = 'check-item';
        checkItem.innerHTML = `
            <input type="checkbox" id="check-${stepIndex}-${index}" onchange="handleCheckChange(${stepIndex}, ${index})">
            <label for="check-${stepIndex}-${index}">${check.text}</label>
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
    
    if (hasHighRisk || riskFactors.length >= 3) {
        // มีความเสี่ยงสูง
        resultContent.innerHTML = `
            <div class="result-box risk">
                <h3>⚠️ คุณมีความเสี่ยง</h3>
                <p>จากการตรวจพบอาการที่ควรได้รับการตรวจสอบเพิ่มเติม</p>
                <div class="contact-info">
                    <p><strong>ติดต่อ: โรงพยาบาลมะเร็งอุบลราชธานี</strong></p>
                    <p>📞 โทร: 045-317133, 045-317134</p>
                    <p>📍 405 ถนนคลังอาวุธ ตำบลขามใหญ่ อำเภอเมือง จังหวัดอุบลราชธานี 34000</p>
                </div>
            </div>
        `;
    } else {
        // ปกติ
        resultContent.innerHTML = `
            <div class="result-box safe">
                <h3>✅ ผลการตรวจปกติ</h3>
                <p>ไม่พบอาการที่น่าเป็นห่วง แต่ควรตรวจเป็นประจำ</p>
                <p><strong>แนะนำ:</strong></p>
                <p>• ตรวจเต้านมด้วยตัวเองทุกเดือน</p>
                <p>• ตรวจกับแพทย์ทุก 1-3 ปี</p>
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
