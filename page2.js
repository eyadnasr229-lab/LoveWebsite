window.onload = function () {

    const music = document.getElementById("bgMusic");

    music.play();

    typeWriter();

};

const text =
`إليكِ يا وتين الروح
أيا مَن سكنتِ القلبَ قبل مَجيئهْ
وأوقدتِ في صَحراءِ عُمري رَبيعَهْ
أُنادِيكِ من بَينِ الرِّياحِ كأنَّني
قَتيلُ هَوىً يَستَنهِضُ الدَّمعَ سَريعَهْ
رَأيتُكِ فاستَحيا الزَّهَرُ لِوَجهِكِ
وأَخفى القَمرُ البَدرَ خَوفًا يَضيعَهْ
إذا غِبتِ عن عَيني تَغَيَّرَ كَونُها
وصارَتْ سُطورُ العُمرِ صَحراءَ مُريعَهْ
أُحِبُّكِ حُبًّا لو تَفَجَّرَ في الدُّنا
لَغَطّى جِبالَ الأرضِ بَحرًا وَبَديعَهْ
وإنِّي وإن طالَ الفِراقُ مُقيمُهُ
على العَهدِ، لا أَنسى الوِصالَ وديعَهْ
فَكوني لِقلبي مَوطِنًا لا يُغادِرُهُ
فأنتِ الحَياةُ، وأنتِ الرُّوحُ جَميعَهْ`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("poem").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

window.onload = function () {
    const music = document.getElementById("bgMusic");

    music.play().catch(function(error){
        console.log("تعذر تشغيل الموسيقى:", error);
    });

    typeWriter();
};