const CONFIG = {
    valentineName: "Монхоо",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️','💖','💝','💗','💓'],
        bears: ['🧸','🐻']
    },

    questions: {
        first: {
            text: "Чи надад дуртай юу?",
            yesBtn: "Тийм",
            noBtn: "Үгүй",
            secretAnswer: "Би чамд зүгээр дуртай биш, бүр хайртай гээд байгаа юм чинь! ❤️"
        },
        second: {
            text: "Надад хэр их хайртай юм бэ дээ?",
            startText: "Ямархуу их юм бэ дээ!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Тийм!",
            noBtn: "Үгүй"
        }
    },

    loveMessages: {
        extreme: "WOOOOW Чи надад ийм их хайртай юм уу <3?? 🥰🚀💝",
        high: "Би ч ингэсэн чамд зөндөө их хайртай! 🚀💝",
        normal: "Жүлх жүлх! 🥰"
    },

    celebration: {
        title: "Ийм хөөрхөн залуутай учирдаг би их азтай хүн юмаа! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dzufsx75s/video/upload/v1770994631/IMG_3092_dk1e2o.mp3",
        startText: "🎵 тоглуулах",
        stopText: "🔇  зогсоох",
        volume: 0.5
    },

    // ✅ ЗӨВ array хэлбэр
    galleryImages: [
        "images/photo1.png",
        "images/photo2.png",
        "images/photo3.png",
        "images/photo4.png"
    ]
};

window.VALENTINE_CONFIG = CONFIG;
