// ==========================================
// DATA MATERI PEMBELAJARAN
// ==========================================
const materials = [
    {
        id: "materi-1",
        title: "1. Etika AI & Kejujuran Akademik",
        category: "As-Siddiq (Kejujuran)",
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Integritas Akademik & Generative AI</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Kemajuan Artificial Intelligence (AI) seperti ChatGPT memberikan kemudahan luar biasa. Namun, dalam Islam, kejujuran (As-Siddiq) adalah pilar utama seorang penuntut ilmu.
            </p>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl mb-4">
                <p class="text-xs font-bold text-emerald-800 mb-1">Prinsip Islam:</p>
                <p class="text-xs text-emerald-700 italic">"Barangsiapa yang menipu kami, maka ia tidak termasuk golongan kami." (HR. Muslim)</p>
            </div>
            <h4 class="font-bold text-slate-800 text-sm mb-2">Panduan Penggunaan AI secara Etis:</h4>
            <ul class="list-disc pl-5 text-xs text-slate-600 space-y-2 mb-4">
                <li>Gunakan AI sebagai <strong>mitra diskusi/referensi</strong>, bukan pembuat karya instan secara penuh.</li>
                <li>Selalu lakukan <strong>verifikasi dan uji ulang</strong> terhadap kode atau tulisan buatan AI.</li>
                <li>Cantumkan <strong>sitasi/pengakuan</strong> jika AI digunakan dalam proses riset.</li>
            </ul>
        `
    },
    {
        id: "materi-2",
        title: "2. Tabayyun di Era Informasi Digital",
        category: "Tabayyun (Verifikasi)",
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Filosofi Tabayyun & Anti-Hoaks</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Kecepatan penyebaran informasi di era digital memicu maraknya hoaks. Sebagai mahasiswa PTI, Anda bertanggung jawab memastikan kebenaran data sebelum disebarluaskan.
            </p>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl mb-4">
                <p class="text-xs font-bold text-emerald-800 mb-1">QS. Al-Hujurat Ayat 6:</p>
                <p class="text-xs text-emerald-700 italic">"Wahai orang-orang yang beriman! Jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya..."</p>
            </div>
        `
    },
    {
        id: "materi-3",
        title: "3. Hak Cipta & Software Bajakan",
        category: "HIFZH AL-MAL",
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Penghargaan HAKI dalam Fiqih Digital</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Karya digital (software, kode, desain) merupakan Hak Kekayaan Intelektual (HAKI) yang dilindungi oleh hukum negara dan syariat Islam.
            </p>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl mb-4">
                <p class="text-xs font-bold text-emerald-800 mb-1">Fatwa MUI No. 1/MUNAS VII/MUI/15/2005:</p>
                <p class="text-xs text-emerald-700 italic">Setiap bentuk pelanggaran terhadap HAKI, termasuk pembajakan software, hukumnya haram.</p>
            </div>
        `
    },
    {
        id: "materi-4",
        title: "4. Keamanan Siber & Privasi Data",
        category: "Amanah",
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Tanggung Jawab Pengembang Sistem</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Pengembang perangkat lunak memegang amanah atas data pengguna. Memperjualbelikan data pribadi tanpa izin bertentangan dengan prinsip etika Islam.
            </p>
        `
    },
    {
        id: "materi-5",
        title: "5. Adab Komunikasi di Media Sosial",
        category: "Qaulan Karima",
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Etika Berinteraksi Digital</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Jejak digital mencerminkan akhlak seseorang. Islam mengajarkan agar tuturan tulisan di media sosial mengandung kebaikan dan tidak menyakiti orang lain.
            </p>
        `
    }
];

// ==========================================
// DATA BANK SOAL EVALUASI
// ==========================================
const questions = [
    {
        question: "Saat mengerjakan tugas coding/skripsi, Anda menggunakan generative AI (seperti ChatGPT). Bagaimana tindakan Anda agar tetap etis?",
        options: [
            { text: "Menyalin mentah-mentah seluruh output AI tanpa mengakui/mencantumkan sitasi.", score: 0 },
            { text: "Menggunakan AI sebagai pembanding/referensi, lalu menelaah, mengedit, dan mencantumkan sitasi AI secara jujur.", score: 20 },
            { text: "Mengklaim seluruh kode/tulisan buatan AI tersebut murni sebagai hasil karya pribadi.", score: 0 }
        ],
        principle: "Prinsip Kejujuran (As-Siddiq) & Larangan Plagiarisme",
        dalil: "HR. Muslim: 'Barangsiapa yang menipu kami, maka ia tidak termasuk golongan kami.'"
    },
    {
        question: "Anda menerima informasi/berita teknologi terbaru di grup WhatsApp yang belum jelas kebenarannya. Apa yang Anda lakukan sebelum membagikannya?",
        options: [
            { text: "Langsung membagikannya ke grup lain agar menjadi yang paling pertama tahu.", score: 0 },
            { text: "Melakukan verifikasi (Tabayyun) mengecek sumber resmi sebelum memutuskan untuk membagikannya.", score: 20 },
            { text: "Menambah sedikit bumbu cerita agar informasinya lebih menarik lalu membagikannya.", score: 0 }
        ],
        principle: "Prinsip Tabayyun (Verifikasi Informasi)",
        dalil: "QS. Al-Hujurat Ayat 6: 'Jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya...'"
    },
    {
        question: "Sebagai pengembang perangkat lunak (software developer), bagaimana Anda memperlakukan data pribadi pengguna aplikasi Anda?",
        options: [
            { text: "Menjaga kerahasiaan data pengguna dan tidak menjualnya ke pihak ketiga tanpa izin.", score: 20 },
            { text: "Mengumpulkan data sebanyak-banyaknya secara tersembunyi untuk dijual demi keuntungan pribadi.", score: 0 },
            { text: "Mengabaikan sistem keamanan aplikasi sehingga data pengguna rentan bocor.", score: 0 }
        ],
        principle: "Prinsip Amanah & Menjaga Privasi (Hifzh al-'Irdh)",
        dalil: "QS. An-Nisa Ayat 58: 'Sungguh, Allah menyuruhmu menyampaikan amanat kepada yang berhak menerimanya...'"
    },
    {
        question: "Bagaimana sikap Anda terhadap penggunaan software/perangkat lunak dalam aktivitas belajar atau bekerja?",
        options: [
            { text: "Menggunakan software bajakan secara terus-menerus padahal mampu membeli lisensi resminya.", score: 5 },
            { text: "Menggunakan opsi Software Open-Source (Gratis/Legal) atau membeli lisensi resmi sesuai kemampuan.", score: 20 },
            { text: "Membuat dan menyebarkan crack/keygen software komersial secara bebas.", score: 0 }
        ],
        principle: "Menghargai HAKI & Bebas dari Riba/Ghasab",
        dalil: "Fatwa MUI HAKI: Hak Cipta dilindungi Islam dan pelanggaran terhadapnya merupakan bentuk kezaliman/ghasab."
    },
    {
        question: "Saat berinteraksi di media sosial atau forum diskusi online, bagaimana Anda merespons perbedaan pendapat?",
        options: [
            { text: "Menggunakan bahasa yang santun, menghindari cyberbullying, dan tidak menyebarkan kebencian.", score: 20 },
            { text: "Melakukan 'doxxing' (menyebarkan identitas pribadi orang lain) untuk membalas argumen.", score: 0 },
            { text: "Menyerang personal (ad hominem) dengan kata-kata kasar di kolom komentar.", score: 0 }
        ],
        principle: "Prinsip Adab Berkomunikasi (Qaulan Karima/Sadida)",
        dalil: "QS. Al-Ahzab Ayat 70: 'Wahai orang-orang yang beriman! Bertakwalah kamu kepada Allah dan ucapkanlah perkataan yang benar.'"
    }
];

// Variable State
let currentQuestionIndex = 0;
let userScore = 0;
let selectedOptionIndex = null;
let userAnswers = [];

// DOM Views
const homeView = document.getElementById('home-view');
const materialView = document.getElementById('material-view');
const quizView = document.getElementById('quiz-view');
const resultView = document.getElementById('result-view');

// ==========================================
// FUNGSI NAVIGASI HALAMAN
// ==========================================
function hideAllViews() {
    homeView.classList.add('hidden');
    materialView.classList.add('hidden');
    quizView.classList.add('hidden');
    resultView.classList.add('hidden');
}

function showHome() {
    hideAllViews();
    homeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMaterial() {
    hideAllViews();
    materialView.classList.remove('hidden');
    renderMaterialTabs();
    selectMaterialTab(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// LOGIKA MATERI
function renderMaterialTabs() {
    const tabsContainer = document.getElementById('material-tabs');
    tabsContainer.innerHTML = '';

    materials.forEach((mat, idx) => {
        const btn = document.createElement('button');
        btn.className = `material-tab-btn ${idx === 0 ? 'active' : ''}`;
        btn.innerText = mat.title;
        btn.onclick = () => selectMaterialTab(idx);
        tabsContainer.appendChild(btn);
    });
}

function selectMaterialTab(index) {
    const tabs = document.querySelectorAll('.material-tab-btn');
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const contentContainer = document.getElementById('material-content');
    contentContainer.innerHTML = materials[index].content;
}

// LOGIKA QUIZ
function startQuiz() {
    hideAllViews();
    quizView.classList.remove('hidden');
    currentQuestionIndex = 0;
    userScore = 0;
    userAnswers = [];
    showQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuestion() {
    resetQuizState();
    const currentQuestion = questions[currentQuestionIndex];
    
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('question-number').innerText = `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}`;
    document.getElementById('progress-percentage').innerText = `${Math.round(progress)}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    document.getElementById('question-text').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-btn');
        button.onclick = () => selectOption(index, option.score);
        optionsContainer.appendChild(button);
    });
}

