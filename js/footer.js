const footer = () =>{
    return '<div class="row align-items-center">'+
    '<div class="col-lg-4 text-lg-left">'+
      '<div class="panel panel-default">'+
        '<div class="panel-heading text-center btn-outline-light">Style</div>'+
        '<div class="panel-body text-center">'+
          '<div id="demo" class="carousel slide" data-ride="carousel">'+
          '<ul class="carousel-indicators">'+
              '<li data-target="#demo" data-slide-to="0" class="active"></li>'+
              '<li data-target="#demo" data-slide-to="1"></li>'+
              '<li data-target="#demo" data-slide-to="2"></li>'+
              '<li data-target="#demo" data-slide-to="3"></li>'+
              '</ul>'+
              '<div class="carousel-inner">'+
              '<div class="carousel-item active">'+
              '<img src="img/model1.jpg" width="100%" height="200">'+
              '</div>'+
              '<div class="carousel-item" >'+
              '<img src="img/model2.jpg" width="100%" height="200">'+
              '</div>'+
              '<div class="carousel-item">'+
              '<img src="img/model3.jpg" width="100%" height="200">'+
              '</div>'+
              '<div class="carousel-item">'+
              '<img src="img/model4.jpg" width="100%" height="200">'+
              '</div>'+
              '</div>'+
              '<a class="carousel-control-prev" href="#demo" data-slide="prev">'+
              '<span class="carousel-control-prev-icon"></span>'+
              '</a>'+
              '<a class="carousel-control-next" href="#demo" data-slide="next">'+
              '<span class="carousel-control-next-icon"></span>'+
              '</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="col-lg-4 my-3 my-lg-0">'+
      '<div class="panel panel-default">'+
        '<div class="panel-heading text-center btn-outline-light">Alamat</div>'+
        '<div class="panel-body text-center">'+
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1575549329136!2d99.33719841465029!3d3.311185997589489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3033c4ac15555555%3A0xe64b073e5e911723!2sKomplek%20Tanjung%20Gading%20Inalum!5e0!3m2!1sid!2sid!4v1594871401509!5m2!1sid!2sid" width="300" height="200" frameborder="200" style="border:10;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'+
        '</div>'+
      '</div>'+               
    '</div>'+
    '<div class="col-lg-4 text-lg-right">'+
      '<div class="panel panel-default">'+
       '<div class="panel-heading text-center btn-outline-light">Sosial Media</div>'+
        '<div class="panel-body text-center">'+
          '<div>'+
            '<a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>'+
            '<a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>'+
            '<a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-instagram"></i></a>'+
            '<a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-wordpress"></i></a>'+
          '</div>'+
        '</div>'+
      '</div> '+          
    '</div>'+
  '</div>'+
  '<hr>'+
  '<div class="row align-items-center">'+
    '<div class="col-lg-12 text-lg-center">'+
        'Copyright © Your Website 2020'+
    '</div>'+
  '</div>';
}

export {footer};