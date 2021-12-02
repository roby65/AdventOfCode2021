const fs = require('fs').promises;

function part1(lines)
{
    let counter = 0;
    let previousValue = null;
    for(var i in lines){
        let value = parseInt(lines[i]);
        if(previousValue !== null){
            if(value > previousValue){
                counter++;
            }
        }
        previousValue = value;
    }
    console.log("Part 1 : "+counter+"\r\n");
}

function part2(lines)
{
    let values = [];
    for(let i = 0; i < lines.length; i++)
    {

        if(i + 2 < lines.length){
            values.push(parseInt(lines[i]) + parseInt(lines[i + 1 ]) + parseInt(lines[i + 2]));
        }
    }

    let counter = 0;
    let previousValue = null;
    for(let i in values){
        let value = values[i];
        if(previousValue !== null){
            if(value > previousValue){
                counter++;
            }
        }
        previousValue = value;
    }
    console.log("Part 2 : "+counter+"\r\n");
}

fs.readFile("../input.txt",'utf8')
    .catch((e)=>console.error(e))
    .then((data)=>{
        let lines = data.split("\n");
        part1(lines);
        part2(lines);
    })

