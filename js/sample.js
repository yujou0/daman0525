// 引用aos
AOS.init();

// 引入header&footer
$(function () {
  $(".headerpage").load("header.html");
  $(".footerpage").load("footer.html");
});

// nav bar漢堡點擊效果
function hamberopen() {
  $('.hamberger').toggleClass('close');
  $('.hamberger::before').toggleClass('close');
}

// cursor
$(document).mousemove(function(e) {
    $('.small-circle').css({
        left: e.pageX,
        top: e.pageY
      });
  
    setTimeout(function() {
      $('.big-circle').css({
          left: e.pageX,
          top: e.pageY
        });
    }, 50);
  })

// readmore區域更換
window.onscroll = function () {
  var topScroll = document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
  var readmoreone = document.getElementById("readmoreone");//获取到导航栏id
  var readmoretwo = document.getElementById("readmoretwo");//获取到导航栏id
  var readmorethree = document.getElementById("readmorethree");//获取到导航栏id
  var readmorefour = document.getElementById("readmorefour");//获取到导航栏id
  if (topScroll < 550 || topScroll > 1500) {
    //当滚动距离小于550的时候执行下面的内容，也就是让导航栏恢复原状    
    readmoreone.style.position = 'static';
    readmorethree.style.visibility = 'hiden';
  } else {
    //当滚动距离大于550px时执行下面的东西
    readmoreone.style.position = 'fixed';
    readmoreone.style.top = '50%';
    readmoreone.style.right = '0%';
    readmoreone.style.width = '61px';
    readmoreone.style.height = '58px';
    readmoreone.style.visibility = 'visible';

    // readmoreone.style.background = 'blue';
    console.log(topScroll)
  }
  if (topScroll < 1600 || topScroll > 2300) {
    //当滚动距离小于1600的时候执行下面的内容，也就是让导航栏恢复原状    
    readmoretwo.style.position = 'static';
    readmorethree.style.visibility = 'hiden';

  } else {
    //当滚动距离大于1600px时执行下面的东西
    readmoretwo.style.position = 'fixed';
    readmoretwo.style.top = '50%';
    readmoretwo.style.right = '0%';
    readmoretwo.style.width = '61px';
    readmoretwo.style.height = '58px';
    readmoretwo.style.visibility = 'visible';
    // readmoretwo.style.background = 'green';
    console.log(topScroll)
  }
  if (topScroll < 2300 || topScroll > 3000) {
    //当滚动距离小于2300的时候执行下面的内容，也就是让导航栏恢复原状    
    readmorethree.style.position = 'static';
    readmorethree.style.visibility = 'hiden';
  } else {
    //当滚动距离大于2300px时执行下面的东西
    readmorethree.style.position = 'fixed';
    readmorethree.style.top = '50%';
    readmorethree.style.right = '0%';
    readmorethree.style.width = '61px';
    readmorethree.style.height = '58px';
    readmorethree.style.visibility = 'visible';
    // readmorethree.style.background = 'red';
    console.log(topScroll)
  }
  if (topScroll < 3000) {
    //当滚动距离小于3000的时候执行下面的内容，也就是让导航栏恢复原状    
    readmorefour.style.position = 'static';
    readmorefour.style.visibility = 'hiden';
  } else {
    //当滚动距离大于3000px时执行下面的东西
    readmorefour.style.position = 'fixed';
    readmorefour.style.top = '50%';
    readmorefour.style.right = '0%';
    readmorefour.style.width = '61px';
    readmorefour.style.height = '58px';
    readmorefour.style.visibility = 'visible';
    // readmorefour.style.background = 'yellow';
    console.log(topScroll)
  }
}

// map


function initMap() {
  // Styles a map in night mode.
  var position = {
    lat: 25.008595874653416,
    lng: 121.20427283928478
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 19,
    mapTypeControl:false,
    fullscreenControl:false,
    rotateControl:false,
    scaleControl:false,
    streetViewControl:false,
    zoomControl:false,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon:'/image/tag.png',
  });
}