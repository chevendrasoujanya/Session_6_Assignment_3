// Code to find the Sum Up Value
var i, sum = 0, n = 1000;

//using FOR-Loop
for(i = 0; i <= n; i++)
{
	sum+=i;
}

console.log("FOR Loop Sum Upto 1000: " +sum);

//Using WHILE-Loop
var i = 0, sum = 0, n = 1000;
while(i <= n)
{
	sum+=i;
	i++;
}
console.log("WHILE Loop Sum Upto 1000: " +sum);