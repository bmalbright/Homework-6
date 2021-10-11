        changes background color of UV index based on conditions
        if ( data.current.uvi < 3) {
          $(this).addClass("low");
        } 
        else if (2 < data.current.uvi < 6) {
          $(this).addClass("moderate");
        } 
        else if (data.current.uvi > 6) {
          $(this).addClass("high");
        }