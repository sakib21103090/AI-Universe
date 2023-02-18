
let Serial=0;
document.getElementById('btn-calculate').addEventListener('click', function(){
     Serial=Serial+1;
     const NameTriangle=document.getElementById('N-Triangle');
     const NewNameTriangle= NameTriangle.innerText;
     
    const calculateTriangleValue=inputField('triangle-input-1');
    const calculateTriangleValue2=inputField('triangle-input-2');
    const cm=" cm2"
    const AreaOfTriangleInt=0.5*calculateTriangleValue*calculateTriangleValue2;
    const AreaOfTriangle=AreaOfTriangleInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    DisplayData(NewNameTriangle,convert,AreaOfTriangle);
})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    Serial=Serial+1;
    const NameRectangle=document.getElementById('N-rectangle');
     const newNameRectangle= NameRectangle.innerText;

    const calculateRectangleValue=inputField('rectangle-input-1');
    const calculateRectangleValue2=inputField('rectangle-input-2');
    const cm=" cm2"
    const AreaOfRectangleInt=calculateRectangleValue*calculateRectangleValue2;
    const AreaOfRectangle=AreaOfRectangleInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    DisplayData(newNameRectangle,convert,AreaOfRectangle);
})
document.getElementById('btn-Plgm').addEventListener('click', function(){
    Serial=Serial+1;
    const NameParallelogram=document.getElementById('N-Parallelogram');
     const newNameParallelogram= NameParallelogram.innerText;

    const calculatePlgmValue=inputField('Plgm-input-1');
    const calculatePlgmValue2=inputField('Plgm-input-2');
    const cm=" cm2"
    const AreaOfPlgmInt=calculatePlgmValue*calculatePlgmValue2;

    const AreaOfPlgm=AreaOfPlgmInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    DisplayData(newNameParallelogram,convert,AreaOfPlgm);
})
document.getElementById('btn-Rhombus').addEventListener('click', function(){
    Serial=Serial+1;
    const NameRhombus=document.getElementById('N-Rhombus');
    const newNameRhombus= NameRhombus.innerText;
   
    const calculateRhombusValue=inputField('Rhombus-input-1');
    const calculateRhombusValue2=inputField('Rhombus-input-2');
    const cm=" cm2"
    const AreaOfRhombusInt=0.5*calculateRhombusValue*calculateRhombusValue2;
    const AreaOfRhombus=AreaOfRhombusInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");

    const convert=cvt.innerText;
    DisplayData(newNameRhombus,convert,AreaOfRhombus);
})
document.getElementById('btn-Pentagon').addEventListener('click', function(){
    Serial=Serial+1;
    const NamePentagon=document.getElementById('N-Pentagon');
    const newNamePentagon= NamePentagon.innerText;
   
    const calculatePentagonValue=inputField('Pentagon-input-1');
    const calculatePentagonValue2=inputField('Pentagon-input-2');
    const cm=" cm2"
    const AreaOfPentagonInt=0.5*calculatePentagonValue*calculatePentagonValue2;
    const AreaOfPentagon=AreaOfPentagonInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    
    DisplayData(newNamePentagon,convert,AreaOfPentagon);

})
document.getElementById('btn-Ellipse').addEventListener('click', function(){
    Serial=Serial+1;
    const NameEllipse=document.getElementById('N-Ellipse');
    const newNamePentagon= NameEllipse.innerText;

    const calculateEllipseValue=inputField('Ellipse-input-1');
    const calculateEllipseValue2=inputField('Ellipse-input-2');
    const cm=" cm2"
    const AreaOfEllipseInt=(3.14*calculateEllipseValue*calculateEllipseValue2);

    const AreaOfEllipse=AreaOfEllipseInt.toFixed(2)+cm;
    
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    
  
    DisplayData(newNamePentagon,convert,AreaOfEllipse );
})
