const examSteps = [
    {
        title: "ขั้นตอนที่ 1: ตรวจดูหน้ากระจก",
        icon: "👀",
        instruction: "ยืนหน้ากระจก สังเกตรูปร่างและผิวหนังเต้านม",
        motionClass: "hand-animation",
        checks: [
            "เต้านมทั้งสองข้างมีขนาดและรูปร่างใกล้เคียงกัน",
            "ผิวหนังเต้านมเรียบ ไม่มีการเปลี่ยนแปลง",
            "หัวนมอยู่ในตำแหน่งปกติ ไม่บุ๋มเข้าไป"
        ]
    },
    {
        title: "ขั้นตอนที่ 2: ตรวจดูท่ายกแขน",
        icon: "🙋‍♀️",
        instruction: "ยกแขนขึ้นเหนือศีรษะ สังเกตเต้านม",
        motionClass: "hand-raise",
        checks: [
            "เต้านมเคลื่อนไหวขึ้นลงเป็นธรรมชาติเมื่อยกแขน",
            "ไม่มีการดึงผิวหนังผิดปกติ"
        ]
    },
    {
        title: "ขั้นตอนที่ 3: ตรวจคลำท่านอน",
        icon: "🤲",
        instruction: "นอนราบ คลำเต้านมเป็นวงกลม",
        motionClass: "hand-palpate",
        checks: [
            "ไม่พบก้อนแข็งหรือก้อนเนื้อผิดปกติ",
            "ไม่มีความหนาผิดปกติของเนื้อเยื่อ"
        ]
    },
    {
        title: "ขั้นตอนที่ 4: ตรวจหัวนม",
        icon: "🔍",
        instruction: "บีบหัวนมเบาๆ สังเกตของเหลวผิดปกติ",
        motionClass: "hand-nipple",
        checks: [
            "ไม่มีของเหลวใส เหลือง หรือเลือดออกจากหัวนม",
            "หัวนมไม่เจ็บ ไม่แสบ ไม่คัน"
        ]
    }
];

let currentStep = 0;
let answers = {};

function startExam() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('total-steps').textContent = examSteps.length;
    answers = {};
    showStep(0);
}

function showStep(stepIndex) {
    currentStep = stepIndex;
    const step = examSteps[stepIndex];
    document.getElementById('progress').style.width = ((stepIndex+1)/examSteps.length)*100 + "%";
    document.getElementById('current-step').textContent = stepIndex+1;
    document.getElementById('step-icon').textContent = step.icon;
    document.getElementById('step-title').textContent = step.title;

    // Motion graphic
    showMotionDemo(stepIndex);

    // Checklist
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = '';
    step.checks.forEach((text, idx) => {
        const answer = answers[`${stepIndex}-${idx}`];
        const item = document.createElement('div');
        item.className = 'check-item' + (answer ? ' animate' : '');
        if (answer === 'yes') item.classList.add('answered-yes');
        if (answer === 'no') item.classList.add('answered-no');
        item.innerHTML = `
            <div class="check-question">${text}</div>
            <div class="choice-buttons">
                <button class="choice-btn yes${answer === 'yes' ? ' selected' : ''}" onclick="selectChoice(${stepIndex},${idx},'yes')">ใช่</button>
                <button class="choice-btn no${answer === 'no' ? ' selected' : ''}" onclick="selectChoice(${stepIndex},${idx},'no')">ไม่ใช่</button>
            </div>
        `;
        checklist.appendChild(item);
        setTimeout(() => item.classList.add('animate'), 100 + idx*120);
    });

    // Buttons
    document.getElementById('prev-btn').disabled = stepIndex === 0;
    document.getElementById('next-btn').textContent = stepIndex === examSteps.length-1 ? 'ดูผลลัพธ์' : 'ถัดไป';
}

function showMotionDemo(stepIndex) {
    const step = examSteps[stepIndex];
    const motion = `
    <div class="motion-demo">
      <div class="mirror-frame">
        <div class="body-silhouette">
          <div class="breast-area breast-left"></div>
          <div class="breast-area breast-right"></div>
          <div class="${step.motionClass}"></div>
        </div>
      </div>
      <div class="instruction-text">${step.instruction}</div>
    </div>
    `;
    document.getElementById('motion-example').innerHTML = motion;
}

function selectChoice(stepIdx, checkIdx, val) {
    answers[`${stepIdx}-${checkIdx}`] = val;
    showStep(stepIdx);
}

function nextStep() {
    if (currentStep < examSteps.length-1) {
        showStep(currentStep+1);
    } else {
        showResult();
    }
}

function prevStep() {
    if (currentStep > 0) showStep(currentStep-1);
}

function showResult() {
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    const resultContent = document.getElementById('result-content');
    let risk = 0;
    Object.keys(answers).forEach(k=>{
        if(answers[k]==='no') risk++;
    });
    if (risk === 0) {
        resultContent.innerHTML = `<div class="result-box safe">
            <h3>✅ ผลการตรวจปกติ</h3>
            <p>ไม่พบอาการที่น่าเป็นห่วง</p>
            <p>แนะนำ: ตรวจเต้านมด้วยตัวเองทุกเดือน</p>
        </div>`;
    } else if (risk <= 2) {
        resultContent.innerHTML = `<div class="result-box warning">
            <h3>⚠️ โปรดสังเกตอาการ</h3>
            <p>พบความผิดปกติบางส่วน (${risk} รายการ)</p>
            <p>หากอาการไม่ดีขึ้นควรพบแพทย์</p>
        </div>`;
    } else {
        resultContent.innerHTML = `<div class="result-box risk">
            <h3>🚨 มีความเสี่ยง</h3>
            <p>พบความผิดปกติหลายจุด (${risk} รายการ)</p>
            <p>ควรปรึกษาแพทย์ทันที</p>
        </div>`;
    }
}

function restartExam() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}
