motsValue=[];/*[["paris",null,"capitale"],['llll',null,'keys'],['jjjj',null,'ke']];*/
function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
function makeQestion(mFind)
{
    let valueKeys;
    let valueKeys_;
    valueKeys =random_item(Object.keys(baseDisco))  /*pour index*/
    valueKeys_ =baseDisco[valueKeys][mFind];
    return [valueKeys,valueKeys_];
}


for (let i=0;i<5;i++)
    {
        motsValue.push([makeQestion("key")[0],null,"key"]);
        motsValue.push([makeQestion("capitale")[1],null,"capitale"]);
    }