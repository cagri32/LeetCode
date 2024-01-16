class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }
    
    push(val) {
        if(!this.stack.length){
            this.stack.push(val)
            this.minStack.push(val)
        } else{
            this.stack.push(val)
            this.minStack.push(Math.min(val,this.minStack[this.minStack.length -1]))
        }
    }
        
    pop() {
        if(!this.stack.length){
            return null;
        } else {
            this.minStack.pop();
            return this.stack.pop();
        }
    }
    
    top() {
        return this.stack[this.stack.length -1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length -1];
    }
}


// var MinStack = function() {
    
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */