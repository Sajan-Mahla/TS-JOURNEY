function printAnything(name: string, age:number, isEngineer: boolean, skill: string[]): string{
    return `So hey everyone, ${name} this side. im ${age} years old, my skills are ${skill}.  am i an engineer? its: ${isEngineer}`
}

console.log(printAnything("Sajan",19,true, ["iOS","Backend","Swift"]))


// OUTPUT: So hey everyone Sajan this side im 19 years old, my skills are iOS,Backend,Swift,  am i an engineer? its: true