var fs = require('fs');
let Input = fs.readFileSync('input.txt', 'utf8');
DFT = new DFT();
let d = Input.split("\r\n");
let Result = DFT.calDFT(d)
let imDisp
for(let i=0;i<Result.length;i++){
    imDisp = "";
    if(Result[i].imagin == 0){
        imDisp = "";
    }
    else if(Result[i].imagin > 0){
        imDisp = "+" + Result[i].imagin.toFixed(2) + "i";
    }
    else{
        imDisp = Result[i].imagin.toFixed(2) + "i";
    }
    console.log("F(" + i + ") = " + Result[i].real.toFixed(2) + imDisp);
}

//---------------------------------------------- function ------------------------------------------------
function DFT() {
    this.calDFT = function(Source){
        let N = Source.length;
        let Angle = 0;
        let cos = 0;
        let sin = 0;
        
        let Result=[];
        for(let j=0;j<N;j++)
        {
            let real = 0;
            let imagin = 0;
            //console.log("----------------- "+ j +" ----------------------");
            for(let i = 0;i<N;i++)
            {
                Angle = ((2*Math.PI*i*j)/N)*(-1);
                cos = parseFloat(Math.cos(Angle).toFixed(10));
                sin = parseFloat(Math.sin(Angle).toFixed(10));
                real = real+Source[i] * cos;
                imagin = imagin+Source[i] * sin;
                //console.log(Source[i] +", cos= "+ cos +",sin= "+sin +" | real= "+real+" imagin= "+imagin);
                Result[j] = {real,imagin}
            }
            //console.log(Result[j] = {real,imagin});
        }
        return Result; 
    };    
};
