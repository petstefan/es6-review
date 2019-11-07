// const logger = output => {
//     console.log(output)
//     }
//     export const appName = "ES6 Review";
//     export const dummyFunction = () => {
//     let feedback = "I am a dummy function"; //mutable variable
//     feedback = "I am still a dummy function";//value changed
//     return feedback;
//     }
//     export default logger;

const log = output => {
    document.getElementById("output").innerHTML = output;
    }
    export const appName = "Chapter 10 Code Illustrations";
    export const dummyFunction = () => {
        return "I am a dummy function";
        }
    export const weatherTag = (string, temperature) =>{
        //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
        //We can capture these two parts as array elements
        let substring0 = string[0];
        let substring1 = string[1];
        let weatherCondition;
        //Let us use the embedded expressions for some logic
        if (temperature > 26){
        weatherCondition = "hot!"
        }else{
        weatherCondition = "cool!"
        }
        return `${substring0}${temperature}${substring1}${weatherCondition}`
        }
        export default log;