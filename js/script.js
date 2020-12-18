//even pada saat link diklik

$('.page-scroll').on('click', function(e){

    //ambil isi Href
    var tujuan = $(this).attr('href');
    //Tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);

     //pindahkan scroll
     $('html,body').animate({
         scrollTop: elemenTujuan.offset().top - 50
     }, 1250, 'easeInOutExpo');

         e.preventDefault();
         
     });
