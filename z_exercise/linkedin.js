
var Foo = function (a) {
    function bar() {
        return a;
    }
    this.baz = function () {
        return a;
    };
};

Foo.prototype = {
    biz: function () {
        return a;
    }
};

var f = new Foo(7);
f.bar(); // f.bar is not a function
f.baz(); // output: 7
f.biz(); // output: undefined

// Que-2
/*
Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order.
Thus, given a collection containing [0, [1, 3, 5], [4, 7, 3], [[2, 3], 4], {a:2}] the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4, {a:2}] */



function flat(ar) {

    let out = [];
    for (let item in ar) {
        if (item.is_a ? (Array) {
            out.append(flat(item))
        } esif(item.isinstanceOf(Object)){
                out.append(item)          
        } else {
            out.append(item)
        }
        
    }
    return out;
    
}

// Q-3
// http://imgur.com/MSavAOA


<p id='imge'  class='hide tool-tip-shape' > This is message </p>// this is static. 
<div id='mylink'>
        <a > This is a Link </a> 
</div>


js:

$('mylink').on('MouseOver',() =>{
        $('image').removeClass('hide')
})

$('mylink').on('MouseOut',() =>{
        $('image').addClass('hide')
})

css:
.tool - tip - shape {
    color: yellow;
    width: 100;
    height: 100;
    ridus: 0
}

ARIA
