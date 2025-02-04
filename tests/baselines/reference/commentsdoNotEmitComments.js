//// [tests/cases/compiler/commentsdoNotEmitComments.ts] ////

//// [commentsdoNotEmitComments.ts]
/** Variable comments*/
var myVariable = 10;

/** function comments*/
function foo(/** parameter comment*/p: number) {
}

/** variable with function type comment*/
var fooVar: () => void;
foo(50);
fooVar();

/**class comment*/
class c {
    /** constructor comment*/
    constructor() {
    }

    /** property comment */
    public b = 10;

    /** function comment */
    public myFoo() {
        return this.b;
    }

    /** getter comment*/
    public get prop1() {
        return this.b;
    }

    /** setter comment*/
    public set prop1(val: number) {
        this.b = val;
    }

    /** overload signature1*/
    public foo1(a: number): string;
    /** Overload signature 2*/
    public foo1(b: string): string;
    /** overload implementation signature*/
    public foo1(aOrb) {
        return aOrb.toString();
    }
}

/**instance comment*/
var i = new c();

/** interface comments*/
interface i1 {
    /** caller comments*/
    (a: number): number;

    /** new comments*/
    new (b: string);

    /**indexer property*/
    [a: number]: string;

    /** function property;*/
    myFoo(/*param prop*/a: number): string;

    /** prop*/
    prop: string;
}

/**interface instance comments*/
var i1_i: i1;

/** this is module comment*/
module m1 {
    /** class b */
    export class b {
        constructor(public x: number) {
           
        }
    }

    /// module m2
    export module m2 {
    }
}

/// this is x
declare var x;


/** const enum member value comment (generated by TS) */
const enum color { red, green, blue }
var shade: color = color.green;


//// [commentsdoNotEmitComments.js]
var myVariable = 10;
function foo(p) {
}
var fooVar;
foo(50);
fooVar();
var c = (function () {
    function c() {
        this.b = 10;
    }
    c.prototype.myFoo = function () {
        return this.b;
    };
    Object.defineProperty(c.prototype, "prop1", {
        get: function () {
            return this.b;
        },
        set: function (val) {
            this.b = val;
        },
        enumerable: false,
        configurable: true
    });
    c.prototype.foo1 = function (aOrb) {
        return aOrb.toString();
    };
    return c;
}());
var i = new c();
var i1_i;
var m1;
(function (m1) {
    var b = (function () {
        function b(x) {
            this.x = x;
        }
        return b;
    }());
    m1.b = b;
})(m1 || (m1 = {}));
var shade = 1;


//// [commentsdoNotEmitComments.d.ts]
declare var myVariable: number;
declare function foo(p: number): void;
declare var fooVar: () => void;
declare class c {
    constructor();
    b: number;
    myFoo(): number;
    get prop1(): number;
    set prop1(val: number);
    foo1(a: number): string;
    foo1(b: string): string;
}
declare var i: c;
interface i1 {
    (a: number): number;
    new (b: string): any;
    [a: number]: string;
    myFoo(a: number): string;
    prop: string;
}
declare var i1_i: i1;
declare module m1 {
    class b {
        x: number;
        constructor(x: number);
    }
    module m2 {
    }
}
declare var x: any;
declare const enum color {
    red = 0,
    green = 1,
    blue = 2
}
declare var shade: color;
