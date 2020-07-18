const Navbar = () =>{
    return '<a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">MY BARBERSHOP</a>'+
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
      '<div class="collapse navbar-collapse" id="navbarResponsive">'+
        '<ul class="navbar-nav mx-auto">'+
          '<li class="nav-item active px-lg-4">'+
            '<a class="nav-link text-uppercase text-expanded" href="index.html">Home'+
              '<span class="sr-only">(current)</span>'+
            '</a>'+
          '</li>'+
          '<li class="nav-item px-lg-4">'+
            '<a class="nav-link text-uppercase text-expanded" href="about.html">About</a>'+
          '</li>'+
          '<li class="nav-item px-lg-4">'+
              '<a class="nav-link text-uppercase text-expanded" href="portpolio.html">Portfolio</a>'+
            '</li>'+
          '<li class="nav-item px-lg-4">'+
            '<a class="nav-link text-uppercase text-expanded" href="Contact.html">Contact</a>'+
          '</li>'+
          '<li class="nav-item px-lg-4">'+
            '<a class="nav-link text-uppercase text-expanded" href="blog.html">Blog</a>'+
          '</li>'+
        '</ul>'+
      '</div>';
}

export {Navbar};