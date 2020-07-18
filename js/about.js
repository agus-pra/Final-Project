let bisnis = {
    nama: 'MY BARBERSHOP',
    alamat: 'TANJUNG GADING',
    telp: '082166100081',
    provinsi: 'Sumatera Utara',
    negara: 'Indonesia',
    history: [
        {
            about: [
                {
                    teks: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
                },
            ]
        },
        {
            team: [
                {
                    nama: 'Andre',
                    img: 'https://www.gentsoflondon.com/wp-content/uploads/2020/01/GREG_GENTS_OF_LONDON_BARBERSHOP_2020.jpeg',
                    kursi: 1
                },
                {
                    nama: 'Hendri',
                    img: 'https://thedcpost.com/wp-content/uploads/2019/10/andi-whiskey-yjvpwnfDpHY-unsplash.jpg',
                    kursi: 2
                },
                {
                    nama: 'Pratama',
                    img: 'https://www.kangan.edu.au/assets/images/blog/reasons-you-should-become-a-barber/1.jpg',
                    kursi: 3
                },
            ]
        },
        {
            portfolio: [
                {
                    porto: 'Team Berpengalaman',
                    img: 'https://millheadscuts.com/wp-content/uploads/2015/02/MillheadsBarber-Team-sm.jpg',
                },
                {
                    porto: 'Kenyamanan Ruangan',
                    img: 'https://blog.mokapos.com/hubfs/Imported_Blog_Media/thisisthebarbershopcom-2.jpg',
                },
                {
                    porto: 'Sertifikasi',
                    img: 'https://wartabahari.com/wp-content/uploads/2019/07/20190727212713_IMG_7896.jpg',
                },
                
            ]
        }
    ]
};

document.getElementById('aboutteks').innerHTML = bisnis.history[0].about[0].teks;

let teampangkas = '';
for(let anggota in bisnis.history[1].team) {
    teampangkas += '<div class="col-lg-4">'+
    '<div class="team-member text-center">'+
         '<img class="mx-auto rounded-circle" width="200" src="'+bisnis.history[1].team[anggota].img+'" alt="" />'+
         '<p class="text-muted text-center">'+bisnis.history[1].team[anggota].nama+'</p>'+
         '<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>'+
         '<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>'+
         '<a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>'+
     '</div>'+
 '</div>';
}

document.getElementById('team').innerHTML = teampangkas;

let portfolio = '';
for(let porto in bisnis.history[2].portfolio) {
    portfolio += '<div class="col-lg-4 col-sm-6 mb-4">'+
                    '<div class="portfolio-item">'+
                        '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">'+
                            '<img class="img-fluid" src="'+bisnis.history[2].portfolio[porto].img+'" alt="" />'+
                        '</a>'+
                        '<div class="portfolio-caption">'+
                            '<div class="portfolio-caption-heading">'+bisnis.history[2].portfolio[porto].porto+'</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
}



document.getElementById('portfolio').innerHTML = portfolio;