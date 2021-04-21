

var defangIPaddr = function(address) {
    
    let input = address 
    
    let array = input.split("")

   
    
    for (i = 0; i < array.length; i++) {
        let item = array[i]
        if (array[i] === ".") {
            let value = array[i]
            let newValue = ["."]

            array[i] = newValue
   
        }
        
        
    }
    console.log(array);
    
};

defangIPaddr("i.i.1.i.2.i")

<!--



