document.getElementById('btn-calculate').addEventListener('click', function(){
   
    const calculateTriangleValue=inputField('triangle-input-1');
    const calculateTriangleValue2=inputField('triangle-input-2');
    const AreaOfTriangle=0.5*calculateTriangleValue*calculateTriangleValue2;
    console.log(AreaOfTriangle);

    
    
    
})
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const calculateRectangleValue=inputField('rectangle-input-1');
    const calculateRectangleValue2=inputField('rectangle-input-2');
    const AreaOfRectangle=calculateRectangleValue*calculateRectangleValue2;
    console.log(AreaOfRectangle);
})
document.getElementById('btn-Plgm').addEventListener('click', function(){
    const calculatePlgmValue=inputField('Plgm-input-1');
    const calculatePlgmValue2=inputField('Plgm-input-2');
    const AreaOfPlgm=calculatePlgmValue*calculatePlgmValue2;
    console.log(AreaOfPlgm);
})
document.getElementById('btn-Rhombus').addEventListener('click', function(){
    const calculateRhombusValue=inputField('Rhombus-input-1');
    const calculateRhombusValue2=inputField('Rhombus-input-2');
    const AreaOfRhombus=0.5*calculateRhombusValue*calculateRhombusValue2;
    console.log(AreaOfRhombus);
})
document.getElementById('btn-Pentagon').addEventListener('click', function(){
    const calculatePentagonValue=inputField('Pentagon-input-1');
    const calculatePentagonValue2=inputField('Pentagon-input-2');
    const AreaOfPentagon=0.5*calculatePentagonValue*calculatePentagonValue2;
    console.log(AreaOfPentagon);
})
document.getElementById('btn-Ellipse').addEventListener('click', function(){
    const calculateEllipseValue=inputField('Ellipse-input-1');
    const calculateEllipseValue2=inputField('Ellipse-input-2');
    const AreaOfEllipse=3.14*calculateEllipseValue*calculateEllipseValue2;
    console.log(AreaOfEllipse.toFixed(2));
})
