$( document ).ready(function() {
    var url = "http://app.mdnsolutions.com/api/v1/pages.json";
    var token = '';

    function setHeader(xhr) {
      xhr.setRequestHeader('Authorization', token);
    }    

    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        beforeSend: setHeader,
        timeout: 5000,
        //jsonpCallback: 'mycallback',
        success: function( response ) {
            // loading
            $('#icon-loading').hide();

            var items = [];
            $.each( response, function( key, obj ) {
                items.push( "<li id='" + obj.id + "'><img src='http://app.mdnsolutions.com/" + obj.url + "' alt='" + obj.title + "' /></li>" );
            });

            $( "<ul/>", {
                "class": "photolist",
                html: items.join( "" )
            }).appendTo( "body section#content" );
        },
        error: function (xhr, errorType, exception) {
            var errorMessage = exception || xhr.statusText;
            console.log(errorMessage);
        }
    });
});