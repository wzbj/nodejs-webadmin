  $.ajax({url: "/New/Partner/PUGC/getToken", success: function(res){
    var token = res.uptoken;
    var domain = res.domain;
    console.log(res);
    var config = {
      useCdnDomain: true,
      disableStatisticsReport: false,
      retryCount: 6,
      region: qiniu.region.z2
    };
    var putExtra = {
      fname: "cen",
      params: {},
      mimeType: null
    };
    $(".nav-box")
      .find("a")
      .each(function(index) {
        $(this).on("click", function(e) {
          switch (e.target.name) {
            case "h5":
              uploadWithSDK(token, putExtra, config, domain);
              break;
            case "expand":
              uploadWithOthers(token, putExtra, config, domain);
              break;
            case "directForm":
              uploadWithForm(token, putExtra, config);
              break;
            default:
              "";
          }
        });
      });
    imageControl(domain);
    uploadWithSDK(token, putExtra, config, domain);
  }})