function resetQuizState() {
    selectedOptionIndex = null;
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.classList.add('bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-emerald-600', 'text-white', 'hover:bg-emerald-700');
    document.getElementById('options-container').innerHTML = '';
}

function selectOption(index, score) {
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
    nextBtn.classList.add('bg-emerald-600', 'text-white', 'hover:bg-emerald-700');
}

function nextQuestion() {
    if (selectedOptionIndex !== null) {
        const score = questions[currentQuestionIndex].options[selectedOptionIndex].score;
        userScore += score;
        userAnswers.push({
            questionObj: questions[currentQuestionIndex],
            chosenScore: score
        });

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    hideAllViews();
    resultView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('final-score').innerText = `${userScore}/100`;

    const scoreCategory = document.getElementById('score-category');
    const scoreFeedback = document.getElementById('score-feedback');

    if (userScore >= 80) {
        scoreCategory.innerText = "Sangat Etis (Mumtaz)";
        scoreCategory.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mt-1";
        scoreFeedback.innerText = "MasyaAllah! Penerapan teknologi dan perilaku digital Anda sangat selaras dengan prinsip-prinsip etika Islam.";
    } else if (userScore >= 50) {
        scoreCategory.innerText = "Cukup Etis (Jayyid)";
        scoreCategory.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mt-1";
        scoreFeedback.innerText = "Penggunaan teknologi Anda cukup baik, namun masih ada beberapa aspek etika Islam yang perlu diperhatikan dan ditingkatkan.";
    } else {
        scoreCategory.innerText = "Perlu Perbaikan";
        scoreCategory.className = "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mt-1";
        scoreFeedback.innerText = "Perilaku digital Anda berisiko merugikan diri sendiri dan orang lain. Mari pelajari kembali modul materi etika Islam di beranda.";
    }

    const recommendationsContainer = document.getElementById('detailed-recommendations');
    recommendationsContainer.innerHTML = '';

    userAnswers.forEach((item) => {
        const recDiv = document.createElement('div');
        recDiv.className = "p-4 bg-slate-50 border-l-4 " + (item.chosenScore > 0 ? "border-emerald-500" : "border-rose-500") + " rounded-r-xl text-left";
        recDiv.innerHTML = `
            <p class="font-bold text-xs text-slate-700">${item.questionObj.principle}</p>
            <p class="text-xs text-slate-500 italic mt-1">${item.questionObj.dalil}</p>
        `;
        recommendationsContainer.appendChild(recDiv);
    });
}


// ==========================================
// LOGIKA CHATBOT AI ASISTEN ETIKA (NEW)
// ==========================================
function toggleChatbot() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

function handleChatSubmit(e) {
    e.preventDefault();
    const inputField = document.getElementById('chat-input');
    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    // Render Pesan User
    appendChatMessage('user', userMessage);
    inputField.value = '';

    // Simulasi AI sedang mengetik
    setTimeout(() => {
        const botReply = generateAIResponse(userMessage.toLowerCase());
        appendChatMessage('bot', botReply);
    }, 600);
}

function appendChatMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');

    if (sender === 'user') {
        msgDiv.className = "flex justify-end";
        msgDiv.innerHTML = `
            <div class="bg-emerald-700 text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] shadow-sm">
                ${text}
            </div>
        `;
    } else {
        msgDiv.className = "flex items-start space-x-2";
        msgDiv.innerHTML = `
            <div class="bg-emerald-600 text-white p-2.5 rounded-xl rounded-tl-none max-w-[85%] shadow-sm leading-relaxed">
                ${text}
            </div>
        `;
    }

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Knowledge Base AI sederhanaberdasarkan Kata Kunci
function generateAIResponse(input) {
    if (input.includes('bajak') || input.includes('crack') || input.includes('lisensi') || input.includes('haki')) {
        return "<strong>Mengenai Software Bajakan / HAKI:</strong><br>Menurut Fatwa MUI No. 1/MUNAS VII/MUI/15/2005, Hak Cipta adalah hak milik yang dilindungi Islam. Menggunakan atau membajak software melanggar prinsip <em>Hifzh al-Mal</em>. Solusinya: Gunakan software <strong>Open-Source</strong> (seperti Linux/LibreOffice) atau beli lisensi resmi.";
    } 
    else if (input.includes('ai') || input.includes('chatgpt') || input.includes('tugas') || input.includes('plagiat')) {
        return "<strong>Penggunaan AI & Generative Tools:</strong><br>Boleh menggunakan AI sebagai alat bantu pemikiran/riset, namun menyalin utuh karya AI dan mengklaim sebagai karya pribadi melanggar prinsip <em>As-Siddiq (Kejujuran)</em>. Selalu lakukan verifikasi dan cantumkan sitasi AI!";
    } 
    else if (input.includes('data') || input.includes('privasi') || input.includes('retak') || input.includes('hacker')) {
        return "<strong>Privasi Data & Cybersecurity:</strong><br>Dalam Islam, data pribadi adalah amanah pengguna. Menjual data tanpa izin atau memata-matai orang lain bertentangan dengan larangan <em>Tajasus</em> (QS. Al-Hujurat: 12) dan prinsip menjaga amanah (QS. An-Nisa: 58).";
    } 
    else if (input.includes('hoaks') || input.includes('sebar') || input.includes('wa') || input.includes('sosmed')) {
        return "<strong>Penyebaran Informasi:</strong><br>Sebelum membagikan informasi di grup/sosmed, wajib hukumnya melakukan <strong>Tabayyun (Verifikasi)</strong> sesuai QS. Al-Hujurat: 6 agar tidak menyebarkan fitnah/hoaks.";
    } 
    else if (input.includes('halo') || input.includes('hai') || input.includes('salam') || input.includes('assalamu')) {
        return "Wa'alaikumsalam Wr. Wb.! Ada yang bisa EthicBot bantu terkait etika Islam dalam dunia IT dan teknologi?";
    } 
    else {
        return "Terima kasih pertanyaannya! Secara umum, etika Islam dalam IT berlandaskan 3 pilar: <strong>1) Kemakmuran/Manfaat</strong> (rahmatan lil 'alamin), <strong>2) Kejujuran & Amanah</strong> dalam data/kode, dan <strong>3) Bebas Kerusakan (Fasad)</strong>. Kamu juga bisa mengecek materi lengkapnya pada menu Modul Pembelajaran!";
    }
}