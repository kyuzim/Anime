import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Naruto",
        rating: 8.4,
        overview:
          "Haylaz bir ninja olan Naruto Uzumaki,Haylaz bir ninja olan Naruto Uzumaki, tanınmak için çabalarken, köyün lideri ve en güçlü ninjası olan Hokage olma hayalini kurarken mücadele eder.",
        imageURL: "https://cdn.wallpapersafari.com/55/21/lGNaIc.jpg",
      },

      {
        id: 2,
        name: "One Piece",
        rating: 8.8,
        overview:
          "Monkey D. Luffy ve korsan ekibinin efsanevi Korsan Gold Roger'ın şimdiye kadar bıraktığı en büyük hazineyi bulmak için maceralarını takip ediyor.",
        imageURL:
          "https://aniyuki.com/wp-content/uploads/2022/01/aniyuki-one-piece-wallpaper-46.jpg",
      },

      {
        id: 3,
        name: "Hunter X Hunter",
        rating: "9.0",
        overview:
          "Gon Freecss, Babasını bulma arzusuyla çıktığı yolda Avcı olmayı hedefler, Ardından bu yolda edindiği arkadaşlarıyla babasını aramaya başlar",
        imageURL: "https://mfiles.alphacoders.com/294/294439.jpg",
      },

      {
        id: 4,
        name: "One Punch Man",
        rating: 8.7,
        overview:
          "Sadece eğlence için kahramanlık yapan Saitama artık rakiplerini tek yumrukta yenmekten sıkılmaya başlamıştır ve kendine denk birini arar",
        imageURL: "https://wallpaper.dog/large/20497027.jpg",
      },

      {
        id: 5,
        name: "Baki",
        rating: 6.6,
        overview:
          "Dünyanın en güçlü canavarı olarak bilinen babasını yenmek için güçlenmek isteyen Baki çeşitli güçlü dövüşçülerle dövüşmek zorunda kalır.",
        imageURL:
          "https://my4kwallpapers.com/wp-content/uploads/2022/06/Wallpaper-For-Baki-Hanma.jpg",
      },

      {
        id: 6,
        name: "My Hero Academia",
        rating: 8.4,
        overview:
          "Özgünlüksüz doğan Midoriya kendi özgünlüğünü elde ettikten sonra en güçlü olma yolundaki ilk adımı olan kahramanlık okuluna girmiştir.",
        imageURL: "https://mfiles.alphacoders.com/650/650257.png",
      },
      {
        id: 7,
        name: "Attack On Titan",
        rating: "9.0",
        overview:
          "Memleketi yok edildikten ve annesi öldürüldükten sonra, Eren Jaeger, dünyadan Titanları temizlemeye yemin eder..",
        imageURL:
          "https://mobwallpapershd.com/wp-content/uploads/2022/03/Attack-on-Titan-2-Aesthetic-wallpaper.jpg",
      },
      {
        id: 8,
        name: "Tokyo Ghoul",
        rating: 7.8,
        overview:
          "Kaneki, insan etiyle beslenen bir gulyabani tarafından saldırıya uğrar. Hayatta kalır, ancak yarı gulyabani olur ve kaçak bir kaçak olur",
        imageURL:
          "https://img.wallpapersafari.com/phone/1080/1920/9/58/8KdzYu.jpg",
      },
      {
        id: 9,
        name: "Castlevania",
        rating: 8.3,
        overview:
          "Bir vampir avcısı, kuşatılmış bir şehri Drakula tarafından kontrol edilen diğer dünya yaratıklarından oluşan bir ordudan kurtarmak için savaşır.",
        imageURL: "https://mfiles.alphacoders.com/211/211746.jpg",
      },
      {
        id: 10,
        name: "K",
        rating: "7.0",
        overview:
          "Genç bir çocuk, işlediğini hatırlamadığı bir suçtan aranıyor, iki kral ve güçleri tarafından avlanmamak üzere kaçması gerekiyor.",
        imageURL: "https://cdn.wallpapersafari.com/9/79/16mHis.jpg",
      },
      {
        id: 11,
        name: "Akame Ga Kill",
        rating: 7.8,
        overview:
          "Tatsumi, kendisine isim yapmak için Başkent'e bir yolculuğa çıkar ve Night Raid olarak bilinen görünüşte tehlikeli bir suikastçi grubuyla tanışır.",
        imageURL: "https://wallpapercave.com/wp/wp9573335.png",
      },
      {
        id: 12,
        name: "High School DXD",
        rating: 7.6,
        overview:
          "İlk randevusunda öldürüldükten sonra,Issei, Rias Gremory tarafından bir iblis olarak diriltilir ve sadece onun birinci sınıf şeytanlar kulübüne alınır.",
        imageURL:
          "https://naniwallpaper.com/files/wallpapers/rias-gremory/13-rias%20gremory-1080x1920.jpg",
      },
      {
        id: 13,
        name: "Zero Two",
        rating: 7.4,
        overview:
          "İnsanlığın dev canavarlar tarafından tehlikeye atıldığı gelecekteki bir dünyada, dünyayı kurtarmak için bir saldırı gücü toplandı.",
        imageURL:
          "https://static.zerochan.net/Zero.Two.%28Darling.in.the.FranXX%29.full.3224364.jpg",
      },
      {
        id: 14,
        name: "Tokyo Revengers",
        rating: 8.1,
        overview:
          "Hanagaki Takemichi ölüp 12 yıl önce uyandığında, arkadaşlarının nihai kaderini hesaba katar ve talihsiz bir geleceği engellemeye çalışır.",
        imageURL: "https://cdn.wallpapersafari.com/80/65/0fp4Og.jpg",
      },
      {
        id: 15,
        name: "Jujutsu Kaisen",
        rating: 8.6,
        overview:
          "İtadori lanetli bir tılsımı yutar ve kendisi de lanetlenir. diğer lanetli tılsımları da bulmak için bir şaman okuluna girer.",
        imageURL: "https://mfiles.alphacoders.com/914/thumb-1920-914065.jpg",
      },
      {
        id: 16,
        name: "Rent A Girlfriend",
        rating: 7.3,
        overview:
          "Sevgilisi tarafından terk edildikten sonra kendisinin hem okul arkadaşı hem de komşusu olan bir kızı 'kiralamak' için flört servisine kaydolur.",
        imageURL: "https://wallpapercave.com/wp/wp7081169.jpg",
      },
      {
        id: 17,
        name: "Blue Exorcist",
        rating: 7.5,
        overview:
          "Şeytan'ın oğlu olduğunu keşfettikten sonra Rin, yeteneklerinde ustalaşmak ve Şeytan'ı yenmek için True Cross Akademisi'ne katılmak zorundadır",
        imageURL: "https://wallpaperaccess.com/full/158644.jpg",
      },
      {
        id: 18,
        name: "Helsing Ultimate",
        rating: 7.8,
        overview:
          "Vampir avcısı Prof. Van Helsing'in kızı tarafından yönetilen bir İngiliz görev gücü, iki vampirin yardımıyla doğaüstü güçlerle savaşır.",
        imageURL:
          "https://images.hdqwalls.com/download/alucard-hellsing-ultimate-dracula-gothic-4k-l6-1080x1920.jpg",
      },
      {
        id: 19,
        name: "Code Geass",
        rating: 8.7,
        overview:
          "Başkalarını kontrol etmek için gizemli bir güç verildikten sonra, dışlanmış bir prens, güçlü bir imparatorluğa karşı isyanın maskeli lideri olur.",
        imageURL: "https://wallpaperaccess.com/full/8003887.jpg",
      },
      {
        id: 20,
        name: "Kakegurui",
        rating: 6.1,
        overview:
          "Akademik sıralamanın öğrencilerin kumar kazançlarına dayandığı Hyakaou Akademisi yeni kayıt olan Yumekoyu yenebilecekmi ",
        imageURL: "https://mfiles.alphacoders.com/701/701620.png",
      },
      {
        id: 21,
        name: "Demon Slayer",
        rating: 8.7,
        overview:
          "Tanjiro ve yavaş yavaş bir iblise dönüşen kız kardeşini korumak ve iyileştirmek için bir iblis avcısı olmaya karar verir.",
        imageURL: "https://wallpaperaccess.com/full/5498595.jpg",
      },
      {
        id: 22,
        name: "Bunny Girl Senpai",
        rating: 8.1,
        overview:
          "Sakuta Azusagawa'nın görünüşte normal hayatı, başkalarına görünmez gibi görünen tavşan kızla tanıştığında büyük ölçüde değişir.",
        imageURL: "https://mfiles.alphacoders.com/774/thumb-1920-774227.png",
      },
      {
        id: 23,
        name: "Guilty Crown",
        rating: 7.1,
        overview:
          "Ohma Shu başkalarının başına bela olmaktan kaçınıyor ancak bu çizdiği yol onu Cenaze Salonu adlı birlik ile tanıştıracaktır",
        imageURL: "https://cdn.wallpapersafari.com/55/40/NpvX9i.jpg",
      },
      {
        id: 24,
        name: "Angel Beats",
        rating: 7.6,
        overview:
          "Asi gençler, öbür dünya lisesinde, soğukkanlı bir kızın doğaüstü güçlerine karşı silahlı çatışmada savaşırlar.",
        imageURL:
          "https://kawaii-mobile.com/wp-content/uploads/2011/05/Angel-Beats-Yuri-Nakamura-Kanade-Tachibana-Yui.HTC-One-wallpaper-1080x1920.jpg",
      },
      {
        id: 25,
        name: "Komi Can't Communicate",
        rating: 6.6,
        overview:
          "Başkalarıyla iletişim kurma konusunda endişeli olan Komi'ye sıradan bir okul çocuğu onunla arkadaş olur ve ve insanlarla konuşmasına yardımcı olur.",
        imageURL: "https://mfiles.alphacoders.com/955/thumb-1920-955235.jpg",
      },
      {
        id: 26,
        name: "Haikyuu",
        rating: 8.8,
        overview:
          "Voleybol şampiyonasının 'küçük dev' lakaplı yıldız oyuncusu gibi olmaya kararlı olan Shoyo, okulunun voleybol kulübü Karasu'ya katılır.",
        imageURL: "https://wallpaperaccess.com/full/6929221.jpg",
      },
      {
        id: 27,
        name: "Bungou Stray Dogs",
        rating: 7.8,
        overview:
          "Kaplana dönüşme gücünü kontrol edemeyen Atsushi gücünü kontrol edebilmek için Silahlı Dedektiflik Bürosuna katılır",
        imageURL: "https://stringfixer.com/files/13741743.jpg",
      },
      {
        id: 28,
        name: "Another",
        rating: 7.6,
        overview:
          "Koichi Sakakibara, kendisini gizemli bir kızın ve bir dizi korkunç ölümün yer aldığı bir gizemin içinde bulduğu yeni bir okula transfer olur",
        imageURL:
          "https://www.teahub.io/photos/full/179-1797091_mobile-wallpaper-another-anime.jpg",
      },
      {
        id: 29,
        name: "Death Note",
        rating: "9.0",
        overview:
          "Yagami Light, üzerine adı yazılan herkesi öldürebilecek bir defter keşfettikten sonra suçluları dünyadan yok etmek için gizli bir sefere çıkar.",
        imageURL: "https://wallpaperaccess.com/full/170104.jpg",
      },
      {
        id: 30,
        name: "Full Metal Alchemist Brotherhood",
        rating: 9.1,
        overview:
          "İki kardeş, ölen annelerini diriltme girişiminin ters gitmesi ardından Felsefe Taşı'nı arar.",
        imageURL:
          "https://i.pinimg.com/originals/bb/b7/70/bbb770612b4a4f245a7d5bdfb069e69a.jpg",
      },
      {
        id: 31,
        name: "The Seven Deadly Sins",
        rating: 7.9,
        overview:
          "İşlemedikleri bir suçtan haksız yere suçlanan ve kendilerini aklamak için yola çıkan bir grup savaşçı olan Yedi Ölümcül Günah'ın hikayesi.",
        imageURL: "https://mfiles.alphacoders.com/712/712823.jpg",
      },
      {
        id: 32,
        name: "Record Of Ragnarok",
        rating: 6.2,
        overview:
          "Tanrılar, 7 milyon yıllık insanlık tarihinden sonra insanların telafi edilemez olduğuna ve neslinin tükenmesi gerektiğine karar verir.",
        imageURL: "https://mfiles.alphacoders.com/945/945510.jpg",
      },
      {
        id: 33,
        name: "Uzaki-chan",
        rating: 6.9,
        overview:
          "Sakurai Shinichi'nin tek dileği biraz huzur ve sessizliktir, Uzaki Hana'nın tek dileği biraz eğlenmektir güzel bir ilişkinin başlangıcı olabilir.",
        imageURL:
          "https://preview.redd.it/kwx87coljc841.jpg?auto=webp&s=f9ec8af87e7e5ec77a21e4447a922032081bd648",
      },
      {
        id: 34,
        name: "Koi ga Shitai!",
        rating: 7.4,
        overview:
          "Yuuta, ortaokuldayken 'chuunibyou'dan muzdaripti. Mezun olduğunda unutmaya çalışır ama yanlışlıkla Rikka ile tanışır.",
        imageURL: "https://wallpapercave.com/wp/wp4030578.jpg",
      },
      {
        id: 35,
        name: "High Rise İnvasion",
        rating: 6.5,
        overview:
          "Yuri, kendini maskeli saldırganlara karşı hayatta kalması gereken garip bir dünyada bir gökdelenin tepesinde bulur.",
        imageURL:
          "https://i.pinimg.com/originals/5c/b5/ab/5cb5ab3ce2950e22af626359c10574d0.jpg",
      },
      {
        id: 36,
        name: "Beyond The Boundary",
        rating: 7.2,
        overview:
          "Akihito, okulun çatısından atlamak üzereyken, Mirai Kuriyama ile tanışır Akihito, Mirai'yi kurtardıktan sonra rahatsız edici olaylar gelişmeye başlar.",
        imageURL:
          "https://kawaii-mobile.com/wp-content/uploads/2014/06/Kyoukai-no-kanata-Beyond-the-Boundary.Samsung-Galaxy-Note-3-wallpaper.1080x1920.jpg",
      },
      {
        id: 37,
        name: "Fire Force",
        rating: 7.6,
        overview:
          "Doğaüstü yangın olaylarıyla başa çıkmak için insanüstü bir itfaiyeci gücü oluşturulur. Kahramanımız Shinra Kusakabe'ı neler beklemektedir",
        imageURL: "https://mfiles.alphacoders.com/792/792954.jpg",
      },
      {
        id: 38,
        name: "The God Of Highschool",
        rating: 7.3,
        overview:
          "Kore'deki tüm lise öğrencileri arasında en iyi dövüşçüyü belirlemek için bir turnuva düzenlenir. Jin Moride bu turnuvaya katılacaktır.",
        imageURL:
          "https://i.pinimg.com/originals/1e/51/2c/1e512ca74ebaeb8055af0130632e344e.jpg",
      },
      {
        id: 39,
        name: "Hitori No Shita - The Outcast",
        rating: 6.8,
        overview:
          "Akihito, okulun çatısından atlamak üzereyken, Mirai Kuriyama ile tanışır Akihito, Mirai'yi kurtardıktan sonra rahatsız edici olaylar gelişmeye başlar.",
        imageURL: "https://static.zerochan.net/Ye.Wang.full.2843691.jpg",
      },
      {
        id: 40,
        name: "Fate Stay Night",
        rating: 7.3,
        overview:
          "Amatör büyücü Shirou Emiya, mitolojik kahramanları kullanan büyücüler arasındaki bir kavgaya karışır. ",
        imageURL: "https://wallpaperaccess.com/full/1335833.jpg",
      },
      {
        id: 41,
        name: "Tu Bian Ying Xiong Leaf",
        rating: 6.6,
        overview:
          "Başka bir boyuttaki ışık ve karanlık arasındaki bu savaş, aslında Huayu Ye'nin kalbindeki umut ve umutsuzluk arasındaki savaştı.",
        imageURL: "https://wallpaperaccess.com/full/3238856.jpg",
      },
      {
        id: 42,
        name: "Boruto",
        rating: 6.8,
        overview:
          "Boruto, büyük ninja olmak için arkadaşlarıyla birlikte babasının ayak izlerini takip ediyor. Boruto, babasının gölgesinin dışında yaşamaya kararlıdır. ",
        imageURL:
          "https://indwallpapers.com/wp-content/uploads/2021/09/Boruto-Karma-Phone-Wallpaper.jpeg",
      },
      {
        id: 43,
        name: "Black Lagoon",
        rating: 7.9,
        overview:
          "Korsanlar tarafından yakalanan bir Japon iş adamı, şirketi tarafından ölüme terk edilir. Ve kendisini kaçıran paralı askerlere katılır. ",
        imageURL:
          "https://images.hdqwalls.com/download/black-lagoon-anime-girl-smoking-4k-i5-1080x1920.jpg",
      },
      {
        id: 44,
        name: "JoJo's Bizarre Adventure",
        rating: 8.4,
        overview:
          "Yoğun bir psişik güce sahip olan Joestar ailesinin ve her bir üyenin hayatları boyunca karşılaştığı maceraların hikayesi. ",
        imageURL:
          "https://wallpapersmug.com/download/1080x1920/307fff/anime-boys-Jojos-Bizarre-Adventure.jpg",
      },
      {
        id: 45,
        name: "Black Clover",
        rating: 8.3,
        overview:
          "Asta ve Yuno aynı kilisede terk edildi. Bir sonraki İmparator Magus'un kim olacağını görmek için birbirleriyle rekabet edeceklerine söz verdiler. ",
        imageURL: "https://mfiles.alphacoders.com/723/723991.jpg",
      },
      {
        id: 46,
        name: "Berserk",
        rating: 8.4,
        overview:
          "Guts, Griffith'in önderlik ettiği paralı asker grubuyla güçlerini birleştiren ve kraliyet sarayına girerken onlarla savaşan yetenekli bir kılıç ustasıdır.",
        imageURL:
          "https://i.pinimg.com/originals/7c/22/9c/7c229c5ae51a09bd42d817f2cfc2c1fd.jpg",
      },
      {
        id: 47,
        name: "Steins;Gate",
        rating: 8.8,
        overview:
          "Zaman yolculuğunu keşfettikten sonra, bir öğrenci ve meslektaşları, bir organizasyonu durdurmak için bilgilerini kullanmalıdır.",
        imageURL:
          "https://www.teahub.io/photos/full/111-1119692_kurisu-steins-gate-art.jpg",
      },
      {
        id: 48,
        name: "Gintama",
        rating: 8.7,
        overview:
          "Uzaylıların feodal Tokyo'yu istila edip ele geçirdiği bir çağda, işsiz bir samuray olan Gintoki Sakata elinden geldiğince iş bulur. ",
        imageURL:
          "https://i.pinimg.com/564x/9f/e5/40/9fe540fe23d1794e1b0976615902b9c7.jpg",
      },
      {
        id: 49,
        name: "Claymore",
        rating: 8.0,
        overview:
          "'Youma' adındaki ölümcül yaratıklarla dolu bir dünyada Clare, dişi youma melezlerini savaşçılara dönüştüren bir organizasyon adına çalışıyor. ",
        imageURL:
          "https://i.pinimg.com/736x/7f/ed/5c/7fed5c7d19aed962877c3dff838de033.jpg",
      },
      {
        id: 50,
        name: "Bleach: Burîchi",
        rating: 8.2,
        overview:
          "Hayaletleri görme yeteneğine sahip olan Ichigo Kurosaki, Güçlerini aldıktan sonra dünyayı 'Oyuklar'dan kurtarmak için yola koyulur.",
        imageURL:
          "https://i.pinimg.com/564x/c8/dd/49/c8dd49f53e669d3b41bd1f0fb29a6b88.jpg",
      },
      {
        id: 51,
        name: "Sword Art Online",
        rating: 7.6,
        overview:
          "2022 yılında binlerce insan yeni bir sanal MMORPG'de kapana kısılır ve yalnız kurt oyuncusu Kirito kaçmaya çalışır. ",
        imageURL: "https://wallpaperaccess.com/full/1122087.jpg",
      },
      {
        id: 52,
        name: "Devil May Cry",
        rating: "7.0",
        overview:
          "Dante, garip bir iş ajansı işleten bir silah ve kılıç ustasıdır. Maddi sıkıntılara rağmen, soğukkanlılığını asla kaybetmez. ",
        imageURL: "https://cdn.wallpapersafari.com/48/52/VQbxZ3.jpg",
      },
      {
        id: 53,
        name: "Fairy Tail",
        rating: "8.0",
        overview:
          "Lucy, ünlü büyücü loncası Fairy Tail'in bir parçası olan güçlü büyücüler Natsu, Gray ve Erza'nın arkadaşı ve müttefiki olur. ",
        imageURL:
          "https://i.pinimg.com/564x/a5/5e/74/a55e7484b228a80141e89fc86e7d7d0e.jpg",
      },
      {
        id: 54,
        name: "Yu-Gi-Oh!",
        rating: 7.3,
        overview:
          "Yugi Moto, bir Antik Mısır Bulmacasını çözer ve karanlık ve güçlü bir alter ego ortaya çıkarır. Ne zaman tehdit edilse, ikinci kişiliği onları kurtarır.",
        imageURL:
          "https://i.pinimg.com/736x/84/0a/48/840a488b20970286ce9743c2c14da845.jpg",
      },
      {
        id: 55,
        name: "Mob Psycho 100",
        rating: 8.6,
        overview:
          "Medyum bir ortaokul çocuğu, sürekli belaya girse bile normal bir yaşam sürmeye ve büyüyen güçlerini kontrol altında tutmaya çalışır. ",
        imageURL:
          "https://i.pinimg.com/736x/15/bd/d1/15bdd1b0f81ac6ba8a2672db1383b35f.jpg",
      },
      {
        id: 56,
        name: "Dragon Ball",
        rating: 8.6,
        overview:
          "Dragon Ball, daha güçlü olma arayışına giren, tuhaf bir genç olan Son Goku adındaki genç bir savaşçının hikayesini anlatıyor.",
        imageURL: "https://wallpaperaccess.com/full/1884374.jpg",
      },
      {
        id: 57,
        name: "Cowboy Bebop",
        rating: 7.8,
        overview:
          "Terörist bir patlama kitlelere ölümcül bir virüs salıyor ve soğukkanlı suçluyu yakalamak ödül avcısı Bebop ekibine düşüyor. ",
        imageURL:
          "https://i.pinimg.com/originals/53/d3/49/53d3497a9656876c9d4354493f0da745.jpg",
      },
      {
        id: 58,
        name: "Kobayashi-san",
        rating: 7.7,
        overview:
          "Bir ofis çalışanı, hizmetçisi olarak hizmet etmesi için iyi kalpli bir ejderha kullanır ve komik talihsizliklerle dolu bir dünyaya girer. ",
        imageURL:
          "https://kawaii-mobile.com/wp-content/uploads/2018/03/Kobayashi-san-Chi-no-Maid-Dragon-Tohru-1080x1920-2.jpg",
      },
      {
        id: 59,
        name: "Ölümsüz Kralın Günlük Hayatı",
        rating: 7.2,
        overview:
          "Wang Ling, kontrolünün çok ötesinde güçlere sahip neredeyse yenilmez bir varlıktır. Şimdiye kadarki en büyük savaşıyla karşı karşıyadır.",
        imageURL:
          "https://i.pinimg.com/564x/a5/c6/a2/a5c6a2191e883eee4c85a3a5ece3f531.jpg",
      },
      {
        id: 60,
        name: "I Got Reincarnated as a Slime",
        rating: 8.1,
        overview:
          "Ortalama 37 yaşındaki Minami Satoru ölür ve hayal edilebilecek en olağanüstü yaratık - bir slime olarak reenkarne olur.",
        imageURL:
          "https://r1.ilikewallpaper.net/iphone-8-plus-wallpapers/download-114307/Tags-Tensei-Shitara-Slime-Datta-Ken-Pixiv-Id-10868.jpg",
      },
      {
        id: 61,
        name: "Charlotte",
        rating: 7.5,
        overview:
          "Hikaye, çocukların küçük bir yüzdesinin ergenliğe ulaştıklarında insanüstü yetenekler gösterdiği alternatif bir gerçeklikte geçiyor.",
        imageURL: "https://mfiles.alphacoders.com/692/692097.png",
      },
      {
        id: 62,
        name: "Vermeil",
        rating: 6.9,
        overview:
          "Büyü akademisindeki bir öğrenci olan Alto Goldfield, sihirli bir daire çizer, sonunda Vermeil adında güçlü bir iblis çağırır ve onu tanıdık yapar.",
        imageURL: "https://pbs.twimg.com/media/FNeEw2YXIAUOXgJ.jpg:large",
      },
      {
        id: 63,
        name: "Shikimori-san",
        rating: 6.8,
        overview:
          "Shikimori mükemmel bir kız arkadaşa benziyor. Ama doğru koşullar altında ortaya çıkan havalı bir karanlık tarafı var. Ve erkek arkadaşı Izumi, bu olduğunda etrafta olmayı seviyor.",
        imageURL:
          "https://i.pinimg.com/originals/dc/80/84/dc808460dd3a4c1bb0b869c6c510f6d8.jpg",
      },
      {
        id: 64,
        name: "Koi to uso",
        rating: 6.1,
        overview:
          "Yukari Nejima on beş yaşındadır. Japonya'nın küçük bir köşesinde yaşıyor ve hayatta ilerleyemiyor gibi görünüyor. Ama içinde tutkuyla yanan bir kalbi saklıyor. Aşık olunca ne olacak? Japonya'da aşk yasaktır.                ",
        imageURL:
          "https://wallpapercrafter.com/th800/387993-Anime-Love-and-Lies-Phone-Wallpaper.jpg",
      },
      {
        id: 65,
        name: "Tate no Yuusha no Nariagari",
        rating: "8.0",
        overview:
          "Bir oyuncu sihirli bir şekilde paralel bir evrene çağrılır ve dünyayı kehanet edilen kıyametten kurtarmak için dört kahramandan biri olarak seçilir.",
        imageURL: "https://mfiles.alphacoders.com/783/783692.jpg",
      },
      {
        id: 66,
        name: "Kekkai Sensen",
        rating: "7.2",
        overview:
          "Paranormal ve sıradanlığın bir arada olduğu bir şehirde, Libra organizasyonu barış ve düzeni sağlamak için savaşır.",
        imageURL:
          "https://cutewallpaper.org/25/anime-phone-wallpaper-kekkai-sensen/1401228974.jpg",
      },
      {
        id: 67,
        name: "Kaguya-sama",
        rating: "8.6",
        overview:
          "Seçkin bir okulun gururla ayrıcalıklı en iyi iki öğrencisi, birbirlerinden ilk aşk itirafı almayı misyon edinirler.",
        imageURL:
          "https://image.winudf.com/v2/image1/Y29tLmJydWhwcm9kLmxvdmVpc3dhcmthZ3V5YXNoaW5vbWl5YV9zY3JlZW5fM18xNjE3ODIwNTExXzA0Nw/screen-3.jpg?fakeurl=1&type=.webp",
      },
      {
        id: 68,
        name: "Redo Of Healer",
        rating: "6.3",
        overview:
          "Keyaru, başkaları tarafından defalarca cinsel istismara uğrayan bir şifa sihirbazıdır. İyileştirme sihrini kullanarak, kendisine kötü davrananlardan intikam almak için dört yıl geriye gider.",
        imageURL:
          "https://wallpapercrafter.com/desktop/381784-Anime-Redo-of-Healer-Phone-Wallpaper.jpg",
      },
      {
        id: 69,
        name: "Highschool of the Dead",
        rating: "7.2",
        overview: "Lise öğrencileri, zombi kıyametinin başlamasıyla bunalır.",
        imageURL: "https://wallpaperaccess.com/full/349485.jpg",
      },
      {
        id: 70,
        name: "Angels of Death",
        rating: "6.5",
        overview:
          "Rachel, bilmediği bir binanın bodrum katında hiçbir hatırası olmadan uyandığında, tırpan taşıyan bir seri katil olan Zack ile karşılaşır.",
        imageURL: "https://wallpapercave.com/wp/wp6395468.jpg",
      },
      {
        id: 71,
        name: "The Devil Is a Part-Timer!",
        rating: "7.6",
        overview:
          "Satan, günümüz Japonya'sında geri dönmek için herhangi bir sihir olmadan sona erdiğinde ve bir fast food lokantasında yarı zamanlı çalışmaya başladığında, neşe ve eğlence ortaya çıkar.",
        imageURL:
          "https://i.pinimg.com/originals/a6/51/e8/a651e8d710579d1d336830b102a4be69.jpg",
      },
      {
        id: 72,
        name: "Horimiya",
        rating: "8.1",
        overview:
          "İki çok farklı insan - akademik olarak başarılı bir kız öğrenci ve sessiz bir ezik okul çocuğu - tanışır ve bir dostluk geliştirir.",
        imageURL:
          "https://wallpapers.com/images/hd/horimiya-izumi-and-kyouko-cover-rng4zpl25rear5hl.jpg",
      },
      {
        id: 73,
        name: "My Dress-Up Darling",
        rating: "8.1",
        overview:
          "Geleneksel oyuncak bebek zanaatçisi olmak isteyen Wakana Gojou, Kitagawa Marin ile tanışır ve hayatı değişir.",
        imageURL:
          "https://rare-gallery.com/mocahbig/1380886-My-Dress-Up-Darling-Anime-Marin-Kitagawa.jpg",
      },
    ],
    searchQuery: "",
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    /*         this.setState ({
                  movies: newMovieList
              }) */
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    //console.log(event.target.value)
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <br />
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>

        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
