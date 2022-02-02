
export const generateNewNumericId = (existingNumbers) => {
    while(true){
        const newId = Math.floor(Math.random() * 10240);
        
        if(!existingNumbers.includes(newId)){
            return newId;
        }
    }
}