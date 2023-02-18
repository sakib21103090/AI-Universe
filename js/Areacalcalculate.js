// for serial
let Serial=0;  
// add event for first card operation 
document.getElementById('btn-calculate').addEventListener('click', function(){
    //  dynamic serial
    Serial=Serial+1; 
      //   get the data from htm using id
     const NameTriangle=document.getElementById('N-Triangle');
     const NewNameTriangle= NameTriangle.innerText;
     
    const calculateTriangleValue=inputField('triangle-input-1');
    const calculateTriangleValue2=inputField('triangle-input-2');
    // for mc2 add beside value
    const cm=" cm2"
    // logic of calculation 
    const AreaOfTriangleInt=0.5*calculateTriangleValue*calculateTriangleValue2;
    const AreaOfTriangle=AreaOfTriangleInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    //  getting data using common function using getElementById method
    DisplayData(NewNameTriangle,convert,AreaOfTriangle);

    //    add card bg random color
    document.getElementById("cardt").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardt.style.backgroundColor = "#" + randomColor;
      });
      cardt.addEventListener("mouseout", function() {
        cardt.style.backgroundColor = "";
      });

})
// add event for 2nd card operation 
document.getElementById('btn-rectangle').addEventListener('click', function(){
     //  dynamic serial
    Serial=Serial+1;
    //   get the data from htm using id
    const NameRectangle=document.getElementById('N-rectangle');
     const newNameRectangle= NameRectangle.innerText;

    const calculateRectangleValue=inputField('rectangle-input-1');
    const calculateRectangleValue2=inputField('rectangle-input-2');
    // for mc2 add beside value
    const cm=" cm2"
    // logic of calculation 
    const AreaOfRectangleInt=calculateRectangleValue*calculateRectangleValue2;
    const AreaOfRectangle=AreaOfRectangleInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
     //  getting data using common function using getElementById method
    DisplayData(newNameRectangle,convert,AreaOfRectangle);

      //    add card bg random color
      document.getElementById("cardp").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardp.style.backgroundColor = "#" + randomColor;
      });
      cardp.addEventListener("mouseout", function() {
        cardp.style.backgroundColor = "";
      });
})
// add event for 3rd card operation 
document.getElementById('btn-Plgm').addEventListener('click', function(){
   //  dynamic serial
    Serial=Serial+1;
    //   get the data from htm using id
    const NameParallelogram=document.getElementById('N-Parallelogram');
     const newNameParallelogram= NameParallelogram.innerText;

    const calculatePlgmValue=inputField('Plgm-input-1');
    const calculatePlgmValue2=inputField('Plgm-input-2');
    // for mc2 add beside value
    const cm=" cm2"
    // logic of calculation 
    const AreaOfPlgmInt=calculatePlgmValue*calculatePlgmValue2;

    const AreaOfPlgm=AreaOfPlgmInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
     //  getting data using common function using getElementById method
    DisplayData(newNameParallelogram,convert,AreaOfPlgm);
       //    add card bg random color
       document.getElementById("cardr").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardr.style.backgroundColor = "#" + randomColor;
      });
      cardr.addEventListener("mouseout", function() {
        cardr.style.backgroundColor = "";
      });
})
// add event for 4th card operation 
document.getElementById('btn-Rhombus').addEventListener('click', function(){
    //  dynamic serial
    Serial=Serial+1;
    //   get the data from htm using id
    const NameRhombus=document.getElementById('N-Rhombus');
    const newNameRhombus= NameRhombus.innerText;
   
    const calculateRhombusValue=inputField('Rhombus-input-1');
    const calculateRhombusValue2=inputField('Rhombus-input-2');
     // for mc2 add beside value
    const cm=" cm2"
    // logic of calculation 
    const AreaOfRhombusInt=0.5*calculateRhombusValue*calculateRhombusValue2;
    const AreaOfRhombus=AreaOfRhombusInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");

    const convert=cvt.innerText;
     //  getting data using common function using getElementById method
    DisplayData(newNameRhombus,convert,AreaOfRhombus);
      //    add card bg random color
      document.getElementById("cardR").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardR.style.backgroundColor = "#" + randomColor;
      });
      cardR.addEventListener("mouseout", function() {
        cardR.style.backgroundColor = "";
      });
})
// add event for 5th card operation
document.getElementById('btn-Pentagon').addEventListener('click', function(){
    //  dynamic serial
    Serial=Serial+1;
    //   get the data from htm using id
    const NamePentagon=document.getElementById('N-Pentagon');
    const newNamePentagon= NamePentagon.innerText;
   
    const calculatePentagonValue=inputField('Pentagon-input-1');
    const calculatePentagonValue2=inputField('Pentagon-input-2');
    // for mc2 add beside value
    const cm=" cm2"
   // logic of calculation 
    const AreaOfPentagonInt=0.5*calculatePentagonValue*calculatePentagonValue2;
    const AreaOfPentagon=AreaOfPentagonInt.toFixed(2)+cm;
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    //  getting data using common function using getElementById method
    DisplayData(newNamePentagon,convert,AreaOfPentagon);
    //    add card bg random color
    document.getElementById("cardpe").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardpe.style.backgroundColor = "#" + randomColor;
      });
      cardpe.addEventListener("mouseout", function() {
        cardpe.style.backgroundColor = "";
      });

})
// add event for 6th card operation
document.getElementById('btn-Ellipse').addEventListener('click', function(){
   //  dynamic serial
    Serial=Serial+1;
    //   get the data from htm using id
    const NameEllipse=document.getElementById('N-Ellipse');
    const newNamePentagon= NameEllipse.innerText;

    const calculateEllipseValue=inputField('Ellipse-input-1');
    const calculateEllipseValue2=inputField('Ellipse-input-2');
     // for mc2 add beside value
    const cm=" cm2"
     // logic of calculation 
    const AreaOfEllipseInt=(3.14*calculateEllipseValue*calculateEllipseValue2);

    const AreaOfEllipse=AreaOfEllipseInt.toFixed(2)+cm;
    
    const cvt=document.getElementById("id");
    const convert=cvt.innerText;
    
  //  getting data using common function using getElementById method
    DisplayData(newNamePentagon,convert,AreaOfEllipse );

     //    add card bg random color
     document.getElementById("cardE").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardE.style.backgroundColor = "#" + randomColor;
      });
      cardE.addEventListener("mouseout", function() {
        cardE.style.backgroundColor = "";
      });
})
