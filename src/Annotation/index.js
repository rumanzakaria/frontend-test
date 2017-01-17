import React from "react"
import rgba  from "../__lib__/unit_to_rgba"



///////////////////////////////////////
// Solution 1
// Disable scaling effect on stroke 
// This is the easy solution provided browser has support for 'non-scaling-stroke'
/*////////////////////////////////////
export default props => <path {...{
    d:           props.Geometry,
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
    transform:   `matrix(${ props.Matrix.join(",") })`,
    vectorEffect: `non-scaling-stroke`,
  }}/>
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////*/


//////////////////////////////////////////////////////////////////
// Solution 2
// Set d to the new geometry after each 2D cordinate (x, y) has been 
// transformed by the current matrix.
// Then render the path without the transformation matrix or with identity matrix
// This is an expensive solution since there are lots of transformations being performed 
// for each geometry. Might slow down if there are huge numbers of 
// coordinates. 
//*/////////////////////////
import xform_point from "../__lib__/xform_point"

export default props => <path {...{
    d:           transformGeom(props),
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
    transform:   `matrix(1,0,0,1,0,0)` //identity matrix
  }}/>

// Extract each and every 2D coordinates (x, y) from the geometry and tranform it
// by the current matrix. Then combine each 
// tranformed coordinate into a new geometry and return it. 
function transformGeom(props) {
    var xform = xform_point(props.Matrix);
    var strArray = props.Geometry.split(/([a-zA-Z])/);
    var geom = "";
    
    console.log('strArray', strArray);

    for(var i = 0; i < strArray.length; i++){
        console.log(strArray[i]);

        var length = strArray[i].length;
        if(strArray[i].length == 1){
            geom += strArray[i];
        }
        else if(length > 1){
            var coord = strArray[i].split(',');
            console.log('coord: ', coord);
            if(coord.length == 2){
              var c = xform({ x:Number(coord[0]), y:Number(coord[1])});
              geom += c.x + ', ' + c.y;
              console.log(c);
            }
        }
    }

    return geom; 
}
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////*/
