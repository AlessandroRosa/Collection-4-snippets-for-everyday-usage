function is_canvas_supported()   { return !!window.HTMLCanvasElement; } // yes, it runs this way !
function is_html_image( _obj )   { return _obj instanceof HTMLImageElement; }
function is_html_canvas( _obj )  { return _obj instanceof HTMLCanvasElement; }
function is_html_context( _obj ) { return _obj instanceof CanvasRenderingContext2D; }

function getMouseXY( e )
{
    tempX = isIE() ? event.clientX + document.body.scrollLeft : e.pageX ;
    tempY = isIE() ? event.clientY + document.body.scrollTop : e.pageY ;
    return [ tempX, tempY ];
}
