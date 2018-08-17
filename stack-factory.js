(function() {
'use strict';
   
    function StackFactory() {
    	/**
    	 * Initializes a new empty `Stack`.
    	 *
    	 * @return {Stack}
    	 */
    	function Stack() {
    	  this._store = [];
    	}

    	/**
    	 * Returns whether the stack is empty or not.
    	 *
    	 * @return {Boolean}
    	 */
    	Stack.prototype.isEmpty = function() {
    	  return this.size() === 0;
    	};

    	/**
    	 * Peeks at the top element of the stack.
    	 *
    	 * @return {Object}
    	 * @throws {Error} when the stack is empty.
    	 */
    	Stack.prototype.peek = function() {
    	  if (this.isEmpty()) throw new Error('Stack is empty');

    	  return this._store[this.size() - 1];
    	};

    	/**
    	 * Pops the top element of the stack.
    	 *
    	 * @return {Object}
    	 * @throws {Error} when the stack is empty.
    	 */
    	Stack.prototype.pop = function() {
    	  if (this.isEmpty()) throw new Error('Stack is empty');

    	  return this._store.pop();
    	};

    	/**
    	 * Pushes the `element` at the top of the stack and returns its new size.
    	 *
    	 * @param {Object} element
    	 * @return {Number}
    	 */
    	Stack.prototype.push = function(element) {
    	  return this._store.push(element);
    	};

    	/**
    	 * Returns the size of the stack.
    	 *
    	 * @return {Number}
    	 */
    	Stack.prototype.size = function() {
    	  return this._store.length;
    	};

    	this.newInstance = function() {
    		return (new Stack());
    	};
    }
})();