function DFT() {
    this.calDFT = function(Source){
        let N = Source.length;
        let Angle = 0;
        let cos = 0;
        let sin = 0;
        for(let j=0;j<N;j++)
        {
            for(let i = 0;i<N;i++)
            {
                Angle = ((2*Math.PI*i*j)/N)*(-1);
                cos = Math.cos(Angle);
                sin = Math.sin(Angle);
                console.log(Source[i] +", cos= "+ cos +",sin= "+sin );
            }
            console.log("------------------------------------------");
        }
        return 1; 
    };
};

module.exports = DFT; 