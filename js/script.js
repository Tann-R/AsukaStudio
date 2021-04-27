let activePg="home"
function active(nav) {
  if (nav!=activePg) {
    document.getElementById(activePg).className="nav-inactive";
    document.getElementById(nav).className="nav-active";
    activePg=nav;
    if (nav=="home") {
      document.getElementById("content").innerHTML=home;
    }
    if (nav=="sfw") {
      document.getElementById("content").innerHTML=sfw;
    }
    if (nav=="nsfw") {
      document.getElementById("content").innerHTML=nsfw;
    }
    if (nav=="price") {
      document.getElementById("content").innerHTML=price;
    }
  }
}

let home = '<h1>Home page.</h1>'
+ '<h2>This is the home page.</h2>'
+ '<p>Your content here.</p>'
+ '<div class="sfw-parallax1"></div>'
+ '<p>More content here.</p>'
+ '<div class="sfw-parallax2"></div>'
+ '<p>Still more content.</p>'

let sfw = '<h1>SFW Gallery</h1>'
+ '<h2>This is the SFW gallery.</h2>'
+ '<p>I don\'t have pictures in here yet.</p>'

let nsfw = '<h1>NSFW Gallery</h1>'
+ '<h2>This is the NSFW gallery.</h2>'
+ '<p>I don\'t have pictures in here yet.</p>'

let price = '<h1>Pricing and Booking</h1>'
+ '<h2>Pick your package and book your session today!</h2>'
+ '<p><b>SOLO SHOOT, SFW</b><br/>'
+ '100k gil</p>'
+ '<p><b>DUO SHOOT, SFW</b><br/>'
+ '175k gil</p>'
+ '<p><b>SOLO SHOOT, NSFW</b><br/>'
+ '150k gil</p>'
+ '<p><b>DUO SHOOT, NSFW</b><br/>'
+ '250k gil</p>'
+ '<p><b>PORTRAIT SHOOT, FULL CUSTOM</b><br/>'
+ '500k gil</p>'
+ '<p><b>FULL BODY SHOOT, FULL CUSTOM</b><br/>'
+ '1m gil</p>'
+ '<p>Each shoot lasts a maximum of <b>X TIME PERIOD</b> and includes up to <b>X IMAGES</b>.</p>'