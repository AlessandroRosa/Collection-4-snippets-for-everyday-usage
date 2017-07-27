function safe_int( _val, _set_if_nan )
{
    _val = parseInt( _val, 10 );
    return isNaN( _val ) ? ( isNaN( _set_if_nan ) ? 0 : _set_if_nan ) : _val ;
}

function safe_float( _val, _set_if_nan )
{
    _val = parseFloat( _val );
    return isNaN( _val ) ? ( isNaN( _set_if_nan ) ? 0 : _set_if_nan ) : _val ;
}

function safe_string( _obj, _default_str ) { return ( typeof _obj == "string" || _obj instanceof String ) ? new String( _obj ).trim() : new String( _default_str + "" ).trim() ; }

function safe_array( _obj, _ret_val )
{
    if ( _obj == null || _obj == "undefined" || _ret_val == "undefined" || _ret_val == null ) return new Array() ;
    else if ( _obj instanceof Array ) return _obj ;
    else if ( !_obj instanceof Array && !( _ret_val instanceof Array ) ) return new Array() ;
    else return _ret_val ;
}

function safe_size( _obj, _ret_val )
{
    if ( _ret_val == "undefined" || _ret_val == null ) _ret_val = 0 ;
    if ( _obj == null || _obj == "undefined" ) return _ret_val ;
    else if ( typeof _obj == "string" || _obj instanceof String || _obj instanceof Array || _obj instanceof Object ) return _obj.length ;
    else return _ret_val ;
}
