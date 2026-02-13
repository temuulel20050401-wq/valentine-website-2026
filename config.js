// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Монхоо"

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝"

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    }

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Чи надад дуртай юу?",                                    // First interaction
            yesBtn: "Тийм",                                             // Text for "Yes" button
            noBtn: "Үгүй",                                               // Text for "No" button
            secretAnswer: "Би чамд зүгээр дуртай биш, бүр хайртай гээд байгаа юм чинь! ❤️"          // Secret hover message
        },
        second: {
            text: "Надад хэр их хайртай юм бэ дээ?",                          // For the love meter
            startText: "Ямархуу их юм бэ дээ!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                        // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", //The big question!
            yesBtn: "Тийм!",                                             // Text for "Yes" button
            noBtn: "Үгүй"                                               // Text for "No" button
        }
    }

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW Чи надад ийм их хайртай юм уу <3?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Би ч ингэсэн чамд зөндөө их хайртай! 🚀💝",              // Shows when they go past 1000%
        normal: "Жүлх жүлх! 🥰"                         // Shows when they go past 100%
    }

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Ийм хөөрхөн залуутай учирдаг би их азтай хүн юмаа! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    }

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"            // Text color (make sure it's readable!)
    }

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5        // Size of heart explosion effect (1.2-2.0 recommended)
    }


    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dzufsx75s/video/upload/v1770994631/IMG_3092_dk1e2o.mp3", // Music streaming URL
        startText: "🎵 Дууг тоглуулах",        // Button text to start music
        stopText: "🔇 Дууг зогсоох",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
}
    // Our Memories Gallery
galleryImages: {
    "images/photo1.png",
    "images/photo2.png",
    "images/photo3.png",
    "images/photo4.png"
}

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
