(function( global, factory ) {
        if (global === true) {
            factory(global);
        }
        else {
            factory({a: 1, b: 2, out: function(){
                                        console.log("The value is", this.a+this.b)
                                      }
                    });
        }
    }
)(true, function (obj) {
    if (obj === true) {
        console.log("The value is true");
    }
    else {
        obj.out();
    }
});
